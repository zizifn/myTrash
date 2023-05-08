import { getCalshConfig, getV2rayNConfig } from "./clash-config";
export const runtime = "edge";

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
      port: port || "443",
      publicKey,
    };
  });
  const { type, uuid } = context.params;
  if (context.params.type === "clash") {
    return new Response(getCalshConfig(uuid, servers), {
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });
  } else if (context.params.type === "v2ray") {
    return new Response(getV2rayNConfig(uuid, servers), {
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });
  }

  return new Response("Hello, Next.js!");
}
