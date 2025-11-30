import { NextRequest, NextResponse } from "next/server"
import prisma from "@/client"


export async function GET(
  request: NextRequest,
  { params }: { params: { familyId: string } }
) {
  const familyId = parseInt(params.familyId, 10);
  const search = request.nextUrl.searchParams.get("q");

  if (!search) {
    return NextResponse.json([]);
  }

  const items = await prisma.shoppingListItem.findMany({
    where: {
      checked: true,
      name: {
        contains: search,
        mode: "insensitive",
      },
      shoppingList: {
        familyShoppingList: {
          some: {
            familyId: familyId,
          },
        },
      },
    },
    distinct: ["name"],
    take: 5,
  });

  return NextResponse.json(items.map((item) => item.name));
}
