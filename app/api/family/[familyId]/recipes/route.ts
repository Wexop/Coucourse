import { NextResponse } from "next/server";
import prisma from "@/client";

export async function POST(
  request: Request,
  { params }: { params: { familyId: string } }
) {
  const familyId = parseInt(params.familyId, 10);
  const { name, duration, steps, items } = await request.json();

  if (!name || !steps || !items) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const newRecipe = await prisma.$transaction(async (tx) => {
      const recipe = await tx.recipe.create({
        data: {
          name,
          duration,
          public: false, // Recipes are private to the family by default
        },
      });

      await tx.familyRecipe.create({
        data: {
          familyId: familyId,
          recipeId: recipe.id,
        },
      });

      if (steps.length > 0) {
        await tx.recipeStep.createMany({
          data: steps.map((step: { description: string }, index: number) => ({
            description: step.description,
            index: index + 1,
            recipeId: recipe.id,
          })),
        });
      }

      if (items.length > 0) {
        await tx.recipeItem.createMany({
          data: items.map((item: { name: string; quantity: string }) => ({
            name: item.name,
            quantity: item.quantity,
            recipeId: recipe.id,
          })),
        });
      }

      return recipe;
    });

    return NextResponse.json(newRecipe, { status: 201 });
  } catch (error) {
    console.error("Recipe creation failed:", error);
    return NextResponse.json(
      { error: "Failed to create recipe" },
      { status: 500 }
    );
  }
}
