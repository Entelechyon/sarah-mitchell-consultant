import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarahmitchell.online"),
  title: {
    default: "Sarah Mitchell Consulting - Business Strategy & Growth Expert",
    template: "%s | Sarah Mitchell Consulting",
  },
  description:
    "Transform your business from chaos to cash flow in 90 days. With 15+ years of experience and 200+ businesses helped, Sarah Mitchell provides proven business consulting strategies for $500K-$5M revenue companies. Get 25-40% profit improvements.",
  keywords: [
    "business consulting",
    "business strategy",
    "operations optimization",
    "profit improvement",
    "business growth",
    "cash flow management",
    "small business consultant",
    "business efficiency",
    "operational excellence",
    "business transformation",
  ],
  authors: [{ name: "Sarah Mitchell" }],
  creator: "Sarah Mitchell",
  publisher: "Sarah Mitchell Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarahmitchell.online",
    siteName: "Sarah Mitchell Consulting",
    title: "Sarah Mitchell Consulting - Business Strategy & Growth Expert",
    description:
      "Transform your business from chaos to cash flow in 90 days. Expert business consulting for established businesses seeking 25-40% profit improvements.",
    images: [
      {
        url: "/sarah-mitchell.webp",
        width: 1200,
        height: 1200,
        alt: "Sarah Mitchell - Business Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Mitchell Consulting - Business Strategy & Growth Expert",
    description:
      "Transform your business from chaos to cash flow in 90 days. Expert business consulting with proven results.",
    images: ["/sarah-mitchell.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sarahmitchell.online",
  },
  category: "Business Consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
