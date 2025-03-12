import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Denis Jesus Palma Abanto | Personal Website, Gallery and Blog',
  description: 'The official personal website, photo gallery, and blog of Denis Jesus Palma Abanto (Denis Palma Abanto). Explore his photography collection and read about his thoughts and experiences.',
  keywords: 'Denis Jesus Palma Abanto, Denis Palma Abanto, personal gallery, photo collection, personal photos, personal website, photography blog, photographer, portfolio, professional photography',
  openGraph: {
    title: 'Denis Jesus Palma Abanto - Personal Website, Gallery and Blog',
    description: 'Explore Denis Jesus Palma Abanto\'s personal photo collection, professional background, and insights on his blog. A visual journey through moments, memories, and creative work.',
    url: 'https://denis.pe',
    siteName: 'Denis Jesus Palma Abanto',
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
    title: 'Denis Jesus Palma Abanto - Personal Website, Gallery and Blog',
    description: 'Explore Denis Jesus Palma Abanto\'s personal photo collection, professional background, and insights on his blog. A visual journey through moments, memories, and creative work.',
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
