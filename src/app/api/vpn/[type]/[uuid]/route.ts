import YAML from "yaml";
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
  console.log(request.url);
  console.log(context);
  console.log(YAML.stringify(""));
  if (context.params.type === "clash") {
    console.log("-----");
    return new Response("xxxxxx", {
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });
  }

  return new Response("Hello, Next.js!");
}
