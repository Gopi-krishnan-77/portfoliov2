import { content } from '@/lib/content'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,5vw,32px)]">
        <SectionHeading>Where I&apos;ve worked</SectionHeading>

        <div className="relative">
          {/* Timeline line — line and dots share the same left + centring so they stay aligned */}
          <div
            className="absolute bottom-0 left-4 top-0 w-[2px] -translate-x-1/2 md:left-6"
            style={{ background: 'linear-gradient(to bottom, #00E87A 30%, rgba(0,232,122,0.1) 100%)' }}
          />

          <div className="flex flex-col gap-10">
            {content.experience.map((exp) => (
              <div key={exp.company} className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-green md:left-6 ${
                    exp.current ? 'shadow-[0_0_0_4px_rgba(0,232,122,0.2)]' : ''
                  }`}
                />

                {/* Card */}
                <div className="rounded-3xl border border-grey bg-white p-6 shadow-xl md:p-8">
                  <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-dark">{exp.company}</h3>
                      <p className="mt-1 font-medium text-muted">{exp.role}</p>
                    </div>
                    <span
                      className={`self-start whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold ${
                        exp.current ? 'bg-green text-dark' : 'bg-grey text-muted'
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span
                          className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${j % 2 === 0 ? 'bg-green' : 'bg-orange'}`}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
