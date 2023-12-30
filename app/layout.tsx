import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To Do",
  description: "Simle To Do Web Aplication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
