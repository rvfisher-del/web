"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";

const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

const zones = [
  {
    title: "Santiago Centro",
    comunas: ["Santiago", "Estación Central", "Quinta Normal", "Recoleta", "Independencia", "Cerro Navi"],
    buildings: "90+"
  },
  {
    title: "Zona Oriente",
    comunas: ["Las Condes", "Providencia", "Ñuñoa", "La Reina", "Vitacura", "Lo Barnechea"],
    buildings: "120+"
  },
  {
    title: "Zona Sur",
    comunas: ["San Miguel", "La Cisterna", "San Bernardo", "El Bosque", "La Granja", "Pedro Aguirre Cerda"],
    buildings: "45+"
  },
  {
    title: "Zona Poniente",
    comunas: ["Maipú", "Pudahuel", "Cerrillos", "Lo Prado", "Renca", "Quilicura"],
    buildings: "40+"
  }
];

const benefits = [
  {
    title: "Administrador dedicado por zona",
    description: "Tu administrador conoce tu comuna, conoce tu edificio, conoce tu historia. No hablas con un call center."
  },
  {
    title: "Técnicos locales",
    description: "Equipos distribuidos por zona. Llegamos rápido porque estamos cerca."
  },
  {
    title: "Repuestos en stock",
    description: "Las marcas más comunes en tu zona, las tenemos. Menos tiempo esperando piezas."
  },
  {
    title: "Respuesta en menos de 24hrs",
    description: "Emergencia o consulta, te respondemos el mismo día. Siempre."
  }
];

export default function ComunasPage() {
  return (
    <>
        {/* Hero Section */}
        <section style={{ paddingTop: '200px', paddingBottom: '80px' }}>
          <div className="container">
            <div className="grid-12">
              <div className="col-span-8 col-start-3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={spring}
                  style={{ textAlign: 'center' }}
                >
                  <div className="eyebrow" style={{ marginBottom: '24px' }}>
                    Cobertura en Santiago
                  </div>
                  <h1 style={{ marginBottom: '32px' }}>
                    Estamos donde<br/>estás tú.
                  </h1>
                  <p className="lead">
                    300+ edificios en toda la Región Metropolitana. Técnicos distribuidos por zona, 
                    administradores dedicados que conocen tu comuna.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Zones Grid */}
        <section className="section-padding">
          <div className="container">
            <div className="grid-12" style={{ gap: '32px' }}>
              {zones.map((zone, i) => (
                <motion.div
                  key={i}
                  className="col-span-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ ...spring, delay: i * 0.1 }}
                >
                  <div className="card-luxury" style={{ height: '100%' }}>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '24px'
                    }}>
                      <h3 style={{ color: 'var(--accent)', margin: 0 }}>
                        {zone.title}
                      </h3>
                      <div style={{ 
                        padding: '8px 16px',
                        background: 'var(--warm-50)',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--accent)'
                      }}>
                        {zone.buildings} edificios
                      </div>
                    </div>
                    <div style={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {zone.comunas.map((comuna, j) => (
                        <span key={j} style={{ 
                          padding: '6px 14px',
                          background: 'var(--neutral-100)',
                          borderRadius: '6px',
                          fontSize: '14px',
                          color: 'var(--neutral-600)',
                          fontWeight: 500
                        }}>
                          {comuna}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding-sm">
          <div className="container">
            <div className="grid-12">
              <div className="col-span-10 col-start-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={spring}
                  style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                  <h2 style={{ marginBottom: '24px' }}>
                    ¿Por qué importa que estemos cerca?
                  </h2>
                  <p className="lead">
                    Porque un ascensor detenido no puede esperar tres horas 
                    a que llegue un técnico desde el otro lado de Santiago.
                  </p>
                </motion.div>

                <div className="grid-12" style={{ gap: '32px' }}>
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      className="col-span-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ ...spring, delay: i * 0.1 }}
                    >
                      <div style={{ 
                        padding: '32px',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 4px 16px rgba(var(--shadow-indigo), 0.08)',
                        height: '100%'
                      }}>
                        <h4 style={{ 
                          marginBottom: '12px',
                          color: 'var(--accent)',
                          fontSize: '18px'
                        }}>
                          {benefit.title}
                        </h4>
                        <p style={{ 
                          fontSize: '15px',
                          lineHeight: '1.6',
                          color: 'var(--neutral-600)',
                          margin: 0
                        }}>
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="section-padding-sm">
          <div className="container">
            <div className="grid-12">
              <div className="col-span-10 col-start-2">
                <motion.div
                  className="card-luxury"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={spring}
                  style={{ 
                    background: 'linear-gradient(135deg, var(--warm-50) 0%, white 100%)',
                    padding: '64px',
                    textAlign: 'center'
                  }}
                >
                  <h2 style={{ marginBottom: '24px' }}>
                    ¿Tu edificio está fuera de estas zonas?
                  </h2>
                  <p style={{ 
                    fontSize: '17px', 
                    lineHeight: '1.7', 
                    marginBottom: '32px',
                    maxWidth: '700px',
                    margin: '0 auto 32px'
                  }}>
                    También atendemos Valparaíso, Viña del Mar, Concón, Rancagua y otras ciudades. 
                    Pregúntanos y te confirmamos cobertura.
                  </p>
                  <Link href="/contacto" className="btn-primary">
                    Consultar cobertura
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding-sm">
          <div className="container">
            <div style={{ 
              display: 'flex',
              justifyContent: 'center',
              gap: '80px',
              padding: '80px 0',
              borderTop: '1px solid var(--warm-200)',
              borderBottom: '1px solid var(--warm-200)',
              fontVariantNumeric: 'tabular-nums'
            }}>
              {[
                { number: "300+", label: "Edificios", desc: "En toda la RM" },
                { number: "700+", label: "Ascensores", desc: "Funcionando cada día" },
                { number: "40+", label: "Comunas", desc: "Con cobertura activa" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: i * 0.1 }}
                  style={{ textAlign: 'center', maxWidth: '200px' }}
                >
                  <div style={{ 
                    fontSize: '64px',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 800,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: '12px'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ 
                    fontSize: '15px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '8px'
                  }}>
                    {stat.label}
                  </div>
                  <div style={{ 
                    fontSize: '14px',
                    color: 'var(--neutral-600)',
                    lineHeight: '1.5'
                  }}>
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}
