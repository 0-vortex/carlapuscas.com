import { Link } from '@tanstack/react-router'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 border-t border-brown/8" role="contentinfo">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div>
            <p className="font-display font-bold text-lg text-brown">Carla Puscas</p>
            <p className="text-sm text-brown-muted leading-relaxed">
              Clinical &amp; Educational Psychologist
              <br />
              &copy; {year} Carla Puscas. All rights reserved.
            </p>
          </div>

          <nav className="flex gap-6" aria-label="Footer navigation">
            <Link to="/contact" className="text-sm text-brown-muted hover:bg-cream px-4 py-2 rounded-full transition">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
