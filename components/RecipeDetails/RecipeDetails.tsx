"use client";

import {
  Container,
  Title,
  Text,
  Divider,
  List,
  SimpleGrid,
  Paper,
  Group,
  Button,
  Anchor,
  Modal,
} from "@mantine/core";
import { AddRecipeToList } from "../AddRecipeToList/AddRecipeToList";
import {
  recipe,
  recipeItem,
  recipeStep,
  shoppingList,
} from "@/generated/prisma";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";

type DetailedRecipe = recipe & {
  recipeStep: recipeStep[];
  recipeItem: recipeItem[];
};

interface RecipeDetailsProps {
  familyId: number;
  recipe: DetailedRecipe;
  shoppingLists: shoppingList[];
}

export function RecipeDetails({
  familyId,
  recipe,
  shoppingLists,
}: RecipeDetailsProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  const handleDelete = async () => {
    await fetch(`/api/recipe/${recipe.id}`, {
      method: "DELETE",
    });
    router.push(`/app/family/${familyId}`);
    router.refresh();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Supprimer la recette">
        <Text>
          Êtes-vous sûr de vouloir supprimer la recette "{recipe.name}" ? Cette
          action est irréversible.
        </Text>
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={close}>
            Annuler
          </Button>
          <Button color="red" onClick={handleDelete}>
            Supprimer
          </Button>
        </Group>
      </Modal>

      <Container>
        <Anchor
          component={Link}
          href={`/app/family/${familyId}`}
          size="sm"
          my="md"
        >
          <Group gap="xs">
            <IconArrowLeft size={14} />
            Retour à la famille
          </Group>
        </Anchor>

        <Group justify="space-between" align="center">
          <Title order={1}>{recipe.name}</Title>
          <Button variant="outline" color="red" onClick={open}>
            Supprimer
          </Button>
        </Group>
        <Text c="dimmed">Durée : {recipe.duration} minutes</Text>

        <Divider my="xl" />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Paper p="md" withBorder>
            <Title order={3}>Ingrédients</Title>
            <List>
              {recipe.recipeItem.map((item) => (
                <List.Item key={item.id}>
                  {item.name} {item.quantity && `(${item.quantity})`}
                </List.Item>
              ))}
            </List>
          </Paper>
          <Paper p="md" withBorder>
            <Title order={3}>Étapes</Title>
            <List type="ordered">
              {recipe.recipeStep.map((step) => (
                <List.Item key={step.id}>{step.description}</List.Item>
              ))}
            </List>
          </Paper>
        </SimpleGrid>

        <Divider my="xl" />

        <AddRecipeToList recipeId={recipe.id} shoppingLists={shoppingLists} />
      </Container>
    </>
  );
}
