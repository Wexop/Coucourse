import { NextResponse } from "next/server"
import prisma from "../../../src/client"


export async function POST(request: Request) {
  const { name } = await request.json();
  console.log( name )
  if (!name) {
    return NextResponse.json(
      { error: "Family name is required" },
      { status: 400 }
    );
  }
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  console.log( {
    name,
    code,
  })
  const family = await prisma.family.create({
    data: {
      name,
      code,
    },
  });
  return NextResponse.json(family);
}
