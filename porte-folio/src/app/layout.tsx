import type { Metadata } from "next";
import BeingBuiltBanner from "@/components/being-built-banner";
import NavigationMenuDesktop from "@/components/navigation-menu-desktop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vulpes System Porte Folio",
  description: "boop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative h-full w-full">
        <BeingBuiltBanner />
        <div className="hidden md:block">
          <NavigationMenuDesktop />
        </div>
        {children}
      </body>
    </html>
  );
}
