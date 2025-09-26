import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Difan's Resume | PhD Student in HCI",
  description: "Created by Difan Jia - PhD Student specializing in HCI & Visualization, XR/AR research at University of Texas at Dallas",
  keywords: ["Difan Jia", "Resume", "CV", "HCI", "Visualization", "XR", "AR", "PhD Student", "UTD"],
  authors: [{ name: "Difan Jia", url: "https://x.com/KeithMaxwell99" }],
  creator: "Difan Jia",
  openGraph: {
    title: "Difan's Resume",
    description: "PhD Student in HCI | Created by Difan Jia",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Difan's Resume",
    description: "PhD Student in HCI | Created by Difan Jia",
    creator: "@KeithMaxwell99",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
