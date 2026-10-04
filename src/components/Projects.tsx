'use client'
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { content } from '@/lib/content'
import SectionHeading from './SectionHeading'

type Metric = {
  label: string
  value: number
  suffix: string
  decimals: number
}

function GithubGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

/**
 * Small "Code" link with GitHub glyph. Use inside any project card.
 * Pass a `note` to render a small note next to it (e.g. for DeCarb: "frontend org · backend private").
 */
function CodeLink({
  href,
  color = '#0F0F0F',
  note,
  size = 14,
}: {
  href: string
  color?: string
  note?: string
  size?: number
}) {
  return (
    <span className="inline-flex items-baseline gap-2 flex-wrap">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="link"
        data-cursor-label="code"
        className="inline-flex items-center gap-1.5 font-mono font-semibold hover:underline"
        style={{ color, fontSize: size }}
      >
        <GithubGlyph size={size + 2} />
        Code →
      </a>
      {note && (
        <span
          className="font-mono"
          style={{ fontSize: size - 2, color, opacity: 0.55 }}
        >
          {note}
        </span>
      )}
    </span>
  )
}

function getProject(id: string) {
  const project = content.projects.find((p) => p.id === id)
  if (!project) throw new Error(`Unknown project id: ${id}`)
  return project
}

function AnimatedCounter({ value, suffix, decimals, trigger }: Metric & { trigger: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const duration = 1800
    const steps = 60
    const increment = value / steps
    const stepTime = duration / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(parseFloat(start.toFixed(decimals)))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [trigger, value, decimals])

  return (
    <span className="font-mono font-bold text-2xl text-green">
      {display.toFixed(decimals)}{suffix}
    </span>
  )
}

function CallCheckCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const proj = getProject('callcheck')

  return (
    <div
      ref={ref}
      className="card-hover col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl p-8 flex flex-col justify-between min-h-[280px] bg-dark-green"
    >
      <div>
        <h3 className="font-heading font-extrabold text-3xl text-white mb-1">{proj.title}</h3>
        <p className="text-green font-semibold mb-3">{proj.subtitle}</p>
        <p className="text-light-green text-sm leading-relaxed mb-6">{proj.description}</p>
      </div>

      {/* Metrics grid — illustrative values, not a live measurement */}
      <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-light-green/60">Sample result</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {proj.metrics && proj.metrics.map((m) => (
          <div key={m.label} className="bg-white/5 rounded-2xl p-4">
            <p className="text-light-green text-xs mb-1">{m.label}</p>
            <AnimatedCounter {...m} trigger={inView} />
          </div>
        ))}
      </div>

      {proj.cta && (
        <a
          href={proj.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-label="visit"
          className="text-green font-semibold hover:underline self-start"
        >
          {proj.cta.label}
        </a>
      )}
    </div>
  )
}

function DeCarbCard() {
  const proj = getProject('decarb')
  return (
    <div
      className="card-hover col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl p-8 flex flex-col justify-between min-h-[280px]"
      style={{ backgroundColor: '#f0edec' }}
    >
      <div>
        {/* Award pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {proj.awards && proj.awards.map((award) => (
            <span
              key={award}
              className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-orange-ink"
            >
              {award}
            </span>
          ))}
        </div>
        <h3 className="font-heading font-extrabold text-3xl text-dark mb-1">{proj.title}</h3>
        <p className="text-muted font-semibold mb-3">{proj.subtitle}</p>
        <p className="text-muted text-sm leading-relaxed mb-6">
          {proj.description}
        </p>
      </div>

      <div>
        {/* Stack pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {proj.stack && proj.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono border border-grey bg-white text-dark"
            >
              {tech}
            </span>
          ))}
        </div>

        {proj.github && <CodeLink href={proj.github} color="#B83A0A" />}
      </div>
    </div>
  )
}

function TEDxCard() {
  const proj = getProject('tedx')
  return (
    <div
      className="card-hover col-span-1 rounded-3xl p-6 flex flex-col justify-between min-h-[220px] bg-white border border-grey"
    >
      <div>
        {/* TEDx X icon */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#E62B1E' }}>
          <span className="text-white font-extrabold text-lg" aria-hidden="true">X</span>
        </div>
        <h3 className="font-heading font-bold text-xl text-dark mb-2">{proj.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4">{proj.description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {proj.stack && proj.stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-full text-xs font-mono bg-[#F5F5F5] text-muted">
              {tech}
            </span>
          ))}
        </div>
        {proj.github && <CodeLink href={proj.github} color="#0F0F0F" />}
      </div>
    </div>
  )
}

