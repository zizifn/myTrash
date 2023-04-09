export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="m-0 flex w-full flex-auto flex-col items-stretch justify-center p-0">
        {children}
      </div>
    </>
  );
}
