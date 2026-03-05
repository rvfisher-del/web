import type { Metadata } from 'next';
import NosotrosClient from './NosotrosClient';

export const metadata: Metadata = {
  title: 'Sobre Nosotros - Estándares Canadienses | Globe Lift Parts',
  description: 'Globe Lift Parts aplica estándares canadienses a cada repuesto. Parte del Grupo Globe con 700+ ascensores mantenidos. Laboratorio único + equipo experto.',
  keywords: 'Globe Lift Parts, Grupo Globe, estándares canadienses, reparación ascensores Chile',
};

export default function NosotrosPage() {
  return <NosotrosClient />;
}
