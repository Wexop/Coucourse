import { Alert, Container } from "@mantine/core"
import { IconInfoCircle } from "@tabler/icons-react"
import prisma from "@/client"
import { RecipeDetails } from "../../../../../../components/RecipeDetails/RecipeDetails"


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
  params: Promise<{ familyId: string; recipeId: string }>;
}) {

  const {recipeId, familyId} = (await params)

  const recipeIdFound = parseInt(recipeId, 10);
  const familyIdFound = parseInt(familyId, 10);
  const recipe = await getRecipeDetails(recipeIdFound);
  const shoppingLists = await getShoppingLists(familyIdFound);

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
      familyId={familyIdFound}
      recipe={recipe}
      shoppingLists={shoppingLists}
    />
  );
}
