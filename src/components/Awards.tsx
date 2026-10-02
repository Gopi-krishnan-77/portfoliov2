import Image from 'next/image'
import { content } from '@/lib/content'
import SectionHeading from './SectionHeading'

export default function Awards() {
  return (
    <section id="awards" className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Snake boat — large desktop only (xl+), right centre */}
      <div
        className="pointer-events-none absolute right-[-2%] top-1/2 z-0 hidden -translate-y-1/2 select-none xl:block"
        style={{ width: 'clamp(320px, 42vw, 600px)' }}
      >
        <div className="side-float-fast">
          <Image
            src="/boat.webp"
            alt=""
            width={1536}
            height={1024}
            sizes="600px"
            className="h-auto w-full"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative z-[1] mx-auto max-w-[1280px] px-[clamp(20px,5vw,32px)]">
        <SectionHeading>Recognition</SectionHeading>

        <div className="flex flex-col gap-5 max-w-2xl">
          {content.awards.map((award) => (
            <div
              key={award.title}
              className="flex items-start gap-5 rounded-xl border-l-4 border-green bg-white px-6 py-5 shadow-sm"
            >
              <span className="mt-0.5 flex-shrink-0 text-3xl" aria-hidden="true">{award.icon}</span>
              <div>
                <h3 className="font-heading text-lg font-bold leading-snug text-dark">
                  {award.title}
                </h3>
                <p className="mt-1 text-sm text-subtle">{award.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
