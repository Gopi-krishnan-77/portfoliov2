import { content } from '@/lib/content'
import SectionHeading from './SectionHeading'

export default function Stack() {
  return (
    <section id="stack" className="relative overflow-hidden bg-cream py-20 md:py-32">
      <div className="relative z-[1] mx-auto max-w-[1280px] px-[clamp(20px,5vw,32px)]">
        <SectionHeading align="center">Things I work with</SectionHeading>

        {/* Skill groups — flex wrap, never overlaps */}
        <div className="mx-auto flex max-w-[960px] flex-col gap-8">
          {content.stack.map(({ group, items }) => (
            <div key={group} className="text-center">
              <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-subtle">
                {group}
              </h3>
              <div className="flex flex-wrap justify-center gap-[clamp(8px,1.2vw,14px)]">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="pill-hover inline-block whitespace-nowrap rounded-full border border-grey bg-white font-mono text-[#1c1b1b] transition-[transform,border-color,box-shadow] duration-200"
                    style={{
                      padding: 'clamp(8px, 1vw, 12px) clamp(16px, 2vw, 22px)',
                      fontSize: 'clamp(13px, 1.1vw, 15px)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
