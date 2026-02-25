import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'es',

  // Detect locale from Accept-Language header
  localeDetection: true,

  // Don't prefix default locale - shows / instead of /es
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  // Exclude /servicios paths (handled by Vercel rewrites)
  matcher: ['/', '/(en|es)/:path*', '/((?!servicios|api|_next/static|_next/image|favicon.ico).*)']
};
