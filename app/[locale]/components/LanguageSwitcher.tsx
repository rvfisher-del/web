'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Locale } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    // Replace the current locale in the pathname
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-2 border border-black/10 rounded-sm overflow-hidden">
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-200 ${
          locale === 'en'
            ? 'bg-black text-white'
            : 'bg-transparent text-black/60 hover:text-black hover:bg-black/5'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('es')}
        className={`px-3 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-200 ${
          locale === 'es'
            ? 'bg-black text-white'
            : 'bg-transparent text-black/60 hover:text-black hover:bg-black/5'
        }`}
      >
        ES
      </button>
    </div>
  );
}
