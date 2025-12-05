"use client";

import { useState } from "react";
import { Button, Select, Group, Text } from "@mantine/core";
import { shoppingList } from "@/generated/prisma";

interface AddRecipeToListProps {
  recipeId: number;
  shoppingLists: shoppingList[];
}

export function AddRecipeToList({
  recipeId,
  shoppingLists,
}: AddRecipeToListProps) {
  const [selectedList, setSelectedList] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleAddToList = async () => {
    if (!selectedList) return;
    setLoading(true);
    setFeedback("");

    const response = await fetch(`/api/recipe/${recipeId}/add-to-list`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shoppingListId: parseInt(selectedList, 10) }),
    });

    if (response.ok) {
      const result = await response.json();
      setFeedback(`${result.count} ingrédient(s) ajouté(s) avec succès !`);
    } else {
      setFeedback("Une erreur est survenue.");
    }
    setLoading(false);
  };

  return (
    <Group>
      <Select
        label="Ajouter les ingrédients à une liste"
        placeholder="Choisissez une liste"
        data={shoppingLists.map((list) => ({
          value: list.id.toString(),
          label: list.name,
        }))}
        value={selectedList}
        onChange={setSelectedList}
      />
      <Button onClick={handleAddToList} loading={loading} disabled={!selectedList}>
        Ajouter
      </Button>
      {feedback && <Text size="sm">{feedback}</Text>}
    </Group>
  );
}