function AlertEyeCard() {
  const proj = getProject('alerteye')
  return (
    <div
      className="card-hover col-span-1 rounded-3xl p-6 flex flex-col justify-between min-h-[220px] border border-green"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <div>
        {/* Eye icon */}
        <div className="mb-4">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#00E87A" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <h3 className="font-heading font-bold text-xl text-dark mb-2">{proj.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4">{proj.description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {proj.stack && proj.stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-full text-xs font-mono border border-green text-green-ink">
              {tech}
            </span>
          ))}
        </div>
        {proj.github && <CodeLink href={proj.github} color="#006d36" />}
      </div>
    </div>
  )
}

function DraftArenaCard() {
  const proj = getProject('draftarena')
  return (
    <div
      className="card-hover col-span-1 flex min-h-[280px] flex-col justify-between rounded-3xl p-8 md:col-span-2"
      style={{
        backgroundColor: '#121C2B',
        // Top stripe in the app's team colours (manager 1 blue vs manager 2 orange);
        // as a background it's clipped by the card's rounded corners
        backgroundImage: 'linear-gradient(to right, #003EC7 50%, #FF5C1A 50%)',
        backgroundSize: '100% 6px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <span
          className="mb-4 inline-block rounded-md border px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider"
          style={{ borderColor: '#C3F400', color: '#C3F400' }}
        >
          Football · 1v1
        </span>
        <h3 className="mb-1 font-heading text-3xl font-extrabold text-white">{proj.title}</h3>
        <p className="mb-3 font-semibold" style={{ color: '#C3F400' }}>
          {proj.subtitle}
        </p>
        <p className="mb-5 text-sm leading-relaxed text-white/75">{proj.description}</p>

        {proj.highlights && (
          <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {proj.highlights.map((h) => (
              <li key={h} className="rounded-xl bg-white/5 px-3 py-2 text-xs leading-snug text-white/80">
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {proj.stack && proj.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-5">
          {proj.cta && (
            <a
              href={proj.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="play"
              className="font-semibold hover:underline"
              style={{ color: '#C3F400' }}
            >
              {proj.cta.label}
            </a>
          )}
          {proj.github && <CodeLink href={proj.github} color="#C3F400" />}
        </div>
      </div>
    </div>
  )
}

function DeEx3Card() {
  const proj = getProject('deex3')
  return (
    <div
      className="card-hover col-span-1 md:col-span-2 rounded-2xl p-5 flex items-start gap-4 min-h-[140px] bg-dark-green"
    >
      {/* Network nodes icon */}
      <div className="flex-shrink-0 mt-0.5">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="#00E87A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2.5" />
          <circle cx="5" cy="5" r="2" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <line x1="6.5" y1="6.5" x2="10.5" y2="10.5" />
          <line x1="17.5" y1="6.5" x2="13.5" y2="10.5" />
          <line x1="6.5" y1="17.5" x2="10.5" y2="13.5" />
          <line x1="17.5" y1="17.5" x2="13.5" y2="13.5" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading font-bold text-lg text-white leading-tight">{proj.title}</h3>
        <p className="text-light-green text-sm leading-relaxed mt-1 mb-3 opacity-90">{proj.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {proj.stack && proj.stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-full text-[11px] font-mono border border-green text-green">
              {tech}
            </span>
          ))}
        </div>
        {proj.github && <CodeLink href={proj.github} color="#00E87A" size={12} />}
      </div>
    </div>
  )
}

function EduFinEaseCard() {
  const proj = getProject('edufinease')
  return (
    <div
      className="card-hover col-span-1 md:col-span-2 rounded-3xl p-8 flex flex-col justify-between min-h-[220px]"
      style={{ backgroundColor: '#E8F7EE' }}
    >
      <div>
        {/* Graduation cap icon */}
        <div className="mb-4">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#006d36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-dark mb-1">{proj.title}</h3>
        {proj.subtitle && (
          <p className="text-green-ink font-semibold mb-3 text-sm">{proj.subtitle}</p>
        )}
        <p className="text-muted text-sm leading-relaxed mb-4">{proj.description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {proj.stack && proj.stack.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full text-xs font-mono border border-green bg-white text-green-ink">
              {tech}
            </span>
          ))}
        </div>
        {proj.github && <CodeLink href={proj.github} color="#006d36" />}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 md:py-32">
      <div
        className="mx-auto"
        style={{ maxWidth: '1280px', padding: '0 clamp(20px, 5vw, 32px)' }}
      >
        <SectionHeading>
          Things I&apos;ve{' '}
          <span
            className="bg-dark text-green rounded-lg"
            style={{ padding: '0.1em 0.35em', display: 'inline-block' }}
          >
            shipped
          </span>
        </SectionHeading>

        {/* Bento grid — mobile: 1-col, all tablets (md to xl): 2-col, desktop xl+: 4-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <CallCheckCard />
          <DraftArenaCard />
          <DeCarbCard />
          <TEDxCard />
          <AlertEyeCard />
          <EduFinEaseCard />
          <DeEx3Card />
        </div>
      </div>
    </section>
  )
}
