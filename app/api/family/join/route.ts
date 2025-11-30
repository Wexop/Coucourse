import { NextResponse } from "next/server"
import prisma from "../../../../src/client"


export async function POST(request: Request) {
  const { code } = await request.json();
  if (!code) {
    return NextResponse.json({ error: "Family code is required" }, { status: 400 });
  }
  const family = await prisma.family.findFirst({
    where: {
      code,
    },
  });
  if (!family) {
    return NextResponse.json({ error: "Family not found" }, { status: 404 });
  }
  return NextResponse.json(family);
}
