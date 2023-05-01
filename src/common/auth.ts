import { CFWokersEnv } from "@/app/env";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function getAuthUser() {
  const users =
    (await (process.env as any as CFWokersEnv).MY_VPN_ACCTS?.get("users")) ||
    '["james:11"]';
  const usersJson: string[] = JSON.parse(users);
  const headersList = headers();
  const base64Auth = headersList.get("Authorization") || "";

  const { user, pwd } = getUserPass(base64Auth);
  if (user && usersJson.includes(`${user}:${pwd}`)) {
    return user;
  }

  return "";
}

function getUserPass(authorization: string) {
  if (!authorization) {
    return {
      user: "",
      pwd: "",
    };
  }
  try {
    const authString = authorization.split(" ")[1];
    const [user, pwd] = atob(authString).split(":");
    return {
      user,
      pwd,
    };
  } catch (error) {
    return {
      user: "",
      pwd: "",
    };
  }
}
