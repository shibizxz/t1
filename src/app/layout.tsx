import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SniperEdge Funde",
  description: "Budget-friendly funded account service website with WhatsApp and email booking flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
