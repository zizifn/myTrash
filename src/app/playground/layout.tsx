export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <span>playground</span>
      <div>{children}</div>
    </>
  );
}
