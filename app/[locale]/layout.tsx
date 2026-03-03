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
  title: {
    default: "Grupo Globe | Canadian Standards in Critical Industries",
    template: "%s | Grupo Globe"
  },
  description: "Solving high-stakes industrial challenges with zero improvisation. Expertise in Power, Modular, Services, and Lift Parts.",
  keywords: ["Canadian Standards", "Industrial", "Power", "Modular", "Services", "Lift Parts"],
  icons: {
    icon: '/images/favicons/favicon-grupo-globe.svg',
  },
  openGraph: {
    title: "Grupo Globe | Canadian Standards in Critical Industries",
    description: "Solving high-stakes industrial challenges with zero improvisation.",
    url: "https://grupo-globe-nextjs.vercel.app",
    siteName: "Grupo Globe",
    locale: "es_CL",
    type: "website",
    images: ['/images/logos/logo-grupo-globe.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
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
