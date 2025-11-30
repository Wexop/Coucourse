import { NextRequest, NextResponse } from "next/server"

import { getCookie, setCookie } from "cookies-next"
import prisma from "@/client"
import { family } from "@/generated/prisma"


export async function POST(request: NextRequest) {
  const { code } = await request.json();
  if (!code) {
    return NextResponse.json(
      { error: "Family code is required" },
      { status: 400 }
    );
  }
  const family = await prisma.family.findFirst({
    where: {
      code,
    },
  });
  if (!family) {
    return NextResponse.json({ error: "Family not found" }, { status: 404 });
  }

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
