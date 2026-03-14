import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jesckaw — Design & Creative',
  description: 'UX Designer crafting digital experiences with curiosity, care, and a touch of magic.',
  openGraph: {
    title: 'Jesckaw — Design & Creative',
    description: 'UX Designer & Creative — thoughtful digital experiences.',
    url: 'https://jesckaw.design',
    siteName: 'Jesckaw',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,800;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FDFCF8] text-[#0A0A0A] font-sans antialiased">{children}</body>
    </html>
  )
}
