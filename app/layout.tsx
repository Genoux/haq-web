import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/app/components/ui/theme-provider";

export const metadata: Metadata = {
  title: 'Tournois HAQ',
  description: 'HAQ - Tournois ARAM League of Legend',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/favicon-light.ico',
        href: '/images/favicon-light.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/favicon-dark.ico',
        href: '/images/favicon-dark.ico',
      },
    ],
  },
  openGraph: {
    images: '/opengraph-image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
