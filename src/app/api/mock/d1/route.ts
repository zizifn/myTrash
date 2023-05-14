import { CFWokersEnv } from "@/app/env";
import { NextResponse } from "next/server";
export const runtime = "edge";
export async function GET(request: Request) {
  // console.log(process.env as any as CFWokersEnv);
  // const authDB = (process.env as any as CFWokersEnv).NEXT_AUTH_DB;

  // const ps = authDB.prepare("SELECT * from user");
  // const data = await ps.first();

  // const result = await authDB.batch([
  //   authDB
  //     .prepare("INSERT INTO user (id, name, age) VALUES (?1, ?2, ?3)")
  //     .bind("0c916c0b-4014-4fd2-aa0b-007071b3c743", "james", 19),
  //   authDB
  //     .prepare("INSERT INTO user (id, name, age) VALUES (?1, ?2, ?3)")
  //     .bind("fbe986e6-19b3-4fc5-8758-30d8864704e0", "zizifn", 20),
  // ]);
  // console.log(data);
  return NextResponse.json({});
}
