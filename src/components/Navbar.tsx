'use client'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '/resume.pdf', external: true },
]

const externalProps = { target: '_blank', rel: 'noopener noreferrer' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Solid background whenever the menu is open, so it never floats over the hero
  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 shadow-[0_1px_24px_rgba(0,0,0,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-[clamp(20px,5vw,32px)]">
        {/* Logo */}
        <a
          href="#"
          className="select-none font-heading text-xl font-bold tracking-[-0.02em] text-dark"
          aria-label="Back to top"
        >
          GB.
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? externalProps : {})}
              className="text-sm font-medium text-dark transition-colors duration-200 hover:text-green-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-dark px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-green hover:text-dark"
          >
            Connect
          </a>
        </div>

        {/* Mobile hamburger — 44px tap target */}
        <button
          type="button"
          className="-mr-2.5 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block h-0.5 w-6 bg-dark transition-all duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-dark transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-dark transition-all duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col border-t border-grey bg-white px-[clamp(20px,5vw,32px)] pb-6 pt-2 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? externalProps : {})}
              className="flex min-h-11 items-center text-base font-medium text-dark"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 rounded-full bg-dark px-5 py-3 text-center text-sm font-semibold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Connect
          </a>
        </div>
      )}
    </header>
  )
}
