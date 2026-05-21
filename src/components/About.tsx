import Image from 'next/image'
import { content } from '@/lib/content'

export default function About() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-32">
      {/* Kathakali — desktop: left column where image lives */}
      <div
        className="hidden md:block absolute pointer-events-none select-none"
        style={{
          top: '50%',
          left: '24%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(380px, 32vw, 560px)',
          zIndex: 0,
        }}
      >
        <div
          className="side-float"
          style={{
            opacity: 1,
            mixBlendMode: 'multiply',
            filter: 'brightness(1.12) contrast(1.25)',
          }}
        >
          <Image
            src="/kathakali.png"
            alt=""
            width={1024}
            height={1024}
            className="w-full h-auto"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Kathakali — mobile: centred behind content but very faint so the bio stays readable */}
      <div
        className="md:hidden absolute pointer-events-none select-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(82vw, 360px)',
          zIndex: 0,
        }}
      >
        <div
          className="side-float"
          style={{
            opacity: 0.45,
            mixBlendMode: 'multiply',
            filter: 'brightness(1.18) contrast(1.3)',
          }}
        >
          <Image
            src="/kathakali.png"
            alt=""
            width={1024}
            height={1024}
            className="w-full h-auto"
            aria-hidden="true"
          />
        </div>
      </div>

      <div
        className="relative mx-auto"
        style={{ zIndex: 1, maxWidth: '1280px', padding: '0 clamp(20px, 5vw, 32px)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left column intentionally empty on desktop — kathakali fills the space */}
          <div className="hidden md:block" />

          {/* Right: content */}
          <div>
            <p
              className="text-[#0F0F0F] mb-1"
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontWeight: 300,
                fontSize: 'clamp(16px, 2vw, 20px)',
              }}
            >
              I&apos;m a
            </p>
            <h2
              className="font-heading font-extrabold text-[#0F0F0F] leading-none"
              style={{
                fontSize: 'clamp(44px, 7vw, 80px)',
                borderBottom: '4px solid #00E87A',
                display: 'inline-block',
                paddingBottom: '4px',
                marginBottom: 'clamp(20px, 3vw, 28px)',
              }}
            >
              builder.
            </h2>
            <p
              className="text-[#3b4a3d] leading-relaxed mt-6"
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontSize: 'clamp(16px, 1.5vw, 18px)',
              }}
            >
              {content.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
