import { getCookie } from "cookies-next"
import { cookies } from "next/headers"
import { Alert, Container, Title } from "@mantine/core"
import { IconInfoCircle } from "@tabler/icons-react"
import prisma from "@/client"
import { ShoppingLists } from "../../../../components/ShoppingLists/ShoppingLists"


async function getFamilyDetails(familyId: number) {
  const familiesCookie = await getCookie("families", { cookies });
  if (!familiesCookie) return null;

  const families = JSON.parse(familiesCookie) as { id: number, name: string }[];
  const family = families.find((f) => f.id === familyId);
  return family || null;
}

async function getShoppingLists(familyId: number) {
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

  const initialLists = await getShoppingLists(familyId);

  return (
    <Container>
      <Title order={1} my="xl">
        Famille: {family.name}
      </Title>
      <ShoppingLists familyId={familyId} initialLists={initialLists} />
    </Container>
  );
}
