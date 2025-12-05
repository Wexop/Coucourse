import { Container, Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import prisma from "@/client";
import { RecipeDetails } from "../../../../../../components/RecipeDetails/RecipeDetails";

async function getRecipeDetails(recipeId: number) {
  return prisma.recipe.findUnique({
    where: { id: recipeId },
    include: {
      recipeStep: { orderBy: { index: "asc" } },
      recipeItem: { orderBy: { name: "asc" } },
    },
  });
}

async function getShoppingLists(familyId: number) {
  return prisma.shoppingList.findMany({
    where: {
      familyShoppingList: {
        some: {
          familyId: familyId,
        },
      },
    },
  });
}

export default async function RecipePage({
  params,
}: {
  params: { familyId: string; recipeId: string };
}) {
  const recipeId = parseInt(params.recipeId, 10);
  const familyId = parseInt(params.familyId, 10);
  const recipe = await getRecipeDetails(recipeId);
  const shoppingLists = await getShoppingLists(familyId);

  if (!recipe) {
    return (
      <Container>
        <Alert
          variant="light"
          color="red"
          title="Recette non trouvée"
          icon={<IconInfoCircle />}
          mt="xl"
        >
          Cette recette n'existe pas ou a été supprimée.
        </Alert>
      </Container>
    );
  }

  return (
    <RecipeDetails
      familyId={familyId}
      recipe={recipe}
      shoppingLists={shoppingLists}
    />
  );
}
