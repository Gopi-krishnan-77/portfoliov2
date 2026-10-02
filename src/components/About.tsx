import Image from 'next/image'
import { content } from '@/lib/content'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 md:py-32">
      {/* Kathakali — mobile: centred and faint behind the bio; desktop: fills the
          empty left column. Positioning lives in .kathakali-motif (globals.css). */}
      <div className="kathakali-motif pointer-events-none absolute z-0 select-none">
        <div className="side-float">
          <Image
            src="/kathakali.webp"
            alt=""
            width={1254}
            height={1254}
            sizes="(max-width: 767px) min(82vw, 360px), 560px"
            className="h-auto w-full"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative z-[1] mx-auto max-w-[1280px] px-[clamp(20px,5vw,32px)]">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          {/* Left column intentionally empty on desktop — kathakali fills the space */}
          <div className="hidden md:block" />

          {/* Right: content */}
          <div>
            <p className="mb-1 font-light text-dark" style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
              I&apos;m a
            </p>
            <h2
              className="inline-block border-b-4 border-green pb-1 font-heading font-extrabold leading-none text-dark"
              style={{
                fontSize: 'clamp(44px, 7vw, 80px)',
                marginBottom: 'clamp(20px, 3vw, 28px)',
              }}
            >
              builder.
            </h2>
            <p className="mt-6 leading-relaxed text-muted" style={{ fontSize: 'clamp(16px, 1.5vw, 18px)' }}>
              {content.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
