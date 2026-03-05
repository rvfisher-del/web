import { Metadata } from 'next';
import PowerSubNav from '@/app/components/PowerSubNav';
import SoftwareClient from './SoftwareClient';

export const metadata: Metadata = {
  title: 'Software Gestión Energética | Power Digital | Globe Power',
  description: 'Telemetría en tiempo real, análisis predictivo, reportería avanzada. +70 activos, +2000 puntos medición, 99% uptime.',
  keywords: 'software gestión energética, Power Digital, telemetría energética, Siemens software',
  openGraph: {
    title: 'Software Gestión Energética | Power Digital | Globe Power',
    description: 'Telemetría en tiempo real, análisis predictivo, reportería avanzada. +70 activos, +2000 puntos medición.',
    type: 'website',
    images: [
      {
        url: '/images/logos/power-logo-clean.png',
        width: 1200,
        height: 630,
        alt: 'Globe Power - Software',
      },
    ],
  },
};

export default function SoftwareReporteriaPage() {
  return (
    <>
      <PowerSubNav />
      <SoftwareClient />
    </>
  );
}
