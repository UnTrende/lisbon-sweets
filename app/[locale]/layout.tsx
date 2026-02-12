import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Dancing_Script } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import StoreProvider from "./StoreProvider";
import { Header } from "@/components/Header";
import { CartSheet } from "@/components/CartSheet";
import { DrippingGlaze } from "@/components/DrippingGlaze";
import { Footer } from "@/components/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/config';

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

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        playfair.variable,
        montserrat.variable,
        dancingScript.variable
      )}>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <Header />
            <DrippingGlaze />
            <CartSheet />
            <div className="pt-[74px]">{/* Spacer for fixed header */}
              {children}
            </div>
            <Footer />
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
