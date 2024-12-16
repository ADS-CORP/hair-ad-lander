import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BaseLayout, { HeaderType } from "@/components/base/layout/BaseLayout";
import { HeaderData, FooterData, NavigationData } from "@/app/data";
import { GtmId, LandingPageVariants } from "@/app/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hair Relaxer Legal",
  description: "Hair Relaxer Legal Information and Resources",
};

const config = {
  gtmId: GtmId,
  landingPageVariants: LandingPageVariants
};

const data = {
  HeaderData,
  FooterData,
  NavigationData
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BaseLayout 
          data={data}
          config={config}
          headerType={HeaderType.Static}
        >
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
