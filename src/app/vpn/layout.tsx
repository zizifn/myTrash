import { getAuthUser } from "@/common/auth";
import { CFWokersEnv } from "../env";
import VPNAccounts from "./vpn-account";
import ClientRedirect from "@/components/client-redirect";
export const runtime = "edge";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getAuthUser();
  if (!user) {
    return <ClientRedirect></ClientRedirect>;
  }

  const task = await (process.env as any as CFWokersEnv).MY_VPN_ACCTS.get(user);
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
