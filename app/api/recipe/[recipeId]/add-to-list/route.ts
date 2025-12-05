import { NextResponse } from "next/server";
import prisma from "@/client";

export async function POST(
  request: Request,
  { params }: { params: { recipeId: string } }
) {
  const recipeId = parseInt(params.recipeId, 10);
  const { shoppingListId } = await request.json();

  if (!shoppingListId) {
    return NextResponse.json(
      { error: "shoppingListId is required" },
      { status: 400 }
    );
  }

  try {
    const recipeItems = await prisma.recipeItem.findMany({
      where: { recipeId },
    });

    if (recipeItems.length === 0) {
      return NextResponse.json(
        { message: "No items to add" },
        { status: 200 }
      );
    }

    // Format items for the shopping list
    const shoppingListItems = recipeItems.map((item) => {
      const name = item.quantity
        ? `${item.name} (${item.quantity})`
        : item.name;
      return {
        name,
        shoppingListId: shoppingListId,
        checked: false,
      };
    });

    await prisma.shoppingListItem.createMany({
      data: shoppingListItems,
    });

    return NextResponse.json(
      { success: true, count: shoppingListItems.length },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to add recipe items to list:", error);
    return NextResponse.json(
      { error: "Failed to add items" },
      { status: 500 }
    );
  }
}
