export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="m-0 flex h-full w-full flex-auto flex-row items-stretch justify-center p-0">
        {children}
      </div>
    </>
  );
}
