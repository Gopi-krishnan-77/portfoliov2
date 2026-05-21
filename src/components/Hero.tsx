'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
      }}
    >
      {/* Kerala mural elephant — centered, CSS float animation */}
      <div
        className="motif-float"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 'clamp(560px, 140vw, 1320px)',
          opacity: 0.55,
          mixBlendMode: 'multiply',
          filter: 'brightness(1.12) contrast(1.25)',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <Image
          src="/elephant.png"
          alt=""
          width={1024}
          height={1024}
          priority
          style={{ width: '100%', height: 'auto', display: 'block' }}
          aria-hidden="true"
        />
      </div>

      {/* Kerala backwaters at dusk — wavy water lines with floating diya flames */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 80"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'clamp(80px, 12vh, 140px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Two layered water lines */}
        <path
          d="M0 40 Q150 20 300 40 T600 40 T900 40 T1200 40"
          fill="none"
          stroke="#00E87A"
          strokeOpacity="0.32"
          strokeWidth="1.5"
        />
        <path
          d="M0 56 Q150 38 300 56 T600 56 T900 56 T1200 56"
          fill="none"
          stroke="#00E87A"
          strokeOpacity="0.2"
          strokeWidth="1.2"
        />
        <path
          d="M0 70 Q150 54 300 70 T600 70 T900 70 T1200 70"
          fill="none"
          stroke="#00E87A"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
        {/* Floating diyas (oil lamp flames) — orange dots scattered, gently flickering */}
        <g className="diya-flicker-a">
          <circle cx="90" cy="32" r="2.8" fill="#FF5C1A" fillOpacity="0.85" />
          <circle cx="420" cy="36" r="2.4" fill="#FF5C1A" fillOpacity="0.8" />
          <circle cx="780" cy="32" r="2.6" fill="#FF5C1A" fillOpacity="0.8" />
          <circle cx="1090" cy="36" r="2.4" fill="#FF5C1A" fillOpacity="0.85" />
        </g>
        <g className="diya-flicker-b">
          <circle cx="240" cy="28" r="2.2" fill="#FF5C1A" fillOpacity="0.75" />
          <circle cx="580" cy="28" r="2.6" fill="#FF5C1A" fillOpacity="0.8" />
          <circle cx="930" cy="28" r="2.2" fill="#FF5C1A" fillOpacity="0.75" />
        </g>
      </svg>

      {/* Hero content — CSS animation, no Framer Motion initial opacity */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 32px)',
        }}
      >
        <h1
          className="hero-name"
          style={{
            fontFamily: 'var(--font-nunito), "Nunito Sans", sans-serif',
            fontWeight: 800,
            color: '#0F0F0F',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            fontSize: 'clamp(44px, 10vw, 112px)',
            margin: 0,
          }}
        >
          <span style={{ display: 'block' }}>Gopikrishnan</span>
          <span style={{ display: 'block' }}>
            Balagopal
            <span
              className="cursor-blink"
              style={{ color: '#00E87A', marginLeft: '0.15em', fontWeight: 800 }}
            >
              |
            </span>
          </span>
        </h1>

        <p
          className="hero-subtitle"
          style={{
            marginTop: '1.5rem',
            fontFamily: 'var(--font-nunito), "Nunito Sans", sans-serif',
            fontWeight: 800,
            color: '#00E87A',
            fontSize: 'clamp(16px, 2.2vw, 22px)',
          }}
        >
          Full-stack developer · Kerala, India
        </p>
      </div>

    </section>
  )
}
