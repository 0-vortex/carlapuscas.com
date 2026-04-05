import { useParams } from '@tanstack/react-router'
import { type Locale, defaultLocale, isValidLocale } from './translations'

export function useLocale(): Locale {
  const params = useParams({ strict: false }) as { locale?: string }
  if (params.locale && isValidLocale(params.locale)) {
    return params.locale
  }
  return defaultLocale
}
