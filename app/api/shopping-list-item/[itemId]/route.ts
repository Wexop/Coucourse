import { NextResponse } from "next/server";
import prisma from "@/client";

export async function PATCH(
  request: Request,
  { params }: { params: { itemId: string } }
) {
  const itemId = parseInt(params.itemId, 10);
  const { checked } = await request.json();

  const updatedItem = await prisma.shoppingListItem.update({
    where: { id: itemId },
    data: { checked },
  });

  return NextResponse.json(updatedItem);
}

export async function DELETE(
  request: Request,
  { params }: { params: { itemId: string } }
) {
  const itemId = parseInt(params.itemId, 10);

  await prisma.shoppingListItem.delete({
    where: { id: itemId },
  });

  return new Response(null, { status: 204 });
}
