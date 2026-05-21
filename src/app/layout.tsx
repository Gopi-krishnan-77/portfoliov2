import type { Metadata, Viewport } from 'next'
import { Nunito_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-mono',
  display: 'swap',
})

const SITE_URL = 'https://gopikrishnanb.co.in'
const TITLE = 'Gopikrishnan Balagopal — Full-stack Developer'
const DESCRIPTION =
  'Kerala-based full-stack developer building products end to end — WebRTC calling systems, payment flows, carbon platforms, and Web3. Currently at Cooee.'

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: '%s — Gopikrishnan Balagopal',
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  applicationName: 'Gopikrishnan Balagopal',
  authors: [{ name: 'Gopikrishnan Balagopal', url: SITE_URL }],
  creator: 'Gopikrishnan Balagopal',
  publisher: 'Gopikrishnan Balagopal',
  generator: 'Next.js',
  keywords: [
    'Gopikrishnan Balagopal',
    'Gopikrishnan B',
    'full-stack developer',
    'software engineer',
    'Kerala developer',
    'Next.js developer',
    'WebRTC developer',
    'Go developer',
    'Web3 developer',
    'Cooee',
    'India developer portfolio',
    'TypeScript',
    'React',
    'Solidity',
    'Telnyx',
    'Stripe',
  ],
  category: 'technology',
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Gopikrishnan Balagopal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@gopikrishnanb',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0F0F0F' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gopikrishnan Balagopal',
  alternateName: 'Gopikrishnan B',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  jobTitle: 'Full-stack Developer',
  worksFor: { '@type': 'Organization', name: 'Cooee' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Saintgits College of Engineering',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kerala',
    addressCountry: 'IN',
  },
  email: 'mailto:gopikrishnanb2003@gmail.com',
  sameAs: [
    'https://github.com/Gopi-krishnan-77',
    'https://linkedin.com/in/gopikrishnanbalagopal',
  ],
  knowsAbout: [
    'WebRTC',
    'Next.js',
    'TypeScript',
    'Go',
    'Solidity',
    'Web3',
    'Full-stack development',
    'React',
    'Python',
    'PostgreSQL',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_URL,
  name: TITLE,
  description: DESCRIPTION,
  author: { '@type': 'Person', name: 'Gopikrishnan Balagopal' },
  inLanguage: 'en',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-white text-[#0F0F0F]">
        {children}

        {/* Structured data — Person + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  )
}
