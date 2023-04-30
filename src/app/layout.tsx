import { ClerkProvider } from "@clerk/nextjs/app-beta";
import "./globals.css";

export const metadata = {
  title: "my trash app",
  description: "trash app by zizifn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className="h-screen w-screen">{children}</body>
      </ClerkProvider>
    </html>
  );
}
