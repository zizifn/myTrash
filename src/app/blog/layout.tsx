export const runtime = "edge";
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  console.log("-----------blog----", params);
  return (
    <>
      <div className="m-0 flex w-full flex-auto flex-col items-stretch justify-center p-0">
        {children}
      </div>
    </>
  );
}
