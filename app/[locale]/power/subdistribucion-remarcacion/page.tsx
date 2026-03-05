import { Metadata } from 'next';
import SubdistribucionClient from './SubdistribucionClient';

export const metadata: Metadata = {
  title: 'Subdistribución y Remarcación Energética | Globe Power',
  description: 'Transparencia total con medición Siemens SENTRON. Precisión >99%, eliminamos cobros injustos. +70 activos gestionados en Chile.',
  keywords: 'subdistribución energética, remarcación eléctrica, medición SENTRON, telemetría Chile',
  openGraph: {
    title: 'Subdistribución y Remarcación Energética | Globe Power',
    description: 'Transparencia total con medición Siemens SENTRON. Precisión >99%, eliminamos cobros injustos.',
    type: 'website',
    images: [
      {
        url: '/images/logos/power-logo-clean.png',
        width: 1200,
        height: 630,
        alt: 'Globe Power - Subdistribución',
      },
    ],
  },
};

export default function SubdistribucionRemarcacionPage() {
  return <SubdistribucionClient />;
}
