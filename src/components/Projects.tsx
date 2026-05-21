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
    <span className="font-mono font-bold text-2xl text-[#00E87A]">
      {display.toFixed(decimals)}{suffix}
    </span>
  )
}

function CallCheckCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const proj = content.projects[0]

  return (
    <div
      ref={ref}
      className="card-hover col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl p-8 flex flex-col justify-between min-h-[280px]"
      style={{ backgroundColor: '#0A2318' }}
      data-cursor="link"
      data-cursor-label="open"
    >
      <div>
        <h3 className="font-heading font-extrabold text-3xl text-white mb-1">{proj.title}</h3>
        <p className="text-[#00E87A] font-semibold mb-3">{proj.subtitle}</p>
        <p className="text-[#C8F5E0] text-sm leading-relaxed mb-6">{proj.description}</p>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {proj.metrics && proj.metrics.map((m) => (
          <div key={m.label} className="bg-white/5 rounded-2xl p-4">
            <p className="text-[#C8F5E0] text-xs mb-1">{m.label}</p>
            <AnimatedCounter {...m} trigger={inView} />
          </div>
        ))}
      </div>

      {proj.cta && (
        <a
          href={proj.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00E87A] font-semibold hover:underline self-start"
        >
          {proj.cta.label}
        </a>
      )}
    </div>
  )
}

function DeCarbCard() {
  const proj = content.projects[1]
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
              className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: '#FF5C1A' }}
            >
              {award}
            </span>
          ))}
        </div>
        <h3 className="font-heading font-extrabold text-3xl text-[#0F0F0F] mb-1">{proj.title}</h3>
        <p className="text-[#3b4a3d] font-semibold mb-3">{proj.subtitle}</p>
        <p className="text-[#3b4a3d] text-sm leading-relaxed mb-6">
          {proj.description}
        </p>
      </div>

      <div>
        {/* Stack pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {proj.stack && proj.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono border border-[#E8E4DF] bg-white text-[#0F0F0F]"
            >
              {tech}
            </span>
          ))}
        </div>

        {proj.github && <CodeLink href={proj.github} color="#FF5C1A" />}
      </div>
    </div>
  )
}

function TEDxCard() {
  const proj = content.projects[2]
  return (
    <div
      className="card-hover col-span-1 rounded-3xl p-6 flex flex-col justify-between min-h-[220px] bg-white border border-[#E8E4DF]"
    >
      <div>
        {/* TEDx X icon */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#E62B1E' }}>
          <span className="text-white font-extrabold text-lg">X</span>
        </div>
        <h3 className="font-heading font-bold text-xl text-[#0F0F0F] mb-2">{proj.title}</h3>
        <p className="text-[#3b4a3d] text-sm leading-relaxed mb-4">{proj.description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {proj.stack && proj.stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-full text-xs font-mono bg-[#F5F5F5] text-[#3b4a3d]">
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
  const proj = content.projects[3]
  return (
    <div
      className="card-hover col-span-1 rounded-3xl p-6 flex flex-col justify-between min-h-[220px] border"
      style={{ backgroundColor: '#F5F5F5', borderColor: '#00E87A' }}
    >
      <div>
        {/* Eye icon */}
        <div className="mb-4">
          <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#00E87A" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        <h3 className="font-heading font-bold text-xl text-[#0F0F0F] mb-2">{proj.title}</h3>
        <p className="text-[#3b4a3d] text-sm leading-relaxed mb-4">{proj.description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {proj.stack && proj.stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-full text-xs font-mono border border-[#00E87A] text-[#006d36]">
              {tech}
            </span>
          ))}
        </div>
        {proj.github && <CodeLink href={proj.github} color="#006d36" />}
      </div>
    </div>
  )
}

function KDramaCard() {
  const proj = content.projects[5]
  return (
    <div
      className="card-hover col-span-1 md:col-span-2 rounded-2xl p-5 flex items-start gap-4 min-h-[140px]"
      style={{ backgroundColor: '#F3EEFB' }}
    >
      {/* Bar chart icon */}
      <div className="flex-shrink-0 mt-0.5">
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="20" x2="4" y2="10" />
          <line x1="10" y1="20" x2="10" y2="4" />
          <line x1="16" y1="20" x2="16" y2="14" />
          <line x1="22" y1="20" x2="22" y2="7" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading font-bold text-lg text-[#0F0F0F] leading-tight">{proj.title}</h3>
        <p className="text-[#3b4a3d] text-sm leading-relaxed mt-1 mb-3">{proj.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {proj.stack && proj.stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-full text-[11px] font-mono border border-[#D6BCFA] bg-white text-[#5B21B6]">
              {tech}
            </span>
          ))}
        </div>
        {proj.github && <CodeLink href={proj.github} color="#5B21B6" size={12} />}
      </div>
    </div>
  )
}

function DeEx3Card() {
  const proj = content.projects[6]
  return (
    <div
      className="card-hover col-span-1 md:col-span-2 rounded-2xl p-5 flex items-start gap-4 min-h-[140px]"
      style={{ backgroundColor: '#0A2318' }}
    >
      {/* Network nodes icon */}
      <div className="flex-shrink-0 mt-0.5">
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="#00E87A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <p className="text-[#C8F5E0] text-sm leading-relaxed mt-1 mb-3 opacity-90">{proj.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {proj.stack && proj.stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-full text-[11px] font-mono border border-[#00E87A] text-[#00E87A]">
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
  const proj = content.projects[4]
  return (
    <div
      className="card-hover col-span-1 md:col-span-2 rounded-3xl p-8 flex flex-col justify-between min-h-[220px]"
      style={{ backgroundColor: '#E8F7EE' }}
    >
      <div>
        {/* Graduation cap icon */}
        <div className="mb-4">
          <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#006d36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-[#0F0F0F] mb-1">{proj.title}</h3>
        {proj.subtitle && (
          <p className="text-[#006d36] font-semibold mb-3 text-sm">{proj.subtitle}</p>
        )}
        <p className="text-[#3b4a3d] text-sm leading-relaxed mb-4">{proj.description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {proj.stack && proj.stack.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full text-xs font-mono border border-[#00E87A] bg-white text-[#006d36]">
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
    <section className="bg-white py-20 md:py-32">
      <div
        className="mx-auto"
        style={{ maxWidth: '1280px', padding: '0 clamp(20px, 5vw, 32px)' }}
      >
        <SectionHeading>
          Things I&apos;ve{' '}
          <span
            className="bg-[#0F0F0F] text-[#00E87A] rounded-lg"
            style={{ padding: '0.1em 0.35em', display: 'inline-block' }}
          >
            shipped
          </span>
        </SectionHeading>

        {/* Bento grid — mobile: 1-col, all tablets (md to xl): 2-col, desktop xl+: 4-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <CallCheckCard />
          <DeCarbCard />
          <TEDxCard />
          <AlertEyeCard />
          <EduFinEaseCard />
          <KDramaCard />
          <DeEx3Card />
        </div>
      </div>
    </section>
  )
}
