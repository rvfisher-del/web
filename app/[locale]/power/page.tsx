import type { Metadata } from 'next';
import PowerPageClient from './PowerPageClient';

export const metadata: Metadata = {
  title: 'Globe Power — A Portilla Company',
  description: 'Eficiencia y continuidad eléctrica de grado minero. El músculo silencioso de la industria.',
  openGraph: {
    title: 'Globe Power — A Portilla Company',
    description: 'Eficiencia y continuidad eléctrica de grado minero. El músculo silencioso de la industria.',
    type: 'website',
    locale: 'es_CL',
    siteName: 'Grupo Globe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Globe Power — A Portilla Company',
    description: 'Eficiencia y continuidad eléctrica de grado minero. El músculo silencioso de la industria.',
  },
};

export default function PowerPage() {
  return <PowerPageClient />;
}
