import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Denis Jesus Palma Abanto | Personal Photo Gallery',
  description: 'Welcome to Denis Jesus Palma Abanto\'s (Denis Palma Abanto) personal photo gallery. Explore a collection of moments and memories capturing life\'s journey through personal photographs.',
  keywords: 'Denis Jesus Palma Abanto, Denis Palma Abanto, personal gallery, photo collection, personal photos, memories',
  openGraph: {
    title: 'Denis Jesus Palma Abanto - Personal Photo Gallery',
    description: 'Explore Denis Jesus Palma Abanto\'s personal photo collection. A visual journey through moments and memories.',
    url: 'https://denis.pe',
    siteName: 'Denis Jesus Palma Abanto Gallery',
    images: [
      {
        url: '/images/Denis Jesus Palma Abanto 1.png',
        width: 1080,
        height: 1080,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denis Jesus Palma Abanto - Personal Photo Gallery',
    description: 'Explore Denis Jesus Palma Abanto\'s personal photo collection. A visual journey through moments and memories.',
    images: ['/images/Denis Jesus Palma Abanto 1.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
