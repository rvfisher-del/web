import type { Metadata } from 'next';
import LaboratorioClient from './LaboratorioClient';

export const metadata: Metadata = {
  title: 'Laboratorio Avanzado de Reparación de Componentes | Globe Lift Parts',
  description: 'Reparamos componentes obsoletos y descontinuados. Placas electrónicas, motores, encoders, sistemas de control. Ahorro 40-70% vs. reemplazo. Único laboratorio certificado en Chile.',
  keywords: 'reparación componentes ascensores, laboratorio ascensores Chile, reparación placas electrónicas, encoder repair',
};

export default function LaboratorioPage() {
  return <LaboratorioClient />;
}
