import Image from 'next/image'
import { content } from '@/lib/content'
import SectionHeading from './SectionHeading'

export default function Awards() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Snake boat — large desktop only (xl+), right centre */}
      <div
        className="hidden xl:block absolute pointer-events-none select-none"
        style={{
          top: '50%',
          right: '-2%',
          transform: 'translateY(-50%)',
          width: 'clamp(320px, 42vw, 600px)',
          zIndex: 0,
        }}
      >
        <div
          className="side-float-fast"
          style={{
            opacity: 1,
            mixBlendMode: 'multiply',
            filter: 'brightness(1.22) contrast(1.4)',
          }}
        >
          <Image src="/boat.png" alt="" width={1536} height={1024} className="w-full h-auto" aria-hidden="true" />
        </div>
      </div>

      <div
        className="relative mx-auto"
        style={{ zIndex: 1, maxWidth: '1280px', padding: '0 clamp(20px, 5vw, 32px)' }}
      >
        <SectionHeading>Recognition</SectionHeading>

        <div className="flex flex-col gap-5 max-w-2xl">
          {content.awards.map((award) => (
            <div
              key={award.title}
              className="flex items-start gap-5 bg-white border-l-4 rounded-xl shadow-sm px-6 py-5"
              style={{ borderLeftColor: '#00E87A' }}
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{award.icon}</span>
              <div>
                <h3 className="font-heading font-bold text-[#0F0F0F] text-lg leading-snug">
                  {award.title}
                </h3>
                <p
                  className="mt-1 text-sm text-[#6b7b6c]"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {award.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
