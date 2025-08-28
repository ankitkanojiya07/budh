import type { Metadata } from "next";
import "./globals.css";
import { Lora, Cinzel_Decorative, Cinzel, Playfair } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopUpContact from "@/components/PopUpContact";
import React from "react";
import HeaderNew from "@/components/header-new";

const lora = Lora({
  weight: ["400","500","600","700"],
  subsets: ["latin","cyrillic"],
  variable: "--font-lora"
})

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400","700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative"
})

const cinzel = Cinzel({
  weight: ["400","700", "900","500","600","800"],
  subsets: ["latin"],
  variable: "--font-cinzel"
})

const playfair = Playfair({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Buddhist-Tour",
  description: "Buddhist Tour helps people by taking them on a timeless journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${lora.variable} ${cinzelDecorative.variable} ${cinzel.variable} ${playfair.variable}`}
      >
        <HeaderNew />
        {children}
        <Footer />
        <PopUpContact />
      </body>
    </html>
  );
}
