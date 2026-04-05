'use client'
import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useLocale } from '~/i18n/useLocale'
import { useLocalePath } from '~/i18n/useLocalePath'
import { t } from '~/i18n/translations'
import { LanguageSwitcher } from './LanguageSwitcher'

const navLinkClass = "inline-block font-display font-medium text-sm text-brown-muted px-4 py-2 rounded-full hover:bg-cream hover:text-brown transition data-[status=active]:bg-brown data-[status=active]:text-warm-white"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()
  const lp = useLocalePath()
  const i18n = t(locale)

  const navItems = [
    { to: lp('/'), label: i18n.nav.home, exact: true },
    { to: lp('/about'), label: i18n.nav.about },
    { to: lp('/services'), label: i18n.nav.services },
    { to: lp('/blog'), label: i18n.nav.blog },
    { to: lp('/contact'), label: i18n.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-warm-white/70 border-b border-white/50">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to={lp('/')} className="font-display font-extrabold text-xl text-brown no-underline flex items-center gap-2">
          <svg width="18" height="10" viewBox="0 0 200 100" className="text-clay opacity-40" aria-hidden="true">
            <path d="M100,100 L100,0 L120,5 L100,100 L80,5 Z" fill="currentColor"/>
            <path d="M100,100 L60,10 L80,20 Z" fill="currentColor"/>
            <path d="M100,100 L140,10 L120,20 Z" fill="currentColor"/>
            <path d="M100,100 L40,25 L60,30 Z" fill="currentColor"/>
            <path d="M100,100 L160,25 L140,30 Z" fill="currentColor"/>
            <path d="M100,100 L25,45 L45,42 Z" fill="currentColor"/>
            <path d="M100,100 L175,45 L155,42 Z" fill="currentColor"/>
          </svg>
          Carla Puscas
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          <nav aria-label="Main navigation">
            <ul className="flex gap-1 list-none">
              {navItems.map(item => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={item.exact ? { exact: true } : undefined}
                    activeProps={{ 'data-status': 'active' }}
                    className={navLinkClass}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            className="font-display font-semibold text-sm text-brown bg-cream/60 px-4 py-2 rounded-full border-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? i18n.nav.closeMenu : i18n.nav.menu}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <nav className="md:hidden backdrop-blur-xl bg-warm-white/95 border-t border-white/50 px-6 py-4" aria-label="Main navigation">
          <ul className="flex flex-col gap-1 list-none">
            {navItems.map(item => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={item.exact ? { exact: true } : undefined}
                  activeProps={{ 'data-status': 'active' }}
                  className={navLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
