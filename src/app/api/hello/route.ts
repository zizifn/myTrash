import { CFWokersEnv } from "@/app/env";
export const runtime = "edge";
export async function GET(request: Request) {
  console.log(process.env as any as CFWokersEnv);
  const task = await (process.env as any as CFWokersEnv).MY_VPN_ACCTS.put(
    "user_2Ov3lKiWpRKypgbowkua9Icw5rH",
    JSON.stringify(["bbbefd0b-43b1-41ce-90ff-481dcf25994d"])
  );
  console.log(task);
  return new Response("Hello, Next.js!");
}
