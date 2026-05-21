'use client'
import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

type Variant = 'default' | 'interactive' | 'text'

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [variant, setVariant] = useState<Variant>('default')
  const [label, setLabel] = useState<string>('')
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  // Tighter spring for the dot, slightly softer for the larger ring
  const springX = useSpring(x, { stiffness: 600, damping: 32 })
  const springY = useSpring(y, { stiffness: 600, damping: 32 })

  useEffect(() => {
    setIsDesktop(window.matchMedia('(pointer: fine)').matches)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)

      const el = e.target as HTMLElement
      if (!el || !el.closest) {
        setVariant('default')
        setLabel('')
        return
      }

      // Interactive — links, buttons, summary, [role=button], [data-cursor=...]
      const interactive = el.closest(
        'a, button, summary, [role="button"], [data-cursor="link"]'
      )
      if (interactive) {
        const custom = interactive.getAttribute('data-cursor-label')
        setVariant('interactive')
        setLabel(custom ?? '')
        return
      }

      // Text content — paragraphs, list items, headings, ordinary text containers
      const text = el.closest('p, li, h1, h2, h3, h4, h5, h6, span, time, label')
      if (text && !text.querySelector('a, button')) {
        setVariant('text')
        setLabel('')
        return
      }

      setVariant('default')
      setLabel('')
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!isDesktop) return null

  // Size + offset per variant
  const sizes = {
    default: 10,
    interactive: 56,
    text: 4,
  }
  const heights = {
    default: 10,
    interactive: 56,
    text: 26,
  }
  const offsetX = -(sizes[variant] / 2)
  const offsetY = -(heights[variant] / 2)

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: springX,
        y: springY,
        mixBlendMode: 'difference',
      }}
    >
      <motion.div
        animate={{
          width: sizes[variant],
          height: heights[variant],
          x: offsetX,
          y: offsetY,
          borderRadius: variant === 'text' ? 2 : '50%',
          backgroundColor:
            variant === 'interactive' ? 'transparent' : '#00E87A',
          borderColor: '#00E87A',
          borderWidth: variant === 'interactive' ? 2 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderStyle: 'solid',
        }}
      >
        {variant === 'interactive' && label && (
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: '#00E87A',
              fontFamily: 'var(--font-mono), monospace',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  )
}
