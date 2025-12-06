import { GoogleGenerativeAI, Schema, SchemaType } from "@google/generative-ai"
import { NextResponse } from "next/server"
import { z } from "zod/v3"


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

// Zod schema for final validation on our side
const zodRecipeSchema = z.object({
  recipe_name: z.string(),
  prep_time_minutes: z.number(),
  ingredients: z.array(
    z.object({
      name: z.string(),
      quantity: z.string().optional(),
    })
  ),
  instructions: z.array(z.string()),
});

// Manual schema definition matching the Google AI SDK's expected types
const googleAiSchema: Schema = {
  type: SchemaType.OBJECT,
  properties: {
    recipe_name: { type: SchemaType.STRING, description: "Le nom de la recette" },
    prep_time_minutes: { type: SchemaType.NUMBER, description: "La durée totale de préparation en minutes" },
    ingredients: {
      type: SchemaType.ARRAY,
      description: "La liste des ingrédients",
      items: {
        type: SchemaType.OBJECT,
        properties: {
          name: { type: SchemaType.STRING, description: "Le nom de l'ingrédient" },
          quantity: { type: SchemaType.STRING, description: "La quantité, ex: '200g'" },
        },
        required: ["name"],
      },
    },
    instructions: {
      type: SchemaType.ARRAY,
      description: "La liste des étapes de préparation",
      items: { type: SchemaType.STRING },
    },
  },
  required: ["recipe_name", "prep_time_minutes", "ingredients", "instructions"],
};

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `
    Tu es un assistant culinaire. En te basant sur la demande de l'utilisateur, génère une recette complète.
    Toute la recette, y compris le nom, les étapes et les ingrédients, doit être en FRANÇAIS.
    Demande de l'utilisateur : "${message}"
  `;

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: googleAiSchema,
      },
    });

    const response = result.response;
    const recipeText = response.text();
    let recipeObject = JSON.parse(recipeText);

    if (Array.isArray(recipeObject)) {
      recipeObject = recipeObject[0];
    }

    // Final validation with our Zod schema
    const validatedRecipe = zodRecipeSchema.parse(recipeObject);

    return NextResponse.json(validatedRecipe);

  } catch (error) {
    console.error("Error generating recipe with Google AI:", error);
    return NextResponse.json(
      { error: "Failed to generate recipe from AI" },
      { status: 500 }
    );
  }
}
