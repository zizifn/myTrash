import { CFWokersEnv } from "../env";
import VPNAccounts from "./vpn-account";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(process.env as any as CFWokersEnv);
  const task = await (process.env as any as CFWokersEnv).MY_VPN_ACCTS.get(
    "user_2Ov3lKiWpRKypgbowkua9Icw5rH"
  );
  console.log(task);
  return (
    <>
      <div className="m-0 flex h-full w-full flex-auto flex-row items-stretch justify-center p-0">
        <VPNAccounts></VPNAccounts>
        {children}
      </div>
    </>
  );
}
