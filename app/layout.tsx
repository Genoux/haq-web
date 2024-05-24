import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/app/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Tournois HAQ",
  description: "HAQ - Tournois ARAM League of Legend",
  icons: {
    icon: [
      {
        url: "https://sdedknsmucuwsvgfxrxs.supabase.co/storage/v1/object/public/Assets/favicon.png",
        href: "https://sdedknsmucuwsvgfxrxs.supabase.co/storage/v1/object/public/Assets/favicon.png",
      },
    ],
  },
  openGraph: {
    images:
      "https://sdedknsmucuwsvgfxrxs.supabase.co/storage/v1/object/public/Assets/opengraph-image.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
