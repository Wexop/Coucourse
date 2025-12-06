import { NextResponse } from "next/server";
import prisma from "@/client";

export async function DELETE(
  request: Request,
  { params }: { params: { listId: string } }
) {
  const listId = parseInt(params.listId, 10);

  try {
    await prisma.$transaction(async (tx) => {
      // 1. Delete all items in the shopping list
      await tx.shoppingListItem.deleteMany({
        where: { shoppingListId: listId },
      });

      // 2. Delete the link between the family and the shopping list
      await tx.familyShoppingList.deleteMany({
        where: { shoppingListId: listId },
      });

      // 3. Delete the shopping list itself
      await tx.shoppingList.delete({
        where: { id: listId },
      });
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Failed to delete shopping list:", error);
    return NextResponse.json(
      { error: "Failed to delete shopping list" },
      { status: 500 }
    );
  }
}
