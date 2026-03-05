import { Metadata } from 'next';
import PowerSubNav from '@/app/components/PowerSubNav';
import EficienciaClient from './EficienciaClient';

export const metadata: Metadata = {
  title: 'Eficiencia Energética Industrial | ISO 50001 | Globe Power',
  description: 'Reduce consumo 15% con gestión basada en datos. Auditorías, SGE, cumplimiento Ley Eficiencia Energética. Siemens partnership.',
  keywords: 'eficiencia energética Chile, ISO 50001, auditoría energética, SGE, Ley Eficiencia',
  openGraph: {
    title: 'Eficiencia Energética Industrial | ISO 50001 | Globe Power',
    description: 'Reduce consumo 15% con gestión basada en datos. Auditorías, SGE, cumplimiento Ley Eficiencia Energética.',
    type: 'website',
    images: [
      {
        url: '/images/logos/power-logo-clean.png',
        width: 1200,
        height: 630,
        alt: 'Globe Power - Eficiencia Energética',
      },
    ],
  },
};

export default function EficienciaEnergeticaPage() {
  return (
    <>
      <PowerSubNav />
      <EficienciaClient />
    </>
  );
}
