import { NextRequest, NextResponse } from "next/server"
import { getCookie, setCookie } from "cookies-next"


export async function POST(
  request: NextRequest,
  { params }: { params: { familyId: string } }
) {
  const familyId = parseInt(params.familyId, 10);
  const response = NextResponse.json({ success: true });
  const familiesCookie = await getCookie("families", { req: request, res: response });

  if (familiesCookie) {
    let families = JSON.parse(familiesCookie) as { id: number }[];
    families = families.filter((f) => f.id !== familyId);
    setCookie("families", JSON.stringify(families), {
      req: request,
      res: response,
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  return response;
}
