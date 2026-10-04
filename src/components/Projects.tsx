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

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {proj.stack && proj.stack.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full text-xs font-mono border border-green/40 text-light-green">
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
              data-cursor-label="visit"
              className="text-green font-semibold hover:underline"
            >
              {proj.cta.label}
            </a>
          )}
          {proj.github && <CodeLink href={proj.github} color="#00E87A" />}
        </div>
      </div>
    </div>
  )
}

function EarlierWorkCard() {
  const earlier = content.projects.filter((p) => 'earlier' in p && p.earlier)
  return (
    <div className="card-hover col-span-1 md:col-span-2 rounded-3xl p-8 flex flex-col min-h-[280px] bg-white border border-grey">
      <p className="mb-5 font-mono text-[11px] uppercase tracking-wider text-subtle">Earlier work · college</p>
      <ul className="flex flex-col divide-y divide-grey">
        {earlier.map((proj) => (
          <li key={proj.id} className="flex flex-col gap-1.5 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <h3 className="font-heading font-bold text-lg text-dark leading-tight">{proj.title}</h3>
              <p className="text-muted text-sm leading-relaxed mt-0.5">{proj.description}</p>
              {proj.stack && (
                <p className="font-mono text-[11px] text-subtle mt-1">{proj.stack.join(' · ')}</p>
              )}
            </div>
            {proj.github && (
              <span className="flex-shrink-0">
                <CodeLink href={proj.github} color="#006d36" size={12} />
              </span>
            )}
          </li>
        ))}
      </ul>
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
          <EarlierWorkCard />
        </div>
      </div>
    </section>
  )
}
