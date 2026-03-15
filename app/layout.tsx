import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://rv-graphics.com'),

  
  title: 'RV Graphics | Helmet Decals, Vinyl Stickers & Label Manufacturer',
  description:
    'RV Graphics is a leading manufacturer of helmet decals, water transfer decals, vinyl stickers, self adhesive labels and packaging solutions in India since 2008.',

  keywords: [
    'rv graphics',
    'helmet',
    'helmet decals',
    'vinyl stickers',
    'water transfer decals',
    'self adhesive labels',
    'packaging printing India',
  ],

  authors: [{ name: 'RV Graphics' }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'RV Graphics | Premium Labeling & Sticker Solutions',
    description:
      'Professional manufacturer of helmet decals, vinyl stickers, water transfer decals and packaging solutions.',
    url: 'https://rv-graphics.com',
    siteName: 'RV Graphics',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-white`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RV Graphics",
              url: "https://rv-graphics.com",
              logo: "https://rv-graphics.com/images/RV_Graphics.png",
              description:
                "Manufacturer of helmet decals, vinyl stickers, water transfer decals and labeling solutions.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bahadurgarh",
                addressRegion: "Haryana",
                postalCode: "124507",
                addressCountry: "IN"
              }
            })
          }}
        />
      </body>
    </html>
  )
}