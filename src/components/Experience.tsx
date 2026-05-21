import { content } from '@/lib/content'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section className="bg-[#FAFAF8] py-20 md:py-32">
      <div
        className="mx-auto"
        style={{ maxWidth: '1280px', padding: '0 clamp(20px, 5vw, 32px)' }}
      >
        <SectionHeading>Where I&apos;ve worked</SectionHeading>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px]"
            style={{ background: 'linear-gradient(to bottom, #00E87A 30%, rgba(0,232,122,0.1) 100%)' }}
          />

          <div className="flex flex-col gap-10">
            {content.experience.map((exp) => (
              <div key={exp.company} className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute w-3 h-3 rounded-full border-2 border-white"
                  style={{
                    backgroundColor: '#00E87A',
                    left: '10px',
                    top: '24px',
                    transform: 'translateX(-50%)',
                    boxShadow: exp.current ? '0 0 0 4px rgba(0,232,122,0.2)' : 'none',
                  }}
                />

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-[#E8E4DF] p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-[#0F0F0F]">{exp.company}</h3>
                      <p className="text-[#3b4a3d] font-medium mt-1">{exp.role}</p>
                    </div>
                    <span
                      className="self-start px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
                      style={{
                        backgroundColor: exp.current ? '#00E87A' : '#E8E4DF',
                        color: exp.current ? '#0F0F0F' : '#3b4a3d',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#3b4a3d] text-sm leading-relaxed">
                        <span
                          className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full"
                          style={{ backgroundColor: j % 2 === 0 ? '#00E87A' : '#FF5C1A' }}
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
