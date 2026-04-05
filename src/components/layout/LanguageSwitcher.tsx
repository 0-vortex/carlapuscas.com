import { useParams } from '@tanstack/react-router'
import { locales, type Locale, defaultLocale } from '~/i18n'

const localeLabels: Record<Locale, string> = {
  en: 'EN',
  ro: 'RO',
  hu: 'HU',
}

export function LanguageSwitcher() {
  const params = useParams({ strict: false }) as { locale?: string }
  const currentLocale = params.locale || defaultLocale

  return (
    <div className="flex gap-1 items-center" role="navigation" aria-label="Language">
      {locales.map((locale) => (
        <a
          key={locale}
          href={locale === defaultLocale ? '/' : `/${locale}`}
          className={`font-display text-xs font-semibold px-2 py-1 rounded transition ${
            currentLocale === locale
              ? 'bg-brown text-warm-white'
              : 'text-brown-muted hover:bg-cream hover:text-brown'
          }`}
          aria-current={currentLocale === locale ? 'true' : undefined}
          hrefLang={locale}
        >
          {localeLabels[locale]}
        </a>
      ))}
    </div>
  )
}
