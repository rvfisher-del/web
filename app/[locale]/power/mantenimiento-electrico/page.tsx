import { Metadata } from 'next';
import MantenimientoClient from './MantenimientoClient';

export const metadata: Metadata = {
  title: 'Mantenimiento Eléctrico Industrial 4.0 | Globe Power',
  description: 'Mantenimiento predictivo con telemetría activa. Anticipamos fallas, 20% ahorro presupuesto, respuesta <4H. 24/7 disponible.',
  keywords: 'mantenimiento eléctrico industrial, mantenimiento predictivo, mantenimiento 4.0 Chile',
  openGraph: {
    title: 'Mantenimiento Eléctrico Industrial 4.0 | Globe Power',
    description: 'Mantenimiento predictivo con telemetría activa. Anticipamos fallas, 20% ahorro presupuesto, respuesta <4H.',
    type: 'website',
    images: [
      {
        url: '/images/logos/power-logo-clean.png',
        width: 1200,
        height: 630,
        alt: 'Globe Power - Mantenimiento',
      },
    ],
  },
};

export default function MantenimientoElectricoPage() {
  return <MantenimientoClient />;
}
