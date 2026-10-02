import Image from 'next/image'
import { content } from '@/lib/content'

export default function Hero() {
  return (
    <section className="hero-height relative flex items-center overflow-hidden bg-white pt-20">
      {/* Kerala mural elephant — centered, CSS float animation. The image has a
          transparent background, so no blend-mode/filter tricks are needed. */}
      <div
        className="motif-float pointer-events-none absolute left-1/2 top-1/2 z-0 select-none opacity-55"
        style={{ width: 'clamp(660px, 160vw, 1320px)' }}
      >
        <Image
          src="/elephant.webp"
          alt=""
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 412px) 660px, (max-width: 825px) 160vw, 1320px"
          className="block h-auto w-full"
          aria-hidden="true"
        />
      </div>

      {/* Kerala backwaters at dusk — wavy water lines with floating diya flames */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 80"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-full"
        style={{ height: 'clamp(80px, 12vh, 140px)' }}
      >
        {/* Three layered water lines */}
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

      {/* Hero content */}
      <div className="hero-content relative z-10 mx-auto w-full max-w-[1280px] px-[clamp(20px,5vw,32px)]">
        <h1
          className="hero-name m-0 font-heading font-extrabold leading-none tracking-[-0.03em] text-dark"
          style={{ fontSize: 'clamp(44px, 10vw, 112px)' }}
        >
          <span className="block">{content.name.first}</span>
          <span className="block">
            {content.name.last}
            <span className="cursor-blink ml-[0.15em] text-green" aria-hidden="true">
              |
            </span>
          </span>
        </h1>

        <div className="hero-subtitle">
          <p
            className="mt-6 font-heading font-extrabold text-green-ink"
            style={{ fontSize: 'clamp(16px, 2.2vw, 22px)' }}
          >
            {content.tagline}
          </p>
          <p className="mt-2 max-w-md text-muted" style={{ fontSize: 'clamp(15px, 1.4vw, 17px)' }}>
            {content.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full border-2 border-dark bg-dark px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-green hover:bg-green hover:text-dark"
            >
              View work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="open"
              className="rounded-full border-2 border-dark bg-white/80 px-6 py-3 text-sm font-semibold text-dark transition-colors duration-200 hover:bg-dark hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
