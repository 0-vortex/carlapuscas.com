import { useLocale } from './useLocale'
import { defaultLocale } from './translations'

export function useLocalePath() {
  const locale = useLocale()
  return function localePath(path: string): string {
    if (locale === defaultLocale) return path
    return path === '/' ? `/${locale}` : `/${locale}${path}`
  }
}
