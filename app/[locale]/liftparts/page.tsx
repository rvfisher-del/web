import type { Metadata } from 'next';
import LiftPartsPageClient from './LiftPartsPageClient';

export const metadata: Metadata = {
  title: 'Globe Lift Parts — Repuestos + Reparación de Componentes para Ascensores | Chilean Standards Applied',
  description: 'Repuestos para todas las marcas de ascensores + laboratorio avanzado de reparación de componentes. Estándares canadienses aplicados. Parte del Grupo Globe. WhatsApp rápido: +56 9 7797 4948',
  keywords: 'repuestos ascensores Chile, reparación componentes ascensores, Schindler, Otis, Kone, Mitsubishi, TKE, laboratorio reparación, Globe Lift Parts',
  openGraph: {
    title: 'Globe Lift Parts — Repuestos + Reparación para Ascensores',
    description: 'Todas las marcas. Laboratorio avanzado de reparación. Estándares canadienses. Respuesta rápida via WhatsApp.',
    type: 'website',
    locale: 'es_CL',
    siteName: 'Grupo Globe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Globe Lift Parts — Repuestos + Reparación para Ascensores',
    description: 'Todas las marcas. Laboratorio avanzado. Respuesta en minutos.',
  },
};

export default function LiftPartsPage() {
  return <LiftPartsPageClient />;
}
