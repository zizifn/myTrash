import { getCalshConfig } from "./clash-config";
export const config = {
  runtime: "edge",
  // api: {
  //   bodyParser: true,
  // }
};

type VPNType = "clash" | "v2ray";

export async function GET(
  request: Request,
  context: { params: { type: VPNType; uuid: string } }
) {
  const url = new URL(request.url);
  console.log(url);
  let serverStr = url.searchParams.get("servers") || "";
  const servers = serverStr.split(",").map((s) => {
    const [host, port, publicKey] = s.split(":");
    return {
      host,
      port,
      publicKey,
    };
  });
  const { type, uuid } = context.params;
  if (context.params.type === "clash") {
    console.log("-----");
    return new Response(getCalshConfig(uuid, servers), {
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });
  }

  return new Response("Hello, Next.js!");
}
