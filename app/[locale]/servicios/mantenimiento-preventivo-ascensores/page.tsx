import type { Metadata } from 'next';
import MantenimientoPageClient from './MantenimientoPageClient';

export const metadata: Metadata = {
  title: 'Mantenimiento Preventivo Ascensores Chile — Soporte 24/7 y Respuesta <2H | Globe Services',
  description: 'Mantenimiento preventivo de ascensores con protocolo canadiense. Respuesta <2H, soporte 24/7, prevención de fallas críticas. No quede mal con sus residentes por culpa de un ascensor.',
  keywords: 'mantenimiento preventivo ascensores chile, mantenimiento ascensores 24/7, servicio técnico ascensores, emergencias ascensores, reparación ascensores',
  openGraph: {
    title: 'Mantenimiento Preventivo Ascensores Chile — Soporte 24/7 y Respuesta <2H | Globe Services',
    description: 'Mantenimiento preventivo de ascensores con protocolo canadiense. Respuesta <2H, soporte 24/7, prevención de fallas críticas. No quede mal con sus residentes por culpa de un ascensor.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://grupo-globe-nextjs.vercel.app/servicios/mantenimiento-preventivo-ascensores',
    siteName: 'Globe Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mantenimiento Preventivo Ascensores Chile — Soporte 24/7 y Respuesta <2H | Globe Services',
    description: 'Mantenimiento preventivo de ascensores con protocolo canadiense. Respuesta <2H, soporte 24/7, prevención de fallas críticas. No quede mal con sus residentes por culpa de un ascensor.',
  },
};

export default function MantenimientoPage() {
  return <MantenimientoPageClient />;
}
