'use client'
import { useRef, useEffect, useState, ReactNode, CSSProperties } from 'react'

type Props = {
  children: ReactNode
  align?: 'left' | 'center'
  className?: string
  style?: CSSProperties
  underline?: boolean
}

/**
 * Section heading with a single distinctive signature: a green line draws
 * from left to right under the text when it enters the viewport. Replaces the
 * generic fade-up motion used across the site.
 */
export default function SectionHeading({
  children,
  align = 'left',
  className = '',
  style,
  underline = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        textAlign: align,
        marginBottom: 'clamp(32px, 5vw, 56px)',
      }}
    >
      <h2
        className={`font-heading font-bold text-[#0F0F0F] ${className}`}
        style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          lineHeight: 1.1,
          display: 'inline-block',
          margin: 0,
          ...style,
        }}
      >
        {children}
      </h2>
      {underline && (
        <div
          aria-hidden="true"
          style={{
            height: 3,
            width: '100%',
            backgroundColor: '#00E87A',
            borderRadius: 2,
            marginTop: 10,
            transformOrigin: align === 'center' ? 'center' : 'left',
            transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            transition:
              'transform 900ms cubic-bezier(0.22, 0.61, 0.36, 1) 100ms',
          }}
        />
      )}
    </div>
  )
}
