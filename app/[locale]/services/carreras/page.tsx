"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";

const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

const positions = [
  {
    title: "Técnico de Mantenimiento de Ascensores",
    type: "Tiempo Completo",
    location: "Santiago - Varias zonas",
    description: "Buscamos técnicos con experiencia en mantenimiento preventivo y correctivo de ascensores. Conocimiento de marcas principales (Thyssenkrupp, Otis, Schindler, Kone).",
    requirements: [
      "Experiencia mínima 2 años en mantenimiento de ascensores",
      "Conocimiento eléctrico y mecánico",
      "Licencia de conducir clase B",
      "Disponibilidad para turnos de emergencia"
    ],
    benefits: true
  },
  {
    title: "Administrador de Contratos",
    type: "Tiempo Completo",
    location: "Santiago Centro",
    description: "Responsable de la relación con edificios asignados. Coordinar mantenciones, responder consultas, gestionar reclamos y asegurar satisfacción del cliente.",
    requirements: [
      "Experiencia en atención al cliente o gestión de servicios",
      "Excelentes habilidades de comunicación",
      "Capacidad de resolver problemas bajo presión",
      "Manejo intermedio de Excel y herramientas digitales"
    ],
    benefits: true
  },
  {
    title: "Técnico Especialista en Modernización",
    type: "Tiempo Completo",
    location: "Región Metropolitana",
    description: "Especialista en proyectos de modernización de ascensores: actualización de controles, sistemas de seguridad, renovación de cabinas.",
    requirements: [
      "Experiencia mínima 5 años en ascensores",
      "Conocimiento avanzado en sistemas de control",
      "Experiencia comprobable en proyectos de modernización",
      "Capacidad de trabajar de forma autónoma"
    ],
    benefits: true
  }
];

const benefits = [
  "Contrato indefinido estable",
  "Sueldo base + bonos por desempeño",
  "Capacitación técnica continua certificada",
  "Herramientas y equipos profesionales",
  "Vehículo de la empresa (para técnicos)",
  "Seguro complementario de salud",
  "Días administrativos adicionales",
  "Ambiente de trabajo colaborativo"
];

const values = [
  {
    title: "Respeto",
    description: "Tu opinión importa. Escuchamos a todos los niveles del equipo."
  },
  {
    title: "Autonomía",
    description: "Confiamos en tu criterio profesional. Tomas decisiones en terreno."
  },
  {
    title: "Aprendizaje",
    description: "Capacitación constante. Porque la tecnología no se detiene."
  },
  {
    title: "Equilibrio",
    description: "Vida personal y trabajo. Ambas importan."
  }
];

export default function CarrerasPage() {
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
                    Trabaja con Nosotros
                  </div>
                  <h1 style={{ marginBottom: '32px' }}>
                    Únete a un equipo<br/>
                    que respeta tu trabajo.
                  </h1>
                  <p className="lead">
                    Buscamos técnicos y administradores que quieran trabajar bien, 
                    aprender siempre y ser parte de algo más grande.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                    Lo que valoramos
                  </h2>
                  <p className="lead">
                    No somos perfectos, pero estos son los principios que nos guían.
                  </p>
                </motion.div>

                <div className="grid-12" style={{ gap: '32px' }}>
                  {values.map((value, i) => (
                    <motion.div
                      key={i}
                      className="col-span-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ ...spring, delay: i * 0.1 }}
                    >
                      <div style={{ 
                        padding: '40px',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 4px 16px rgba(var(--shadow-indigo), 0.08)',
                        textAlign: 'center',
                        height: '100%'
                      }}>
                        <h4 style={{ 
                          marginBottom: '12px',
                          color: 'var(--accent)',
                          fontSize: '20px'
                        }}>
                          {value.title}
                        </h4>
                        <p style={{ 
                          fontSize: '15px',
                          lineHeight: '1.6',
                          color: 'var(--neutral-600)',
                          margin: 0
                        }}>
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding">
          <div className="container">
            <div className="grid-12">
              <div className="col-span-10 col-start-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={spring}
                  style={{ marginBottom: '48px' }}
                >
                  <h2 style={{ marginBottom: '16px' }}>
                    Posiciones abiertas
                  </h2>
                  <p style={{ fontSize: '17px', color: 'var(--neutral-600)' }}>
                    Envía tu CV a <a href="mailto:rrhh@globeservices.cl" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>rrhh@globeservices.cl</a> indicando el cargo de interés.
                  </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {positions.map((position, i) => (
                    <motion.div
                      key={i}
                      className="card-luxury"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ ...spring, delay: i * 0.1 }}
                    >
                      <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr',
                        gap: '32px'
                      }}>
                        <div>
                          <div style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            marginBottom: '12px'
                          }}>
                            <h3 style={{ color: 'var(--accent)', margin: 0 }}>
                              {position.title}
                            </h3>
                            <span style={{ 
                              padding: '4px 12px',
                              background: 'var(--warm-50)',
                              borderRadius: '6px',
                              fontSize: '13px',
                              fontWeight: 600,
                              color: 'var(--accent)'
                            }}>
                              {position.type}
                            </span>
                          </div>
                          <div style={{ 
                            fontSize: '14px',
                            color: 'var(--neutral-600)',
                            marginBottom: '16px'
                          }}>
                            📍 {position.location}
                          </div>
                          <p style={{ 
                            fontSize: '15px',
                            lineHeight: '1.6',
                            marginBottom: '24px',
                            color: 'var(--neutral-600)'
                          }}>
                            {position.description}
                          </p>
                          <div>
                            <div style={{ 
                              fontSize: '13px',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                              marginBottom: '12px',
                              color: 'var(--neutral-600)'
                            }}>
                              Requisitos:
                            </div>
                            <ul style={{ 
                              listStyle: 'none',
                              margin: 0,
                              padding: 0,
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px'
                            }}>
                              {position.requirements.map((req, j) => (
                                <li key={j} style={{ 
                                  fontSize: '14px',
                                  paddingLeft: '20px',
                                  position: 'relative',
                                  lineHeight: '1.5'
                                }}>
                                  <span style={{ 
                                    position: 'absolute',
                                    left: 0,
                                    color: 'var(--accent)',
                                    fontWeight: 600
                                  }}>
                                    ✓
                                  </span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div style={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '32px',
                          background: 'var(--warm-50)',
                          borderRadius: '8px'
                        }}>
                          <a 
                            href={`mailto:rrhh@globeservices.cl?subject=Postulación: ${position.title}`}
                            className="btn-primary"
                            style={{ width: '100%', textAlign: 'center' }}
                          >
                            Postular
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                  <h2 style={{ marginBottom: '32px', textAlign: 'center' }}>
                    Beneficios del equipo
                  </h2>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px'
                  }}>
                    {benefits.map((benefit, i) => (
                      <div key={i} style={{ 
                        padding: '16px 16px 16px 28px',
                        background: 'white',
                        borderRadius: '8px',
                        position: 'relative'
                      }}>
                        <span style={{ 
                          position: 'absolute',
                          left: '16px',
                          fontSize: '16px',
                          color: 'var(--accent)',
                          fontWeight: 700
                        }}>
                          •
                        </span>
                        <span style={{ fontSize: '15px', lineHeight: '1.5' }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
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
                    ¿No ves una posición que calce contigo?
                  </h2>
                  <p className="lead" style={{ marginBottom: '40px' }}>
                    Envíanos tu CV de todas formas. Siempre estamos buscando buen talento.
                  </p>
                  <a 
                    href="mailto:rrhh@globeservices.cl?subject=Postulación Espontánea"
                    className="btn-primary"
                  >
                    Enviar CV
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
