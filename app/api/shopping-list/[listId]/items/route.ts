import { NextResponse } from "next/server"
import prisma from "@/client"


export async function POST(
  request: Request,
  { params }: { params: { listId: string } }
) {
  const listId = parseInt(params.listId, 10);
  const { name } = await request.json();

  const item = await prisma.shoppingListItem.create({
    data: {
      name,
      shoppingListId: listId,
    },
  });

  return NextResponse.json(item);
}
