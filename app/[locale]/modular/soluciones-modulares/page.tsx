import { Metadata } from 'next';
import SolucionesModularesClient from './SolucionesModularesClient';

export const metadata: Metadata = {
  title: 'Soluciones Modulares | Campamentos, Oficinas, Bodegas | Globe Modular',
  description: 'Campamentos modulares, oficinas temporales, baños, bodegas y módulos especializados. Desde 50 a 1000 personas. Certificación SEC, arriendo y venta. Globe Modular Chile.',
  keywords: 'campamentos modulares, oficinas modulares arriendo, bodegas modulares, baños modulares, construcción modular Chile',
  openGraph: {
    title: 'Soluciones Modulares | Globe Modular',
    description: 'Campamentos, oficinas, bodegas y módulos especializados con ingeniería seria.',
    type: 'website',
    locale: 'es_CL',
  },
};

export default function SolucionesModularesPage() {
  return <SolucionesModularesClient />;
}
