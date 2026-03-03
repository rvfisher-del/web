import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Globe Services — A Grupo Globe Company',
  description: 'Excelencia operativa en cada detalle. Mantenimiento, Reparaciones y Gestión de modernización.',
  openGraph: {
    title: 'Globe Services — A Grupo Globe Company',
    description: 'Excelencia operativa en cada detalle. Mantenimiento, Reparaciones y Gestión de modernización.',
    type: 'website',
    locale: 'es_CL',
    siteName: 'Grupo Globe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Globe Services — A Grupo Globe Company',
    description: 'Excelencia operativa en cada detalle. Mantenimiento, Reparaciones y Gestión de modernización.',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
