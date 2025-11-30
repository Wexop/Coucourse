import { NextResponse } from "next/server"
import prisma from "@/client"


export async function GET(
  request: Request,
  { params }: { params: { familyId: string } }
) {
  const familyId = parseInt(params.familyId, 10);

  const shoppingLists = await prisma.shoppingList.findMany({
    where: {
      familyShoppingList: {
        some: {
          familyId: familyId,
        },
      },
    },
    include: {
      shoppingListItem: true,
    },
  });

  return NextResponse.json(shoppingLists);
}

export async function POST(
  request: Request,
  { params }: { params: { familyId: string } }
) {
  const familyId = parseInt(params.familyId, 10);
  const { name } = await request.json();

  const shoppingList = await prisma.shoppingList.create({
    data: {
      name,
      familyShoppingList: {
        create: {
          familyId: familyId,
        },
      },
    },
  });

  return NextResponse.json(shoppingList);
}
