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

        <ul className="max-w-2xl border-t border-grey">
          {content.awards.map((award) => (
            <li
              key={award.title}
              className="group relative grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 border-b border-grey py-6 md:grid-cols-[110px_1fr_auto]"
            >
              {/* Accent bar — grows in on hover */}
              <span
                aria-hidden="true"
                className="absolute -left-4 top-6 bottom-6 w-[2px] origin-top scale-y-0 rounded-full bg-green transition-transform duration-300 ease-out group-hover:scale-y-100 md:-left-5"
              />
              <span className="col-span-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-green-ink md:col-span-1 md:pt-1.5">
                {award.kind}
              </span>
              <div className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                <h3 className="font-heading text-lg font-bold leading-snug text-dark">
                  {award.title}
                </h3>
                <p className="mt-1 text-sm text-subtle">{award.sub}</p>
              </div>
              <span className="whitespace-nowrap pt-1 font-mono text-xs text-subtle tabular-nums">
                {award.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
