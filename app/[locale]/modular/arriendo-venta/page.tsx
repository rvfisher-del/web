import { Metadata } from 'next';
import ArriendoVentaClient from './ArriendoVentaClient';

export const metadata: Metadata = {
  title: 'Arriendo y Venta de Módulos | Flexible para Tu Proyecto | Globe Modular',
  description: 'Arriendo corto/largo plazo o compra directa. Desde semanas hasta años. Flexibilidad total con ingeniería seria. Globe Modular Chile.',
  keywords: 'arriendo módulos Chile, venta oficinas modulares, campamentos arriendo, modular lease, construcción modular venta',
  openGraph: {
    title: 'Arriendo y Venta | Globe Modular',
    description: 'Flexibilidad para cada proyecto: arriendo o compra, tú decides cómo operar.',
    type: 'website',
    locale: 'es_CL',
  },
};

export default function ArriendoVentaPage() {
  return <ArriendoVentaClient />;
}
