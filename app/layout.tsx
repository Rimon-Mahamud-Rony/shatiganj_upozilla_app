import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/shared/footer";


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
  title: "জনসেবায় শান্তিগঞ্জ",
  description: "জনসেবায় শান্তিগঞ্জ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-blue-300 via-white to-blue-300 flex flex-col min-h-screen `}
      >
        <main className="grow">
          {/* the class flex-grow = grow */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
