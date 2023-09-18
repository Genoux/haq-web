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
      <body>{children}</body>
    </html>
  )
}
