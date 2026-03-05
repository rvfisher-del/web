import type { Metadata } from 'next';
import CatalogoClient from './CatalogoClient';

export const metadata: Metadata = {
  title: 'Catálogo de Repuestos para Ascensores | Globe Lift Parts',
  description: 'Catálogo completo de repuestos para todas las marcas de ascensores. Schindler, Otis, Kone, Mitsubishi, TKE. Consulta rápida via WhatsApp. No e-commerce, servicio profesional.',
  keywords: 'repuestos ascensores, catálogo ascensores Chile, Schindler parts, Otis parts, Kone repuestos',
};

export default function CatalogoPage() {
  return <CatalogoClient />;
}
