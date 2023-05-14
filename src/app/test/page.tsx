import { CFWokersEnv } from "../env";

export const runtime = "edge";

export default async function Page() {
  const users =
    (await (process.env as any as CFWokersEnv).MY_VPN_ACCTS?.get("users")) ||
    "[]";
  const usersJson: string[] = JSON.parse(users);

  return (
    <>
      <ul>
        {usersJson?.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
      <div>hello world</div>
    </>
  );
}
