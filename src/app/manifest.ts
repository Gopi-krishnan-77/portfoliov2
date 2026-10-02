import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gopikrishnan Balagopal — Full-stack Developer',
    short_name: 'GB',
    description:
      'Kerala-based full-stack developer. Calling, payments, support tooling, Go APIs, Next.js.',
    start_url: '/',
    display: 'minimal-ui',
    background_color: '#ffffff',
    theme_color: '#ffffff',
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
