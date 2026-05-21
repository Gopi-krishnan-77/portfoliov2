'use client'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export default function ScrollCounter() {
  const { scrollYProgress } = useScroll()
  const [percent, setPercent] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setPercent(Math.round(v * 100))
  })

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <div
        className="px-4 py-2 rounded-lg text-xs font-mono"
        style={{ backgroundColor: '#0F0F0F', color: '#00E87A', fontFamily: 'var(--font-mono)' }}
      >
        SCROLL: {percent}%
      </div>
    </div>
  )
}
