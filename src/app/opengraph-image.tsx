import { ImageResponse } from 'next/og'

export const alt = 'Gopikrishnan Balagopal — Full-stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top row: small URL + a brand chip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 28,
            color: '#3b4a3d',
          }}
        >
          <span style={{ fontWeight: 600 }}>gopikrishnanb.co.in</span>
          <span
            style={{
              background: '#0F0F0F',
              color: '#00E87A',
              padding: '12px 22px',
              borderRadius: 12,
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            GB
          </span>
        </div>

        {/* Middle: huge name */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 124,
              fontWeight: 800,
              lineHeight: 0.95,
              color: '#0F0F0F',
              letterSpacing: '-0.04em',
            }}
          >
            Gopikrishnan
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              fontSize: 124,
              fontWeight: 800,
              lineHeight: 0.95,
              color: '#0F0F0F',
              letterSpacing: '-0.04em',
            }}
          >
            Balagopal
            <span style={{ color: '#00E87A', marginLeft: 12 }}>.</span>
          </div>
        </div>

        {/* Bottom: tagline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 36,
            fontWeight: 700,
            color: '#00E87A',
          }}
        >
          <span>Full-stack developer</span>
          <span style={{ color: '#3b4a3d', fontWeight: 400 }}>·</span>
          <span style={{ color: '#3b4a3d', fontWeight: 500 }}>Kerala, India</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
