import { NextResponse } from "next/server";
import prisma from "@/client";

export async function DELETE(
  request: Request,
  { params }: { params: { recipeId: string } }
) {
  const recipeId = parseInt(params.recipeId, 10);

  try {
    await prisma.$transaction(async (tx) => {
      // Delete associations with families
      await tx.familyRecipe.deleteMany({
        where: { recipeId: recipeId },
      });

      // Delete ingredients
      await tx.recipeItem.deleteMany({
        where: { recipeId: recipeId },
      });

      // Delete steps
      await tx.recipeStep.deleteMany({
        where: { recipeId: recipeId },
      });

      // Finally, delete the recipe itself
      await tx.recipe.delete({
        where: { id: recipeId },
      });
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Recipe deletion failed:", error);
    return NextResponse.json(
      { error: "Failed to delete recipe" },
      { status: 500 }
    );
  }
}
