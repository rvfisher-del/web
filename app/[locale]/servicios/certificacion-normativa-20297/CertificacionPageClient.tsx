'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LeadCaptureModal from '@/components/LeadCaptureModal';
import ServicesHeader from '@/components/layout/ServicesHeader';

export default function CertificacionPageClient() {
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
              <span className="text-sm text-white">Certificación DS 20297</span>
            </div>

            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Certificación Decreto 20297
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#D4957D] mb-8 leading-relaxed max-w-3xl mx-auto">
              Auditorías técnicas SEC, documentación completa y cumplimiento normativo con protocolo canadiense. No deje su edificio fuera de norma.
            </p>

            <div className="max-w-2xl mx-auto mb-12 px-6 py-4 border-l-4 border-[#BA6347] bg-white/5 backdrop-blur-sm">
              <p className="text-[#D4957D] text-base leading-relaxed italic">
                "La SEC me multó y amenazó con clausurar el ascensor. No puedo operarlo sin certificación."
              </p>
              <p className="text-white/60 text-sm mt-2">
                — Administrador, Edificio Residencial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">12+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  EDIFICIOS CERTIFICADOS 2025
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  APROBACIÓN SEC PRIMERA INSPECCIÓN
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">&lt;30</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  DÍAS HASTA CERTIFICACIÓN
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
                EVITE MULTAS Y CLAUSURAS
              </span>
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Tres Pasos Hacia Certificación SEC
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Proceso completo: auditoría técnica, corrección de no conformidades y certificación oficial. Protocolo canadiense aplicado al marco legal chileno.
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
                  Auditoría Técnica Integral
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Inspección exhaustiva de componentes críticos: cables, frenos, puertas, sistemas de seguridad. Termografía infrarroja de tableros eléctricos y pruebas de carga según DS 20297.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Inspección con protocolo canadiense</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Termografía infrarroja certificada</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Pruebas de carga y velocidad DS 20297</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: diagnóstico completo antes de certificar.
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
                  Documentación y Certificación SEC
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Preparación de expediente técnico completo, coordinación con SEC para inspección oficial y trazabilidad total del proceso. 100% de aprobación en primera inspección.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Expediente técnico SEC completo</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Coordinación inspección oficial</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Trazabilidad digital completa</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: certificación sin rechazos ni demoras.
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
                  Corrección de No Conformidades
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Identificación de incumplimientos normativos, plan de acción con presupuesto cerrado y gestión llave en mano hasta obtener certificación. Sin sorpresas.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Checklist de no conformidades DS 20297</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Presupuesto cerrado sin extras</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Gestión llave en mano con SEC</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: certificación garantizada sin costos ocultos.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* Legal Framework Section */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold text-black mb-8 text-center">
              Decreto Supremo 20297 en Lenguaje Claro
            </h2>
            <div className="bg-white border border-slate-200 p-8 rounded-lg mb-12">
              <h3 className="text-xl font-bold text-[#BA6347] mb-4">¿Qué es el DS 20297?</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                El Decreto Supremo 20297 establece las normas de seguridad para ascensores y montacargas en Chile. Define requisitos técnicos, frecuencia de inspecciones y responsabilidades de propietarios y administradores.
              </p>
              
              <h3 className="text-xl font-bold text-[#BA6347] mb-4">Plazos y Penalidades</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#BA6347] flex-shrink-0">→</span>
                  <span className="text-slate-700"><strong>Certificación inicial:</strong> Obligatoria antes de puesta en marcha</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BA6347] flex-shrink-0">→</span>
                  <span className="text-slate-700"><strong>Inspecciones periódicas:</strong> Cada 12 meses (anual)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BA6347] flex-shrink-0">→</span>
                  <span className="text-slate-700"><strong>Multas por incumplimiento:</strong> 10-500 UTM según gravedad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BA6347] flex-shrink-0">→</span>
                  <span className="text-slate-700"><strong>Clausura inmediata:</strong> En caso de riesgo grave identificado por SEC</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#BA6347] mb-4">Requisitos Técnicos Clave</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#BA6347] flex-shrink-0">✓</span>
                  <span className="text-slate-700">Cables de tracción sin desgaste superior al 10%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BA6347] flex-shrink-0">✓</span>
                  <span className="text-slate-700">Sistemas de frenado con redundancia certificada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BA6347] flex-shrink-0">✓</span>
                  <span className="text-slate-700">Puertas con sensores de cierre y reapetura</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BA6347] flex-shrink-0">✓</span>
                  <span className="text-slate-700">Iluminación de emergencia con autonomía 3 horas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BA6347] flex-shrink-0">✓</span>
                  <span className="text-slate-700">Teléfono de emergencia con conexión externa</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#BA6347] text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase rounded-md hover:bg-[#A8563C] transition-all duration-300"
              >
                Descargar Guía Completa DS 20297
              </button>
            </div>
          </div>
        </section>

        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* CTA Section */}
        <section id="contacto" className="py-32 bg-gradient-to-br from-[#BA6347] via-[#A8563C] to-[#BA6347] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              Evite Multas y Clausuras
            </h2>
            <p className="text-xl text-[#D4957D] leading-relaxed mb-12">
              Solicite una pre-auditoría normativa gratuita. Identificaremos no conformidades y entregaremos plan de acción en 5 días hábiles.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:ventas@grupoglobe.cl" className="bg-white text-[#BA6347] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#D4957D] hover:text-white transition-all duration-300 rounded-md">
                Solicitar Pre-Auditoría Gratis
              </a>
              <a href="tel:+56222222222" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#BA6347] transition-all duration-300 rounded-md">
                Llamar Ahora
              </a>
            </div>
            <p className="text-[#D4957D] mt-8">
              Email: <a href="mailto:ventas@grupoglobe.cl" className="text-white hover:underline">ventas@grupoglobe.cl</a> | Tel: +56 2 2222 2222
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
        title="Certificación Decreto 20297"
        downloadTitle="Guía: Decreto 20297 en Lenguaje Claro"
        ctaText="Descargar Guía"
      />
    </>
  );
}
