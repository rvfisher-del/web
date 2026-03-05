import type { Metadata } from 'next';
import MarcasClient from './MarcasClient';

export const metadata: Metadata = {
  title: 'Marcas Soportadas - Todas las Marcas de Ascensores | Globe Lift Parts',
  description: 'Repuestos y reparación para Schindler, Otis, Kone, Mitsubishi, ThyssenKrupp, Fujitec, Hyundai y todas las marcas principales. OEM y equivalentes certificados.',
  keywords: 'Schindler repuestos, Otis parts Chile, Kone ascensores, Mitsubishi elevator, ThyssenKrupp TKE',
};

export default function MarcasPage() {
  return <MarcasClient />;
}
