import { Metadata } from 'next';
import IngenieriaMantencionClient from './IngenieriaMantencionClient';

export const metadata: Metadata = {
  title: 'Ingeniería y Mantención Modular | Certificación SEC | Globe Modular',
  description: 'Ingeniería seria con método canadiense, certificación SEC completa y contratos de mantención 24/7. No te dejamos solo después de la instalación.',
  keywords: 'ingeniería modular Chile, certificación SEC módulos, mantención módulos industriales, contratos mantención, Globe Modular',
  openGraph: {
    title: 'Ingeniería y Mantención | Globe Modular',
    description: 'Ingeniería seria + mantención confiable = Operación sin sorpresas.',
    type: 'website',
    locale: 'es_CL',
  },
};

export default function IngenieriaMantencionPage() {
  return <IngenieriaMantencionClient />;
}
