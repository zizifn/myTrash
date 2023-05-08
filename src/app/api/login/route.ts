import { CFWokersEnv } from "@/app/env";
import { getAuthUser } from "@/common/auth";
import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";
export async function GET(request: NextRequest) {
  const user = await getAuthUser();
  if (user) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  } else {
    return NextResponse.json(
      {},
      {
        status: 401,
        headers: {
          "WWW-Authenticate": "Basic",
        },
      }
    );
  }
}
