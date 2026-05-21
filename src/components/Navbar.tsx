'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '/resume.pdf', external: true },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 transition-all duration-300"
      style={{
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <nav
        className="max-w-[1280px] mx-auto flex items-center justify-between"
        style={{ padding: '0 32px', height: '72px' }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-heading font-bold select-none"
          style={{ fontSize: '1.25rem', color: '#0F0F0F', textDecoration: 'none', letterSpacing: '-0.02em' }}
        >
          GB.
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center" style={{ gap: '2rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="font-sans font-medium transition-colors duration-200"
              style={{ fontSize: '0.875rem', color: '#0F0F0F', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00E87A')}
              onMouseLeave={e => (e.currentTarget.style.color = '#0F0F0F')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-sans font-semibold transition-all duration-200"
            style={{
              fontSize: '0.875rem',
              color: '#ffffff',
              backgroundColor: '#0F0F0F',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = '#00E87A'
              el.style.color = '#0F0F0F'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = '#0F0F0F'
              el.style.color = '#ffffff'
            }}
          >
            Connect
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#0F0F0F] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0F0F0F] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0F0F0F] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E8E4DF] px-5 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-[#0F0F0F] font-medium text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#0F0F0F] text-white text-sm font-semibold px-5 py-3 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Connect
          </a>
        </div>
      )}
    </motion.header>
  )
}
