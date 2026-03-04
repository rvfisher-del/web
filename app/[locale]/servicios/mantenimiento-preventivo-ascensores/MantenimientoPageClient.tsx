'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LeadCaptureModal from '@/components/LeadCaptureModal';
import ServicesHeader from '@/components/layout/ServicesHeader';

export default function MantenimientoPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white">
        <ServicesHeader />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
            <div className="absolute inset-0 bg-[#BA6347]/10" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <a href="/servicios" className="text-sm text-[#D4957D] hover:text-white transition-colors">
                Servicios
              </a>
              <span className="text-[#D4957D] mx-2">/</span>
              <span className="text-sm text-white">Mantenimiento Preventivo</span>
            </div>

            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Mantenimiento Preventivo 24/7
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#D4957D] mb-8 leading-relaxed max-w-3xl mx-auto">
              No quede mal con sus residentes por culpa de un ascensor. Protocolo canadiense, técnicos certificados, respuesta &lt;2H garantizada. Continuidad sin excusas.
            </p>

            <div className="max-w-2xl mx-auto mb-12 px-6 py-4 border-l-4 border-[#BA6347] bg-white/5 backdrop-blur-sm">
              <p className="text-[#D4957D] text-base leading-relaxed italic">
                "Cada vez que falla el ascensor, recibo 50 reclamos. Necesito un proveedor que responda siempre."
              </p>
              <p className="text-white/60 text-sm mt-2">
                — Administrador, Edificio Residencial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">&lt;2H</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  TIEMPO DE RESPUESTA GARANTIZADO
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">99.2%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  PREVENCIÓN FALLAS CRÍTICAS
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">24/7</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  SOPORTE DE EMERGENCIA
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <svg 
              className="w-8 h-8 text-white animate-bounce" 
              style={{ animationDuration: '2000ms' }}
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* Content Pillars */}
        <section className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                RESPUESTA SIN EXCUSAS
              </span>
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Tres Pilares de Servicio Continuo
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Programa preventivo personalizado, soporte de emergencia 24/7 y gestión digital con reportabilidad. Protocolo canadiense aplicado a edificios chilenos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 border-l-4 border-[#BA6347] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-[#BA6347] font-bold">01</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Programa Preventivo Personalizado
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Inspecciones mensuales con protocolo canadiense, diagnóstico predictivo (vibración, temperatura, ruido) y ajustes preventivos. Prevención real, no check-lists vacíos.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Inspecciones mensuales con checklist canadiense</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Diagnóstico predictivo con sensores</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Ajustes y lubricación preventiva</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: fallas detectadas antes de que se conviertan en emergencias.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 border-l-4 border-[#BA6347] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-[#BA6347] font-bold">02</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Soporte de Emergencia 24/7
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Respuesta &lt;2H garantizada (Santiago y Regiones), técnicos certificados con stock de repuestos críticos y protocolo de escalamiento para fallas mayores. Siempre disponibles.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Respuesta &lt;2H, 365 días del año</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Técnicos con certificación SEC</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Stock on-site de componentes críticos</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: ascensor detenido = técnico en camino en minutos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-10 border-l-4 border-[#BA6347] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-[#BA6347] font-bold">03</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Gestión Digital y Reportabilidad
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Dashboard de gestión para administradores, bitácora digital de intervenciones y reportes ejecutivos mensuales traducidos para comités. Transparencia total.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Dashboard con estado en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Bitácora digital de cada intervención</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Reportes ejecutivos para comités</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: visibilidad total para decisiones informadas.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* Service Plans Section */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold text-black mb-12 text-center">
              Planes de Mantenimiento
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Plan Básico */}
              <div className="bg-white border border-slate-200 p-8 rounded-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#BA6347] mb-4">Plan Básico</h3>
                <p className="text-sm text-slate-600 mb-6">Para edificios con bajo tráfico y riesgo operativo limitado.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">Preventivo mensual programado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">Correctivo con cargo aparte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">Horario laboral (9-18h)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">Reportes trimestrales</span>
                  </li>
                </ul>
                <a href="mailto:ventas@grupoglobe.cl" className="block w-full text-center bg-slate-100 text-[#BA6347] px-6 py-3 text-sm font-bold tracking-wide uppercase rounded-md hover:bg-[#BA6347] hover:text-white transition-all duration-300">
                  Solicitar Cotización
                </a>
              </div>

              {/* Plan Premium */}
              <div className="bg-white border-2 border-[#BA6347] p-8 rounded-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#BA6347] text-white px-4 py-1 text-xs font-bold tracking-wide uppercase rounded-full">
                  Recomendado
                </div>
                <h3 className="text-2xl font-bold text-[#BA6347] mb-4">Plan Premium</h3>
                <p className="text-sm text-slate-600 mb-6">Para edificios residenciales y corporativos con alto tráfico.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">Preventivo mensual programado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700"><strong>Correctivo incluido</strong> (sin cargo extra)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700"><strong>Emergencias 24/7</strong> con respuesta &lt;2H</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">Dashboard digital de gestión</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">Reportes mensuales ejecutivos</span>
                  </li>
                </ul>
                <a href="mailto:ventas@grupoglobe.cl" className="block w-full text-center bg-[#BA6347] text-white px-6 py-3 text-sm font-bold tracking-wide uppercase rounded-md hover:bg-[#A8563C] transition-all duration-300">
                  Solicitar Cotización
                </a>
              </div>

              {/* Plan Enterprise */}
              <div className="bg-white border border-slate-200 p-8 rounded-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#BA6347] mb-4">Plan Enterprise</h3>
                <p className="text-sm text-slate-600 mb-6">Para portfolios multi-edificio con protocolo unificado.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">Todo lo del Plan Premium</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700"><strong>Protocolo unificado multi-site</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">Gestor de cuenta dedicado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">SLA personalizado por edificio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">Análisis de flota y proyecciones</span>
                  </li>
                </ul>
                <a href="mailto:ventas@grupoglobe.cl" className="block w-full text-center bg-slate-100 text-[#BA6347] px-6 py-3 text-sm font-bold tracking-wide uppercase rounded-md hover:bg-[#BA6347] hover:text-white transition-all duration-300">
                  Solicitar Cotización
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* Lead Magnet CTA */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold text-black mb-6">
              ¿Su Flota de Ascensores Necesita Evaluación?
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Descargue nuestro checklist gratuito de mantenimiento preventivo. Evalúe el estado de sus ascensores y detecte riesgos antes de que se conviertan en emergencias.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#BA6347] text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase rounded-md hover:bg-[#A8563C] transition-all duration-300"
            >
              Descargar Checklist Gratis
            </button>
          </div>
        </section>

        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* CTA Section */}
        <section id="contacto" className="py-32 bg-gradient-to-br from-[#BA6347] via-[#A8563C] to-[#BA6347] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              No Quede Mal Con Sus Residentes
            </h2>
            <p className="text-xl text-[#D4957D] leading-relaxed mb-12">
              Solicite una evaluación de flota gratuita. Auditaremos sus ascensores y entregaremos plan de mantenimiento personalizado en 5 días hábiles.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:ventas@grupoglobe.cl" className="bg-white text-[#BA6347] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#D4957D] hover:text-white transition-all duration-300 rounded-md">
                Solicitar Evaluación Gratis
              </a>
              <a href="tel:+56222222222" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#BA6347] transition-all duration-300 rounded-md">
                Emergencia 24/7
              </a>
            </div>
            <p className="text-[#D4957D] mt-8">
              Email: <a href="mailto:ventas@grupoglobe.cl" className="text-white hover:underline">ventas@grupoglobe.cl</a> | Emergencias: +56 2 2222 2222
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <img
                  src="/images/logos/services-logo-clean.png"
                  alt="Globe Services"
                  className="h-[60px] w-auto mb-4 opacity-80"
                />
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8F8B84] font-bold mt-4">
                  Una empresa de <a href="/" className="hover:text-white transition-colors">Grupo Globe</a>.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#D4957D]">Servicios de Ascensores</h4>
                <ul className="space-y-2">
                  <li><a href="/servicios/modernizacion-ascensores" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Modernización</a></li>
                  <li><a href="/servicios/certificacion-normativa-20297" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Certificación DS 20297</a></li>
                  <li><a href="/servicios/mantenimiento-preventivo-ascensores" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Mantenimiento Preventivo</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#D4957D]">Grupo Globe</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Inicio</a></li>
                  <li><a href="/servicios" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Servicios</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#D4957D]">Contacto</h4>
                <ul className="space-y-2">
                  <li><a href="mailto:ventas@grupoglobe.cl" className="text-[#8F8B84] hover:text-white transition-colors text-sm">ventas@grupoglobe.cl</a></li>
                  <li><span className="text-[#8F8B84] text-sm">+56 2 2222 2222</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-[#8F8B84] text-center">
                © 2026 Globe Services. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Mantenimiento Preventivo Ascensores"
        downloadTitle="Checklist: Mantenimiento Preventivo Ascensores"
        ctaText="Descargar Checklist"
      />
    </>
  );
}
