import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { locales } from '@/i18n';
import type { Metadata } from 'next';
import '../globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://grupo-globe-nextjs.vercel.app'),
  title: 'Grupo Globe',
  description: 'Building enduring value in critical industries across North and South America',
  icons: {
    icon: '/images/favicons/favicon-grupo-globe.svg',
  },
  openGraph: {
    images: ['/images/logos/logo-grupo-globe.png'],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={inter.variable}>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
