export const runtime = "edge";
export const metadata = {
  author: "Rich Haines",
  title: "Rich Haines",
  description: "Rich Haines by zizifn",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  console.log("-----------blog/name----", params);
  return (
    <>
      <div className="m-0 flex w-full flex-auto flex-col items-stretch justify-center p-0">
        {children}
      </div>
    </>
  );
}
