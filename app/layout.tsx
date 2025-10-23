import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarah Mitchell Consulting - Business Strategy & Growth",
  description: "Transform your business from chaos to cash flow in 90 days. Professional business consulting for ambitious business owners.",
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
