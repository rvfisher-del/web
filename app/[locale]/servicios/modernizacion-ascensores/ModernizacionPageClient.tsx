'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LeadCaptureModal from '@/components/LeadCaptureModal';
import ServicesHeader from '@/components/layout/ServicesHeader';

export default function ModernizacionPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white">
        <ServicesHeader />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Background Pattern (placeholder for architectural imagery) */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
            <div className="absolute inset-0 bg-[#BA6347]/10" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="mb-8">
              <a href="/servicios" className="text-sm text-[#D4957D] hover:text-white transition-colors">
                Servicios
              </a>
              <span className="text-[#D4957D] mx-2">/</span>
              <span className="text-sm text-white">Modernización de Ascensores</span>
            </div>

            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Modernización de Ascensores
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#D4957D] mb-8 leading-relaxed max-w-3xl mx-auto">
              Transforme ascensores obsoletos en sistemas modernos con estándar canadiense. Renovación técnica y estética llave en mano, sin interrumpir operaciones.
            </p>

            {/* Customer Quote */}
            <div className="max-w-2xl mx-auto mb-12 px-6 py-4 border-l-4 border-[#BA6347] bg-white/5 backdrop-blur-sm">
              <p className="text-[#D4957D] text-base leading-relaxed italic">
                "Tengo un edificio clase A con ascensores que parecen de los 80. Mis arrendatarios se quejan."
              </p>
              <p className="text-white/60 text-sm mt-2">
                — Gerente de Operaciones, Edificio Corporativo
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">18+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  EDIFICIOS MODERNIZADOS
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">40%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  REDUCCIÓN CONSUMO ENERGÉTICO
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  CERTIFICACIÓN SEC
                </div>
              </div>
            </div>
          </div>

          {/* Pulse Scroll Indicator */}
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

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* The Big Three - Content Pillars */}
        <section className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                ESTÉTICA Y RENDIMIENTO SIN INTERRUMPIR
              </span>
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Tres Dimensiones de Modernización
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Renovación integral: cabinas premium, sistemas inteligentes y componentes certificados. Estándar canadiense aplicado a edificios clase A.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* 01 - Renovación Estética de Cabinas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 border-l-4 border-[#BA6347] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-[#BA6347] font-bold">01</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Renovación Estética de Cabinas
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Paneles de acero inoxidable, iluminación LED de bajo consumo y acabados premium para edificios clase A. Diseño arquitectónico que refleja la identidad de su marca.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Paneles de acero inoxidable o acabados personalizados</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Iluminación LED con eficiencia energética</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Faenas nocturnas sin interrumpir operaciones</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: edificio clase A con ascensores a la altura.
                </p>
              </motion.div>

              {/* 02 - Actualización de Sistemas de Control */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 border-l-4 border-[#BA6347] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-[#BA6347] font-bold">02</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Actualización de Sistemas de Control
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Migración a controladores inteligentes con IoT y diagnóstico predictivo. Reducción de hasta 40% en consumo energético y monitoreo remoto 24/7.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Controladores con algoritmos de optimización</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Monitoreo IoT con alertas tempranas</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Dashboard de gestión para administradores</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: eficiencia energética y predictibilidad operativa.
                </p>
              </motion.div>

              {/* 03 - Reemplazo de Componentes Críticos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-10 border-l-4 border-[#BA6347] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-[#BA6347] font-bold">03</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Reemplazo de Componentes Críticos
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Motores, cables, poleas y sistemas de seguridad renovados con certificación SEC incluida. Garantía extendida y mantenimiento preventivo post-instalación.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Motores de última generación (bajo ruido)</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Cables y poleas certificados SEC</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Garantía 2 años + mantenimiento incluido</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: tranquilidad operativa certificada.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* Lead Magnet CTA Section */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold text-black mb-6">
              ¿Su Ascensor Necesita Modernización?
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Descargue nuestro checklist gratuito para evaluar el estado de sus ascensores y determinar si requieren actualización técnica o estética.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#BA6347] text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase rounded-md hover:bg-[#A8563C] transition-all duration-300"
            >
              Descargar Checklist Gratis
            </button>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* CTA Section */}
        <section id="contacto" className="py-32 bg-gradient-to-br from-[#BA6347] via-[#A8563C] to-[#BA6347] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              Transforme Sus Ascensores Sin Interrumpir Operaciones
            </h2>
            <p className="text-xl text-[#D4957D] leading-relaxed mb-12">
              Solicite una auditoría técnica gratuita. Evaluaremos su flota y entregaremos propuesta en 5 días hábiles.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:ventas@grupoglobe.cl" className="bg-white text-[#BA6347] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#D4957D] hover:text-white transition-all duration-300 rounded-md">
                Solicitar Auditoría Gratis
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

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modernización de Ascensores"
        downloadTitle="Checklist: ¿Su Ascensor Necesita Modernización?"
        ctaText="Descargar Checklist"
      />
    </>
  );
}
