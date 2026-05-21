import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0F0F0F',
          color: '#00E87A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 110,
          fontWeight: 800,
          letterSpacing: '-0.05em',
          fontFamily: 'system-ui, sans-serif',
          borderRadius: 36,
        }}
      >
        GB
      </div>
    ),
    { ...size }
  )
}
