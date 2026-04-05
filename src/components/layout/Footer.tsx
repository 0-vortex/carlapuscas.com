import { Link } from '@tanstack/react-router'
import { useLocale } from '~/i18n/useLocale'
import { useLocalePath } from '~/i18n/useLocalePath'
import { t } from '~/i18n/translations'

export function Footer() {
  const year = new Date().getFullYear()
  const locale = useLocale()
  const lp = useLocalePath()
  const i18n = t(locale)

  return (
    <footer className="py-10 border-t border-brown/8" role="contentinfo">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div>
            <p className="font-display font-bold text-lg text-brown">Carla Puscas</p>
            <p className="text-sm text-brown-muted leading-relaxed">
              {i18n.footer.credentials}
              <br />
              &copy; {year} {i18n.footer.copyright}
            </p>
          </div>

          <nav className="flex gap-6" aria-label="Footer navigation">
            <Link to={lp('/contact')} className="text-sm text-brown-muted hover:bg-cream px-4 py-2 rounded-full transition">
              {i18n.footer.contactLink}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
