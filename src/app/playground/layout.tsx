import ClientRedirect from "@/components/client-redirect";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(resp);
  return (
    <>
      <div className="m-0 flex w-full flex-auto flex-col items-stretch justify-center p-0">
        {children}
      </div>
    </>
  );
}
