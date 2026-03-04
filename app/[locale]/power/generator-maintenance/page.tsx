import { Metadata } from 'next';
import GeneratorClient from './GeneratorClient';

export const metadata: Metadata = {
  title: 'Generator Maintenance and Repairs | Globe Power',
  description: 'Industrial generator installation, preventive/corrective maintenance, emergency repairs, and 24/7 monitoring for continuous power reliability.',
  keywords: 'generator maintenance Chile, industrial generators, emergency power systems, generator repairs',
  openGraph: {
    title: 'Generator Maintenance and Repairs | Globe Power',
    description: 'Industrial generator installation, preventive/corrective maintenance, emergency repairs, and 24/7 monitoring for continuous power reliability.',
    type: 'website',
    images: [
      {
        url: '/images/logos/power-logo-clean.png',
        width: 1200,
        height: 630,
        alt: 'Globe Power - Generator Maintenance',
      },
    ],
  },
};

export default function GeneratorMaintenancePage() {
  return <GeneratorClient />;
}
