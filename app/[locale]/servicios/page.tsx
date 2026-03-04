import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Globe Services — Mantenimiento Industrial Chile | A Portilla Company',
  description: 'Mantenimiento industrial, logística y gestión de activos en Chile con estándar canadiense. Continuidad crítica sin excusas, protocolos claros, soporte 24/7.',
  openGraph: {
    title: 'Globe Services — Mantenimiento Industrial Chile | A Portilla Company',
    description: 'Mantenimiento industrial, logística y gestión de activos en Chile con estándar canadiense. Continuidad crítica sin excusas, protocolos claros, soporte 24/7.',
    type: 'website',
    locale: 'es_CL',
    siteName: 'Grupo Globe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Globe Services — Mantenimiento Industrial Chile | A Portilla Company',
    description: 'Mantenimiento industrial, logística y gestión de activos en Chile con estándar canadiense. Continuidad crítica sin excusas, protocolos claros, soporte 24/7.',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
