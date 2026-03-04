import { Metadata } from 'next';
import ModularPageClient from './ModularPageClient';

export const metadata: Metadata = {
  title: 'Globe Modular | Construcción Modular Industrial con Método Canadiense',
  description: 'Espacios modulares confiables para minería, construcción, energía e industria. Ingeniería seria, arriendo y venta flexible, mantención certificada. Globe Modular no improvisa.',
  keywords: 'construcción modular Chile, campamentos mineros, oficinas modulares arriendo, bodegas industriales, módulos construcción, Globe Modular',
  openGraph: {
    title: 'Globe Modular | Construcción Modular Industrial',
    description: 'Espacios modulares que operan con criterio. Para minería, construcción, energía e industria.',
    type: 'website',
    locale: 'es_CL',
  },
};

export default function ModularPage() {
  return <ModularPageClient />;
}
