import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/app/components/ui/theme-provider";

export const metadata: Metadata = {
  title: 'Tournois HAQ',
  description: 'HAQ - Tournois ARAM League of Legend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
