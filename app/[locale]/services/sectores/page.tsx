"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";

const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

const sectors = [
  {
    title: "Edificios Residenciales",
    description: "Departamentos y condominios donde las personas viven. El ascensor no puede fallar un lunes en la mañana.",
    needs: [
      "Respuesta rápida ante emergencias",
      "Mantenciones sin interrumpir rutinas",
      "Comunicación clara con administración",
      "Presupuestos predecibles"
    ]
  },
  {
    title: "Oficinas y Edificios Corporativos",
    description: "Cada minuto de inactividad cuesta. Mantenimiento preventivo que no interfiere con tu operación.",
    needs: [
      "Mantenciones fuera de horario laboral",
      "Coordinación con administración de edificio",
      "Modernización sin detener operaciones",
      "Certificaciones al día"
    ]
  },
  {
    title: "Hoteles y Hospitalidad",
    description: "La experiencia de tu huésped importa. Ascensores funcionando siempre, sin excusas.",
    needs: [
      "Disponibilidad 24/7 real",
      "Mantenimiento preventivo invisible",
      "Estándares estéticos impecables",
      "Respuesta inmediata ante fallas"
    ]
  },
  {
    title: "Centros Comerciales y Retail",
    description: "Miles de personas al día. No puedes darte el lujo de tener un ascensor fuera de servicio.",
    needs: [
      "Inspecciones frecuentes de seguridad",
      "Repuestos en stock permanente",
      "Coordinación con flujos de clientes",
      "Modernización rápida"
    ]
  },
  {
    title: "Centros de Salud y Clínicas",
    description: "Vidas dependen de que tu infraestructura funcione. Cero margen de error.",
    needs: [
      "Cumplimiento normativo estricto",
      "Protocolos de sanitización",
      "Planes de contingencia certificados",
      "Atención prioritaria en emergencias"
    ]
  },
  {
    title: "Estacionamientos y Subterráneos",
    description: "Movimiento constante de vehículos y personas. Equipos industriales que aguantan uso intensivo.",
    needs: [
      "Equipos robustos para carga pesada",
      "Mantenimiento especializado",
      "Sistemas de seguridad reforzados",
      "Iluminación y ventilación integrada"
    ]
  }
];

export default function SectoresPage() {
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
                    Sectores que Atendemos
                  </div>
                  <h1 style={{ marginBottom: '32px' }}>
                    Cada edificio es diferente.<br/>
                    Lo sabemos.
                  </h1>
                  <p className="lead">
                    15 años trabajando con residenciales, oficinas, hoteles, clínicas y retail. 
                    Entendemos las necesidades específicas de tu sector.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="section-padding">
          <div className="container">
            <div className="grid-12" style={{ gap: '48px' }}>
              {sectors.map((sector, i) => (
                <motion.div
                  key={i}
                  className="col-span-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ ...spring, delay: i * 0.1 }}
                >
                  <div className="card-luxury" style={{ height: '100%' }}>
                    <h3 style={{ marginBottom: '16px', color: 'var(--accent)' }}>
                      {sector.title}
                    </h3>
                    <p style={{ marginBottom: '32px', color: 'var(--neutral-600)' }}>
                      {sector.description}
                    </p>
                    <div style={{ 
                      paddingTop: '24px',
                      borderTop: '1px solid var(--warm-200)'
                    }}>
                      <div style={{ 
                        fontSize: '13px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '16px',
                        color: 'var(--neutral-600)'
                      }}>
                        Lo que importa aquí:
                      </div>
                      <ul style={{ 
                        listStyle: 'none', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '10px' 
                      }}>
                        {sector.needs.map((need, j) => (
                          <li key={j} style={{ 
                            fontSize: '15px',
                            lineHeight: '1.6',
                            paddingLeft: '20px',
                            position: 'relative'
                          }}>
                            <span style={{ 
                              position: 'absolute',
                              left: 0,
                              color: 'var(--accent)',
                              fontWeight: 600
                            }}>
                              ·
                            </span>
                            {need}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
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
                    padding: '64px'
                  }}
                >
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '64px',
                    alignItems: 'center'
                  }}>
                    <div>
                      <h2 style={{ marginBottom: '24px' }}>
                        300+ edificios confían en nosotros
                      </h2>
                      <p style={{ fontSize: '17px', lineHeight: '1.7', marginBottom: '24px' }}>
                        No importa si tu edificio es residencial, comercial o industrial. 
                        Lo que importa es que entiendas claramente qué está pasando con tus ascensores 
                        y que te respondan cuando llamas.
                      </p>
                      <p style={{ fontSize: '17px', lineHeight: '1.7' }}>
                        Trabajamos con Thyssenkrupp, Otis, Schindler, Kone, y todas las marcas que existen. 
                        Ninguna es un misterio para nosotros.
                      </p>
                    </div>
                    <div style={{ 
                      textAlign: 'center',
                      padding: '48px',
                      background: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 4px 16px rgba(var(--shadow-indigo), 0.08)'
                    }}>
                      <div style={{ 
                        fontSize: '72px',
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 800,
                        color: 'var(--accent)',
                        marginBottom: '8px',
                        lineHeight: 1
                      }}>
                        15+
                      </div>
                      <div style={{ 
                        fontSize: '15px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--neutral-600)'
                      }}>
                        Años de experiencia<br/>promedio del equipo
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding-sm">
          <div className="container">
            <div className="grid-12">
              <div className="col-span-8 col-start-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={spring}
                  style={{ textAlign: 'center' }}
                >
                  <h2 style={{ marginBottom: '24px' }}>
                    ¿Conversamos sobre tu edificio?
                  </h2>
                  <p className="lead" style={{ marginBottom: '40px' }}>
                    Cuéntanos qué tipo de edificio tienes y qué necesitas.
                  </p>
                  <Link href="/contacto" className="btn-primary">
                    Hablemos
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
