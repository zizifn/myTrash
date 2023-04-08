// import {WebSocketPair} from '@cloudflare/workers-types';

export async function GET(request: Request) {
  const upgradeHeader = request.headers.get('Upgrade');
  if (!upgradeHeader || upgradeHeader !== 'websocket') {
    return new Response('not websocket', {
      status: 200
    })
  }

  const webSocketPair = new WebSocketPair();
  const [client, server] = Object.values(webSocketPair);

  (server as any).accept();
  server.addEventListener('message', (event) => {
    console.log(event.data);
    server.send(`server reponse after client sent ${event.data}`);
  });
  console.log('client send');
  server.send(`client sned`);
  return new Response(null, {
    status: 101,
    webSocket: client,
  } as any);
}
