import { NextRequest, NextResponse } from "next/server"
import { getCookie, setCookie } from "cookies-next"
import prisma from "@/client"
import { family } from "@/generated/prisma"


export async function POST(request: NextRequest) {
  const { name } = await request.json();
  if (!name) {
    return NextResponse.json(
      { error: "Family name is required" },
      { status: 400 }
    );
  }
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  const family = await prisma.family.create({
    data: {
      name,
      code,
    },
  });

  const response = NextResponse.json(family);
  const familiesCookie = await getCookie("families", { req: request, res: response });
  let families = familiesCookie ? JSON.parse(familiesCookie ) as family[] : [];

  if (!families.some((f) => f.id === family.id)) {
    families.push(family);
  }

  setCookie("families", JSON.stringify(families), {
    req: request,
    res: response,
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return response;
}
