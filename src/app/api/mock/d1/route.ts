import { CFWokersEnv } from "@/app/env";
export const runtime = "edge";
export async function GET(request: Request) {
  console.log(process.env as any as CFWokersEnv);
  const authDB = await (process.env as any as CFWokersEnv).NEXT_AUTH_DB;
  const result = authDB.batch([
    authDB
      .prepare("INSERT INTO user (id, name, age) VALUES (?1, ?2, ?3)")
      .bind("0c916c0b-4014-4fd2-aa0b-007071b3c743", "james", 19),
    authDB
      .prepare("INSERT INTO user (id, name, age) VALUES (?1, ?2, ?3)")
      .bind("fbe986e6-19b3-4fc5-8758-30d8864704e0", "zizifn", 20),
  ]);
  console.log(result);
  return new Response("Hello, Next.js!");
}
