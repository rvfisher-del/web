"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";

const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

const services = [
  {
    title: "Mantenimiento Preventivo",
    description: "Inspecciones programadas y ajustes técnicos para evitar fallas antes de que ocurran. Tu ascensor funciona, tus residentes contentos.",
    features: [
      "Inspección técnica mensual completa",
      "Lubricación y ajuste de componentes",
      "Revisión de sistemas de seguridad",
      "Reporte detallado después de cada visita"
    ]
  },
  {
    title: "Reparación y Emergencias",
    description: "Respuesta rápida cuando algo falla. Conocemos todas las marcas y tenemos repuestos en stock.",
    features: [
      "Atención de emergencias 24/7",
      "Técnicos especializados en todas las marcas",
      "Repuestos originales y compatibles",
      "Diagnóstico claro sin vueltas"
    ]
  },
  {
    title: "Modernización",
    description: "Tu ascensor tiene años pero no tiene que parecer viejo. Actualización de controles, puertas, cabina y sistemas de seguridad.",
    features: [
      "Actualización de sistemas de control",
      "Mejoras de eficiencia energética",
      "Renovación estética de cabina",
      "Cumplimiento normativo actualizado"
    ]
  },
  {
    title: "Inspección Técnica SEC",
    description: "Coordinamos y gestionamos las inspecciones obligatorias con la Superintendencia de Electricidad y Combustibles.",
    features: [
      "Preparación completa del ascensor",
      "Coordinación con inspectores SEC",
      "Corrección de observaciones",
      "Seguimiento hasta certificación final"
    ]
  },
  {
    title: "Administración Dedicada",
    description: "Cada edificio tiene un administrador asignado. No hablas con un call center, hablas con alguien que conoce tu edificio.",
    features: [
      "Administrador dedicado por edificio",
      "Respuesta directa sin call center",
      "Planificación proactiva de mantenciones",
      "Reporte mensual de estado"
    ]
  },
  {
    title: "Consultoría Técnica",
    description: "¿Cambiar de empresa? ¿Modernizar o reemplazar? Te ayudamos a tomar la mejor decisión para tu edificio.",
    features: [
      "Evaluación técnica sin costo",
      "Análisis de viabilidad de proyectos",
      "Recomendaciones objetivas",
      "Presupuestos transparentes"
    ]
  }
];

export default function ServiciosPage() {
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
                    Nuestros Servicios
                  </div>
                  <h1 style={{ marginBottom: '32px' }}>
                    Mantenimiento sin sorpresas.<br/>
                    Decisiones rápidas.
                  </h1>
                  <p className="lead">
                    Desde mantenimiento preventivo hasta modernización completa. 
                    Conocemos todas las marcas y respondemos siempre.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container">
            <div className="grid-12" style={{ gap: '48px' }}>
              {services.map((service, i) => (
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
                      {service.title}
                    </h3>
                    <p style={{ marginBottom: '32px', color: 'var(--neutral-600)' }}>
                      {service.description}
                    </p>
                    <ul style={{ 
                      listStyle: 'none', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '12px' 
                    }}>
                      {service.features.map((feature, j) => (
                        <li key={j} style={{ 
                          fontSize: '15px',
                          lineHeight: '1.6',
                          paddingLeft: '16px',
                          position: 'relative'
                        }}>
                          <span style={{ 
                            position: 'absolute',
                            left: '0',
                            color: 'var(--accent)', 
                            fontWeight: 700
                          }}>
                            •
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding-sm">
          <div className="container">
            <div className="grid-12">
              <div className="col-span-8 col-start-3">
                <motion.div
                  className="card-luxury"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={spring}
                  style={{ 
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, var(--warm-50) 0%, white 100%)',
                    padding: '64px 48px'
                  }}
                >
                  <h2 style={{ marginBottom: '24px' }}>
                    ¿Hablamos de tu edificio?
                  </h2>
                  <p className="lead" style={{ marginBottom: '40px' }}>
                    Cotización sin compromiso. Respuesta en menos de 24 horas.
                  </p>
                  <Link href="/contacto" className="btn-primary">
                    Solicita una cotización
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
