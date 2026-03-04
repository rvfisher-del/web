import type { Metadata } from 'next';
import CertificacionPageClient from './CertificacionPageClient';

export const metadata: Metadata = {
  title: 'Certificación Ascensores Decreto 20297 Chile — Auditorías SEC y Cumplimiento | Globe Services',
  description: 'Certificación y cumplimiento normativo DS 20297 para ascensores en Chile. Auditorías técnicas SEC, documentación completa, protocolo canadiense. Evite multas y clausuras.',
  keywords: 'certificación ascensores chile, decreto 20297, normativa ascensores, auditoría SEC, cumplimiento DS 20297, inspección técnica ascensores',
  openGraph: {
    title: 'Certificación Ascensores Decreto 20297 Chile — Auditorías SEC y Cumplimiento | Globe Services',
    description: 'Certificación y cumplimiento normativo DS 20297 para ascensores en Chile. Auditorías técnicas SEC, documentación completa, protocolo canadiense. Evite multas y clausuras.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://grupo-globe-nextjs.vercel.app/servicios/certificacion-normativa-20297',
    siteName: 'Globe Services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certificación Ascensores Decreto 20297 Chile — Auditorías SEC y Cumplimiento | Globe Services',
    description: 'Certificación y cumplimiento normativo DS 20297 para ascensores en Chile. Auditorías técnicas SEC, documentación completa, protocolo canadiense. Evite multas y clausuras.',
  },
};

export default function CertificacionPage() {
  return <CertificacionPageClient />;
}
