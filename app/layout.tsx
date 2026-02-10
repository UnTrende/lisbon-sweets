import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import StoreProvider from "./StoreProvider";
import { Header } from "@/components/Header";
import { CartSheet } from "@/components/CartSheet";
import { DrippingGlaze } from "@/components/DrippingGlaze";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
  preload: true
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap'
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Petals E Sweets",
  description: "Artisanal Handmade Sweets & Cakes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        playfair.variable,
        montserrat.variable,
        dancingScript.variable
      )}>
        <StoreProvider>
          <Header />
          <DrippingGlaze />
          <CartSheet />
          <div className="pt-[74px]">{/* Spacer for fixed header */}
            {children}
          </div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
