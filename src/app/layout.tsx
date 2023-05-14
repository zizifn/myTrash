import "./globals.css";
import NavBar from "./nav-bar";

export const metadata = {
  title: "my trash app",
  description: "trash app by zizifn",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  console.log("---root---", params);
  const disAbleLayout = false;
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
