import { cookies } from "next/headers";
import { Container, Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import prisma from "@/client";
import { FamilyHeader } from "../../../../components/FamilyHeader/FamilyHeader";
import { ShoppingList } from "../../../../types/shopping-list";
import { FamilyTabs } from "../../../../components/FamilyTabs/FamilyTabs";
import { recipe } from "@/generated/prisma";

async function getFamilyDetails(familyId: number) {
  const familiesCookie = (await cookies()).get("families")?.value;
  if (!familiesCookie) return null;

  const families = JSON.parse(familiesCookie);
  const family = families.find((f: { id: number }) => f.id === familyId);
  return family || null;
}

async function getShoppingLists(familyId: number): Promise<ShoppingList[]> {
  const shoppingLists = await prisma.shoppingList.findMany({
    where: {
      familyShoppingList: {
        some: {
          familyId: familyId,
        },
      },
    },
    include: {
      shoppingListItem: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return shoppingLists;
}

async function getRecipes(familyId: number): Promise<recipe[]> {
  const recipes = await prisma.recipe.findMany({
    where: {
      familyRecipe: {
        some: {
          familyId: familyId,
        },
      },
    },
  });
  return recipes;
}

export default async function FamilyPage({
  params,
}: {
  params: { familyId: string };
}) {
  const familyId = parseInt(params.familyId, 10);
  const family = await getFamilyDetails(familyId);

  if (!family) {
    return (
      <Container>
        <Alert
          variant="light"
          color="red"
          title="Accès non autorisé"
          icon={<IconInfoCircle />}
          mt="xl"
        >
          Vous n'appartenez pas à cette famille ou elle n'existe pas.
        </Alert>
      </Container>
    );
  }

  const initialShoppingLists = await getShoppingLists(familyId);
  const initialRecipes = await getRecipes(familyId);

  return (
    <Container>
      <FamilyHeader family={family} />
      <FamilyTabs
        familyId={familyId}
        initialShoppingLists={initialShoppingLists}
        initialRecipes={initialRecipes}
      />
    </Container>
  );
}
