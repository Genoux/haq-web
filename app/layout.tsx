import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head';

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
      <Head>
        <title>Tournois HAQ</title>
        <meta name="description" content="HAQ - Tournois ARAM League of Legend" />
        <meta property="og:title" content="Tournois HAQ" />
        <meta property="og:description" content="HAQ - Tournois ARAM League of Legend" />
        <meta property="og:image" content="/public/banner.png" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
