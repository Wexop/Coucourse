import { NextRequest, NextResponse } from "next/server"
import { deleteCookie } from "cookies-next"


export async function POST(request: NextRequest) {
  const response = NextResponse.json({ success: true });
  deleteCookie("family", { req: request, res: response });
  return response;
}
