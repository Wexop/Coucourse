"use client";

import {
  Button,
  Group,
  Title,
  SimpleGrid,
  Card,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CreateRecipeModal } from "../CreateRecipeModal/CreateRecipeModal";
import { recipe } from "@/generated/prisma";
import Link from "next/link";

interface RecipesTabProps {
  familyId: number;
  recipes: recipe[];
  onRecipeCreated: (newRecipe: recipe) => void;
}

export function RecipesTab({
  familyId,
  recipes,
  onRecipeCreated,
}: RecipesTabProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <CreateRecipeModal
        opened={opened}
        onClose={close}
        familyId={familyId}
        onRecipeCreated={onRecipeCreated}
      />

      <Group justify="space-between" align="center" my="md">
        <Title order={3}>Vos recettes</Title>
        <Button onClick={open}>Créer une recette</Button>
      </Group>

      {recipes.length === 0 && (
        <Text>Vous n'avez pas encore de recettes. Créez-en une !</Text>
      )}

      <SimpleGrid cols={3} mt="md">
        {recipes.map((rec) => (
          <Card key={rec.id} shadow="sm" p="lg" radius="md" withBorder>
            <Text fw={500}>{rec.name}</Text>
            <Text size="sm" c="dimmed">
              Durée: {rec.duration} min
            </Text>
            <Button
              component={Link}
              href={`/app/family/${familyId}/recipe/${rec.id}`}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              Voir la recette
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
