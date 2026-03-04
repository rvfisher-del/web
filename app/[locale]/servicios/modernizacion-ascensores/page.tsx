import type { Metadata } from 'next';
import ModernizacionPageClient from './ModernizacionPageClient';

export const metadata: Metadata = {
  title: 'Modernización de Ascensores Chile — Retrofits Técnicos y Estéticos | Globe Services',
  description: 'Modernización integral de ascensores: renovación de cabinas, sistemas de control y componentes técnicos. Estándar canadiense, sin interrumpir operaciones. 24/7.',
  keywords: 'modernización ascensores chile, retrofit ascensores, renovación cabinas, actualización sistemas elevación, mejora ascensores edificios',
  openGraph: {
    title: 'Modernización de Ascensores Chile — Retrofits Técnicos y Estéticos | Globe Services',
    description: 'Modernización integral de ascensores: renovación de cabinas, sistemas de control y componentes técnicos. Estándar canadiense, sin interrumpir operaciones. 24/7.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://grupo-globe-nextjs.vercel.app/servicios/modernizacion-ascensores',
    siteName: 'Globe Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modernización de Ascensores Chile — Retrofits Técnicos y Estéticos | Globe Services',
    description: 'Modernización integral de ascensores: renovación de cabinas, sistemas de control y componentes técnicos. Estándar canadiense, sin interrumpir operaciones. 24/7.',
  },
};

export default function ModernizacionPage() {
  return <ModernizacionPageClient />;
}
