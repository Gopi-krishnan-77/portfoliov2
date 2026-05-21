import { content } from '@/lib/content'
import SectionHeading from './SectionHeading'

export default function Stack() {
  return (
    <section className="relative bg-[#FAFAF8] py-20 md:py-32 overflow-hidden">
      <div
        className="relative mx-auto"
        style={{
          zIndex: 1,
          maxWidth: '1280px',
          padding: '0 clamp(20px, 5vw, 32px)',
        }}
      >
        <SectionHeading align="center">Things I work with</SectionHeading>

        {/* Skill cloud — flex wrap, never overlaps */}
        <div
          className="flex flex-wrap"
          style={{
            gap: 'clamp(8px, 1.2vw, 14px)',
            maxWidth: '880px',
            margin: '0 auto',
            justifyContent: 'center',
          }}
        >
          {content.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono pill-hover"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E8E4DF',
                borderRadius: '9999px',
                padding: 'clamp(8px, 1vw, 12px) clamp(16px, 2vw, 22px)',
                fontSize: 'clamp(13px, 1.1vw, 15px)',
                color: '#1c1b1b',
                whiteSpace: 'nowrap',
                display: 'inline-block',
                cursor: 'default',
                fontFamily: 'var(--font-mono), JetBrains Mono, monospace',
                transition: 'transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
