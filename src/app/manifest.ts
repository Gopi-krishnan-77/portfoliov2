import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gopikrishnan Balagopal — Full-stack Developer',
    short_name: 'GB',
    description:
      'Kerala-based full-stack developer. WebRTC, payments, Go APIs, Next.js, Web3.',
    start_url: '/',
    display: 'minimal-ui',
    background_color: '#ffffff',
    theme_color: '#00E87A',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
