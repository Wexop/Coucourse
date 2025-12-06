"use client";

import { ActionIcon, Box, Button, Card, Center, Group, Loader, Text, Textarea, Title, } from "@mantine/core"
import { IconWand } from "@tabler/icons-react"
import { useState } from "react"
import { z } from "zod"


interface AIAssistantTabProps {
  familyId: number;
  onRecipeCreated: (recipe: any) => void;
}

// Schema for the data received from the AI
const aiRecipeSchema = z.object({
  recipe_name: z.string(),
  prep_time_minutes: z.number(),
  ingredients: z.array(
    z.object({ name: z.string(), quantity: z.string().optional() })
  ),
  instructions: z.array(z.string()),
});

type AiProposedRecipe = z.infer<typeof aiRecipeSchema>;

export function AIAssistantTab({
  familyId,
  onRecipeCreated,
}: AIAssistantTabProps) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [proposedRecipe, setProposedRecipe] = useState<AiProposedRecipe | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    setIsLoading(true);
    setError(null);
    setProposedRecipe(null);

    const response = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    if (!response.ok) {
      setError("L'assistant n'a pas pu générer de recette. Essayez d'être plus précis.");
    } else {
      const recipe = await response.json();
      setProposedRecipe(recipe);
    }
    setIsLoading(false);
  };

  const handleAcceptRecipe = async () => {
    if (!proposedRecipe) return;

    // **THE FIX**: Transform the AI's output to match our database schema
    const recipeToSave = {
      name: proposedRecipe.recipe_name,
      duration: proposedRecipe.prep_time_minutes,
      steps: proposedRecipe.instructions.map((desc) => ({ description: desc })),
      items: proposedRecipe.ingredients,
    };

    const response = await fetch(`/api/family/${familyId}/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipeToSave),
    });

    if (response.ok) {
      const newRecipe = await response.json();
      onRecipeCreated(newRecipe);
      setProposedRecipe(null);
      setInput("");
    }
  };

  return (
    <Box>
      <Title order={3} mb="md">Générateur de Recettes IA</Title>
      <Text c="dimmed" mb="xl">
        Décrivez la recette que vous souhaitez créer. Vous pouvez lister des ingrédients, donner un nom, ou décrire un plat. L'assistant vous proposera une recette structurée.
      </Text>

      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
        <Textarea
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
          placeholder="Ex: Une tarte aux pommes rapide avec de la cannelle..."
          style={{ flexGrow: 1 }}
          minRows={3} autosize
        />
        <ActionIcon
          type="submit"
          size="xl"
          variant="filled"
          color="blue"
          loading={isLoading}
        >
          <IconWand />
        </ActionIcon>
      </form>

      {isLoading && (
        <Center mt="xl">
          <Loader />
          <Text ml="sm">L'assistant réfléchit...</Text>
        </Center>
      )}

      {error && (
        <Text c="red" mt="md">{error}</Text>
      )}

      {proposedRecipe && (
        <Card withBorder p="lg" mt="xl">
          <Text>L'assistant a généré la recette suivante. Voulez-vous la sauvegarder ?</Text>

          <Title order={4}>Proposition de Recette : {proposedRecipe.recipe_name}</Title>

          <Title order={4} >Ingrédients</Title>
          {proposedRecipe.ingredients.map(item=> <Text key={item.name}>{item.name}</Text>)}

          <Title order={4} >Etapes</Title>
          {proposedRecipe.instructions.map((item, index)=> (<>- {index + 1}<Text key={index}>{item}</Text></>))}

          <Group mt="sm">
            <Button onClick={handleAcceptRecipe}>Accepter et Sauvegarder</Button>
            <Button
              variant="outline"
              onClick={() => setProposedRecipe(null)}
            >
              Rejeter
            </Button>
          </Group>
        </Card>
      )}
    </Box>
  );
}
