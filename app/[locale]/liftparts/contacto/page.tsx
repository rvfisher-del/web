import type { Metadata } from 'next';
import ContactoClient from './ContactoClient';

export const metadata: Metadata = {
  title: 'Contacto - WhatsApp Rápido | Globe Lift Parts',
  description: 'Contacta a Globe Lift Parts via WhatsApp: +56 9 7797 4948. Simon Abramovicz, Manager. Oficina: Isadora Goyenechea 3520, Las Condes. Respuesta en minutos.',
  keywords: 'contacto Globe Lift Parts, WhatsApp repuestos ascensores, Las Condes',
};

export default function ContactoPage() {
  return <ContactoClient />;
}
