import type { Metadata } from 'next';
import PowerPageClient from './PowerPageClient';

export const metadata: Metadata = {
  title: 'Globe Power | El Músculo Silencioso del Grupo',
  description: 'Verde Profundo. Energía clara y ordenada para operaciones críticas. El músculo silencioso del grupo Globe.',
};

export default function PowerPage() {
  return <PowerPageClient />;
}
