/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NavBar from "./_sections/Navbar";
import Footer from "./_sections/Footer";
import localesConfig from "../locales.config.json";
import "@/app/global.css";

export const metadata: Metadata = {
  title: "Moises",
  description: "Generated by create next app"
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const globalConfig = await getMessages();

  const { availableLocales } = localesConfig;

  // Como tipar um destructing?
  const { menu, footerMenu, social, helpText, copyright } = globalConfig.global;
  return (
    <html lang={locale}>
      <body className="bg-black">
        <NextIntlClientProvider messages={globalConfig}>
          <NavBar data={menu} />
          {children}
          <Footer
            data={{ footerMenu, social, availableLocales, helpText, copyright }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
