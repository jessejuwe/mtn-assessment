import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";

import "./globals.css";
import Providers from "@/components/providers/Providers";
import MainLayout from "@/components/layouts/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shop.mtn.ng"),
  appleWebApp: { capable: true, title: "MTN eShop", statusBarStyle: "default" },
  applicationName: "MTN eShop",
  title: {
    default: "MTN eShop: Welcome to One-stop Online Shop | Nigeria",
    template: "%s | MTN eShop: Welcome to One-stop Online Shop | Nigeria",
  },
  description:
    "MTN eShop is your one-stop online shop to buy broadband devices, EyeSyte, data bundles, bulk SMS, and more, anytime, anywhere in Nigeria.",
  keywords: ["mtn", "eshop", "broadband devices", "eyesyte", "data bundles", "bulk sms"],
  creator: "Jesse Juwe",
  publisher: "Vercel",
  openGraph: {
    title: {
      default: "MTN eShop: Welcome to One-stop Online Shop | Nigeria",
      template: "%s | MTN eShop: Welcome to One-stop Online Shop | Nigeria",
    },
    description:
      "MTN eShop is your one-stop online shop to buy broadband devices, EyeSyte, data bundles, bulk SMS, and more, anytime, anywhere in Nigeria.",
    url: "https://shop.mtn.ng",
    siteName: "MTN eShop",
    images: [
      {
        url: "/assets/shared/og-logo.png",
        width: 1200,
        height: 630,
        alt: "MTN eShop - OpenGraph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MTN eShop: Welcome to One-stop Online Shop | Nigeria",
    description:
      "MTN eShop is your one-stop online shop to buy broadband devices, EyeSyte, data bundles, bulk SMS, and more, anytime, anywhere in Nigeria.",
    images: ["/assets/shared/og-logo.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
