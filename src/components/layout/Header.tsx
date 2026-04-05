import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-warm-white/70 border-b border-white/50" role="banner">
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-display font-extrabold text-xl text-brown no-underline">
          Carla Puscas
        </Link>

        <nav id="main-menu" aria-label="Main navigation">
          <ul className="flex gap-2 list-none">
            <li>
              <Link
                to="/"
                activeOptions={{ exact: true }}
                activeProps={{ 'data-status': 'active' }}
                className="inline-block font-display font-medium text-sm text-brown-muted px-4 py-2 rounded-full hover:bg-cream hover:text-brown transition data-[status=active]:bg-brown data-[status=active]:text-warm-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                activeProps={{ 'data-status': 'active' }}
                className="inline-block font-display font-medium text-sm text-brown-muted px-4 py-2 rounded-full hover:bg-cream hover:text-brown transition data-[status=active]:bg-brown data-[status=active]:text-warm-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                activeProps={{ 'data-status': 'active' }}
                className="inline-block font-display font-medium text-sm text-brown-muted px-4 py-2 rounded-full hover:bg-cream hover:text-brown transition data-[status=active]:bg-brown data-[status=active]:text-warm-white"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                activeProps={{ 'data-status': 'active' }}
                className="inline-block font-display font-medium text-sm text-brown-muted px-4 py-2 rounded-full hover:bg-cream hover:text-brown transition data-[status=active]:bg-brown data-[status=active]:text-warm-white"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                activeProps={{ 'data-status': 'active' }}
                className="inline-block font-display font-medium text-sm text-brown-muted px-4 py-2 rounded-full hover:bg-cream hover:text-brown transition data-[status=active]:bg-brown data-[status=active]:text-warm-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="hidden sm:hidden font-display font-semibold text-sm text-brown bg-cream/60 border-none px-4 py-2 rounded-full cursor-pointer hover:bg-clay hover:text-warm-white transition"
          aria-label="Toggle menu"
          aria-expanded="false"
          aria-controls="main-menu"
          onClick={(e) => {
            const nav = document.getElementById('main-menu')
            const isOpen = nav?.classList.toggle('is-open') ?? false
            e.currentTarget.setAttribute('aria-expanded', String(isOpen))
            e.currentTarget.textContent = isOpen ? 'Close' : 'Menu'
          }}
        >
          Menu
        </button>
      </div>
    </header>
  )
}
