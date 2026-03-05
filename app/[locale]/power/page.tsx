import type { Metadata } from 'next';
import PowerSubNav from '@/app/components/PowerSubNav';
import PowerPageClient from './PowerPageClient';

export const metadata: Metadata = {
  title: 'Globe Power - A Group Globe Company',
  description: 'Transformamos la energía en un recurso estratégico de tu activo. Alianza exclusiva Siemens, telemetría en tiempo real, 99% uptime. Subdistribución, eficiencia energética y mantenimiento 4.0 para +70 activos en Chile.',
  keywords: 'gestión energética Chile, subdistribución energética, Siemens Chile, telemetría energética, ISO 50001, facility management energético, medición energética industrial',
  openGraph: {
    title: 'Globe Power - A Group Globe Company',
    description: 'Transformamos la energía en un recurso estratégico de tu activo. Alianza exclusiva Siemens para gestión energética corporativa.',
    type: 'website',
    locale: 'es_CL',
    siteName: 'Grupo Globe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Globe Power - A Group Globe Company',
    description: 'Transformamos la energía en un recurso estratégico de tu activo. Alianza exclusiva Siemens, 99% uptime, +70 activos gestionados.',
  },
};

export default function PowerPage() {
  return (
    <>
      <PowerSubNav />
      <PowerPageClient />
    </>
  );
}
