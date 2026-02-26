import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'es',

  // Disable automatic locale detection - user explicitly chooses language
  localeDetection: false,

  // Don't prefix default locale - shows / instead of /es
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  // Exclude /servicios paths (handled by Vercel rewrites) and static assets
  matcher: ['/', '/(en|es)/:path*', '/((?!servicios|api|_next/static|_next/image|images|favicon.ico).*)']
};
