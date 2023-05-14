// middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
const publicPaths = ["/", "/api/vpn*"];

const isPublic = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
};

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log("----middleware--222---");
  // return NextResponse.next();
  // if (isPublic(request.nextUrl.pathname)) {
  //   return NextResponse.next();
  // }
  // const users =
  //   (await (process.env as any as CFWokersEnv).MY_VPN_ACCTS.get("users")) || "";
  // const usersJson: string[] = JSON.parse(users);
  // const base64Auth = request.headers.get("Authorization") || "";
  // const { user, pwd } = getUserPass(base64Auth);
  // if (user && usersJson.includes(`${user}:${pwd}`)) {
  //   request.headers.append("user", user);
  //   console.log("-------------");
  //   return NextResponse.next();
  // } else {
  //   return NextResponse.json(
  //     {},
  //     {
  //       status: 401,
  //       headers: {
  //         "WWW-Authenticate": "Basic",
  //       },
  //     }
  //   );
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!static|.*\\..*|_next|favicon.ico).*)", "/"],
};

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
