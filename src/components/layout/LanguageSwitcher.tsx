import { useRouterState } from '@tanstack/react-router'
import { locales, type Locale, defaultLocale } from '~/i18n'
import { useLocale } from '~/i18n/useLocale'
import { t } from '~/i18n/translations'

const localeOptions: Record<Locale, { flag: string; label: string }> = {
  en: { flag: '\u{1F1EC}\u{1F1E7}', label: 'English' },
  ro: { flag: '\u{1F1F7}\u{1F1F4}', label: 'Română' },
  hu: { flag: '\u{1F1ED}\u{1F1FA}', label: 'Magyar' },
}

function buildLocalePath(pathname: string, currentLocale: Locale, targetLocale: Locale): string {
  // Strip current locale prefix to get the bare path
  let barePath = pathname
  if (currentLocale !== defaultLocale) {
    barePath = pathname.replace(new RegExp(`^/${currentLocale}(/|$)`), '/')
  }
  if (barePath === '') barePath = '/'

  // Prepend target locale (default locale has no prefix)
  if (targetLocale === defaultLocale) {
    return barePath
  }
  return barePath === '/' ? `/${targetLocale}` : `/${targetLocale}${barePath}`
}

export function LanguageSwitcher() {
  const locale = useLocale()
  const i18n = t(locale)
  const routerState = useRouterState()
  const pathname = routerState.location.pathname

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetLocale = e.target.value as Locale
    if (targetLocale === locale) return
    const newPath = buildLocalePath(pathname, locale, targetLocale)
    window.location.href = newPath
  }

  return (
    <div className="flex items-center">
      <label htmlFor="language-select" className="sr-only">
        {i18n.nav.languageLabel}
      </label>
      <select
        id="language-select"
        value={locale}
        onChange={handleChange}
        className="font-display font-semibold text-sm text-brown bg-transparent border border-brown/20 rounded-full px-3 py-1.5 cursor-pointer appearance-none pr-7 focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 focus-visible:outline-none transition"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' fill='none' stroke='%236B5E55' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.5rem center',
        }}
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {localeOptions[l].flag} {localeOptions[l].label}
          </option>
        ))}
      </select>
    </div>
  )
}
