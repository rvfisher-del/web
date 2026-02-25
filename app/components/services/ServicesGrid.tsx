"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const services = [
  { 
    title: "Mantenimiento", 
    desc: "Preventivo y correctivo. Programas personalizados para tu edificio.", 
    tip: "Nuestro mantenimiento preventivo puede ahorrarte hasta un 60% en reparaciones de emergencia. Revisamos todo antes de que se convierta en problema.",
    link: "/servicios#mantenimiento" 
  },
  { 
    title: "Reparaciones", 
    desc: "Reparamos antes de reemplazar. Respuesta rápida cuando lo necesitas.", 
    tip: "Tiempo de respuesta promedio: 2 horas para emergencias. Siempre intentamos reparar antes de reemplazar para cuidar tu presupuesto.",
    link: "/servicios#reparaciones" 
  },
  { 
    title: "Modernización", 
    desc: "Actualiza controles, motores, puertas y seguridad. Desde lo básico hasta renovación completa.", 
    tip: "Un ascensor modernizado consume hasta 40% menos energía y aumenta el valor de tu propiedad. Te asesoramos sin compromiso.",
    link: "/servicios#modernizacion" 
  },
  { 
    title: "Instalación", 
    desc: "Montacargas, salvaescaleras y equipos de accesibilidad.", 
    tip: "Diseñamos soluciones específicas para tu espacio. No vendemos 'paquetes estándar', porque cada edificio es distinto.",
    link: "/servicios#instalacion" 
  },
  { 
    title: "Mejora de Cabinas", 
    desc: "Renovación de interiores. Paneles, iluminación, pisos. Un servicio único.", 
    tip: "Somos los únicos en Chile que ofrecemos renovación de cabinas como servicio especializado. Transformamos el interior sin tocar la mecánica.",
    link: "/servicios#mejora-cabinas",
  },
  { 
    title: "Normativa", 
    desc: "Te ayudamos con certificaciones, documentación y cumplimiento técnico.", 
    tip: "Preparamos toda la documentación para certificadores y el Minvu. También asesoramos a directorios que necesitan entender informes técnicos.",
    link: "/servicios" 
  }
];

const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const [showTip, setShowTip] = useState(false);

  return (
    <motion.div
      className="col-span-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ...spring, delay: index * 0.08 }}
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      style={{ position: 'relative' }}
    >
      <div className="card-luxury" style={{ height: '100%' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '26px' }}>{service.title}</h3>
        <p style={{ 
          fontSize: '16px', 
          lineHeight: '1.7', 
          color: 'var(--neutral-600)', 
          marginBottom: '24px' 
        }}>
          {service.desc}
        </p>
        
        {/* Show tip on hover */}
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '16px',
              border: '1px solid rgba(255, 140, 66, 0.2)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{ 
              fontSize: '12px', 
              fontWeight: 600, 
              color: 'var(--accent)', 
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              💡 Dato útil
            </div>
            <p style={{ 
              fontSize: '14px', 
              lineHeight: '1.5', 
              color: 'var(--neutral-700)',
              margin: 0
            }}>
              {service.tip}
            </p>
          </motion.div>
        )}
        
        <Link 
          href={service.link}
          style={{ 
            fontSize: '15px', 
            fontWeight: 600, 
            color: 'var(--accent)', 
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          Más información
          <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <section className="section-warm">
      <div className="container">
        {/* Asymmetric header */}
        <div className="grid-12" style={{ marginBottom: '64px' }}>
          <div className="col-span-6 col-start-2">
            <div className="eyebrow" style={{ marginBottom: '16px' }}>Lo que hacemos por ti</div>
            <h2 style={{ marginBottom: '24px' }}>Servicio completo para tu edificio</h2>
            <p className="lead">
              Desde el mantenimiento diario hasta proyectos complejos. 
              Siempre con el mismo compromiso: tratarte como cliente, no como número.
            </p>
          </div>
        </div>

        {/* Grid: 3 columns for cards */}
        <div className="grid-12">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
