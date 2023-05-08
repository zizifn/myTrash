// import {WebSocketPair} from '@cloudflare/workers-types';
export const runtime = "edge";
export async function GET(request: Request) {
  const upgradeHeader = request.headers.get("Upgrade");
  if (!upgradeHeader || upgradeHeader !== "websocket") {
    return new Response("not websocket", {
      status: 200,
    });
  }

  const webSocketPair = new WebSocketPair();
  const [client, server] = Object.values(webSocketPair);

  (server as WebSocket & { accept: () => void }).accept();
  server.addEventListener("message", (event) => {
    console.log(event.data);
    server.send(`server reponse after client sent ${event.data}`);
  });
  console.log("client send");
  server.send(`client send`);
  return new Response(null, {
    status: 101,
    webSocket: client,
  });
}
