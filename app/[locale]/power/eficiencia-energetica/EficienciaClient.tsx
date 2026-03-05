'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function EficienciaClient() {
  const pathname = usePathname();

  const getHomeLink = () => {
    if (pathname.includes('/servicios')) return '/servicios';
    if (pathname.includes('/power')) return '/power';
    return '/';
  };

  const homeLink = getHomeLink();

  const handleInicioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === homeLink) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-white">
        {/* Glass Pill Header */}
        <header className="fixed top-0 left-1/2 -translate-x-1/2 max-w-7xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 w-[95%] mt-6" style={{ zIndex: 9999 }}>
          <div className="px-14 py-4 flex justify-between items-center w-full h-32">
            <a href="/" className="flex-shrink-0 py-2 bg-transparent flex items-center pl-12">
              <img
                src="/images/logos/power-logo-clean.png"
                alt="Globe Power - Gestión Energética Corporativa Chile"
                height={96}
                width="auto"
                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </a>

            <nav className="flex items-center gap-4 md:gap-6 pr-12">
              <a href={homeLink} onClick={handleInicioClick} className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300">
                INICIO
              </a>
              <a href="#contacto" className="bg-[#3A5B1E]/80 backdrop-blur-sm border border-white/30 text-white px-4 md:px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#3A5B1E] transition-all duration-300">
                CONTACTO
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[#3A5B1E]/10" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Back Link */}
            <div className="mb-8">
              <a href="/power" className="inline-flex items-center gap-2 text-[#91A56E] hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-bold tracking-wider uppercase">Volver a Globe Power</span>
              </a>
            </div>

            <div className="text-center">
              <h1 className="text-[clamp(40px,5vw,72px)] font-black leading-[1.1] text-white mb-8" style={{ letterSpacing: '-0.05em' }}>
                Reduce consumo 15% con gestión basada en datos
              </h1>
              
              <p className="text-[clamp(20px,2vw,28px)] font-light text-[#91A56E] mb-12 leading-relaxed max-w-4xl mx-auto">
                De gasto ciego a activo estratégico con telemetría en tiempo real
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">15%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Reducción Promedio</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">20%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Ahorro Mantenimiento</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">ISO 50001</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Estándar Internacional</div>
                </div>
              </div>

              <a href="#contacto" className="bg-[#3A5B1E] text-white px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md inline-block">
                Solicitar Auditoría Energética
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <svg className="w-8 h-8 text-white animate-bounce" style={{ animationDuration: '2000ms' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 1: The Opportunity */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Activos con más de 300 kW están perdiendo oportunidades millonarias
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                En régimen regulado, pierdes la ventaja de negociar contratos competitivos en el mercado libre.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="bg-slate-50 p-10 border-l-4 border-red-600">
                <div className="text-6xl font-bold text-red-600 mb-6">✗</div>
                <h3 className="text-2xl font-bold text-black mb-4">Régimen Regulado</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">•</span>
                    <span>Tarifas fijas sin negociación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">•</span>
                    <span>Consumos no optimizados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">•</span>
                    <span>Cero visibilidad de eficiencia</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#3A5B1E]/5 p-10 border-l-4 border-[#3A5B1E]">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">✓</div>
                <h3 className="text-2xl font-bold text-[#3A5B1E] mb-4">Mercado Libre + Eficiencia</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span>Contratos personalizados competitivos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span>Telemetría activa y control total</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span>Reducción de 15% en consumo promedio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 2: Our Approach */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Nuestro enfoque: Medición → Análisis → Optimización continua
              </h2>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
              <div className="bg-[#3A5B1E] text-white px-10 py-8 rounded-lg text-center flex-1 min-w-[250px]">
                <div className="text-5xl font-bold mb-4">→</div>
                <div className="font-bold text-xl mb-2">Telemetría en Tiempo Real</div>
                <p className="text-sm text-white/80">Medición continua con hardware Siemens SENTRON</p>
              </div>
              <div className="text-4xl text-[#3A5B1E]">→</div>
              <div className="bg-[#3A5B1E] text-white px-10 py-8 rounded-lg text-center flex-1 min-w-[250px]">
                <div className="text-5xl font-bold mb-4">→</div>
                <div className="font-bold text-xl mb-2">Análisis Predictivo</div>
                <p className="text-sm text-white/80">AI-powered insights para decisiones inteligentes</p>
              </div>
              <div className="text-4xl text-[#3A5B1E]">→</div>
              <div className="bg-[#3A5B1E] text-white px-10 py-8 rounded-lg text-center flex-1 min-w-[250px]">
                <div className="text-5xl font-bold mb-4">→</div>
                <div className="font-bold text-xl mb-2">Optimización Continua</div>
                <p className="text-sm text-white/80">Mejoras permanentes en eficiencia operativa</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 3: Services (3 cards) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                SERVICIOS INTEGRALES
              </span>
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Tres pilares para transformar tu gestión energética
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">01</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Auditorías Energéticas
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Análisis exhaustivo de consumo actual, identificación de oportunidades de mejora y proyección de ahorros.
                </p>
                <div className="bg-[#3A5B1E]/10 px-4 py-3 rounded">
                  <span className="text-sm font-bold text-[#3A5B1E]">Diagnóstico completo en 2 semanas</span>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">02</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  SGE (Sistema Gestión Energética)
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Implementación ISO 50001 para optimización continua y cumplimiento normativo internacional.
                </p>
                <div className="bg-[#3A5B1E]/10 px-4 py-3 rounded">
                  <span className="text-sm font-bold text-[#3A5B1E]">Certificación ISO 50001</span>
                </div>
              </motion.div>

              {/* Service 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">03</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Reportes Ley Eficiencia Energética
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Cumplimiento obligatorio anual de reportería para grandes consumidores según normativa chilena.
                </p>
                <div className="bg-[#3A5B1E]/10 px-4 py-3 rounded">
                  <span className="text-sm font-bold text-[#3A5B1E]">Compliance garantizado</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 4: Results */}
        <section className="py-32 bg-gradient-to-br from-[#3A5B1E] to-[#2d4617] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
                Resultados medibles en tu operación
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg text-center">
                <div className="text-5xl font-black text-white mb-3">15%</div>
                <div className="text-sm uppercase tracking-wider text-[#91A56E]">Reducción Consumo</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg text-center">
                <div className="text-5xl font-black text-white mb-3">20%</div>
                <div className="text-sm uppercase tracking-wider text-[#91A56E]">Ahorro Presupuesto Mantención</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg text-center">
                <div className="text-5xl font-black text-white mb-3">1H</div>
                <div className="text-sm uppercase tracking-wider text-[#91A56E]">Tiempo Respuesta</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg text-center">
                <div className="text-5xl font-black text-white mb-3">99%</div>
                <div className="text-sm uppercase tracking-wider text-[#91A56E]">Uptime Garantizado</div>
              </div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Beneficios Adicionales</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-[#91A56E] text-2xl flex-shrink-0">✓</span>
                  <span>Acceso a contratos de suministro competitivos en mercado libre</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-[#91A56E] text-2xl flex-shrink-0">✓</span>
                  <span>Cumplimiento normativo ISO 50001 y Ley Eficiencia Energética</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-[#91A56E] text-2xl flex-shrink-0">✓</span>
                  <span>Detección temprana de anomalías y fallas eléctricas</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="text-[#91A56E] text-2xl flex-shrink-0">✓</span>
                  <span>Reportería automatizada y dashboards ejecutivos en tiempo real</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 5: Compliance Path (ISO 50001 Roadmap) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Ruta hacia ISO 50001: Estándar internacional de gestión energética
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Te acompañamos en cada etapa del proceso de certificación
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {/* Phase 1 */}
              <div className="bg-slate-50 p-6 border-t-4 border-[#3A5B1E] rounded-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-3">01</div>
                <h3 className="font-bold text-black mb-2 text-sm">Diagnóstico Inicial</h3>
                <p className="text-xs text-slate-600">
                  Auditoría energética y línea base
                </p>
              </div>

              {/* Phase 2 */}
              <div className="bg-slate-50 p-6 border-t-4 border-[#3A5B1E] rounded-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-3">02</div>
                <h3 className="font-bold text-black mb-2 text-sm">Implementación SGE</h3>
                <p className="text-xs text-slate-600">
                  Políticas, procedimientos y estructura
                </p>
              </div>

              {/* Phase 3 */}
              <div className="bg-slate-50 p-6 border-t-4 border-[#3A5B1E] rounded-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-3">03</div>
                <h3 className="font-bold text-black mb-2 text-sm">Capacitación Equipos</h3>
                <p className="text-xs text-slate-600">
                  Formación técnica y operativa
                </p>
              </div>

              {/* Phase 4 */}
              <div className="bg-slate-50 p-6 border-t-4 border-[#3A5B1E] rounded-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-3">04</div>
                <h3 className="font-bold text-black mb-2 text-sm">Auditoría Interna</h3>
                <p className="text-xs text-slate-600">
                  Verificación y ajustes previos
                </p>
              </div>

              {/* Phase 5 */}
              <div className="bg-slate-50 p-6 border-t-4 border-[#3A5B1E] rounded-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-3">05</div>
                <h3 className="font-bold text-black mb-2 text-sm">Certificación</h3>
                <p className="text-xs text-slate-600">
                  Auditoría externa y obtención ISO 50001
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-[#3A5B1E] font-bold">
                Plazo estimado: 6-12 meses según complejidad del activo
              </p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Related Spokes */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-black mb-4">Servicios Relacionados</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/power/subdistribucion-remarcacion" className="bg-white p-6 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3 text-[#3A5B1E] font-bold">01</div>
                <h4 className="font-bold text-black mb-2">Subdistribución y Remarcación</h4>
                <p className="text-sm text-slate-600">Transparencia total en medición</p>
              </a>
              <a href="/power/software-reporteria" className="bg-white p-6 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3 text-[#3A5B1E] font-bold">03</div>
                <h4 className="font-bold text-black mb-2">Software y Reportería</h4>
                <p className="text-sm text-slate-600">Telemetría en tiempo real</p>
              </a>
              <a href="/power/mantenimiento-electrico" className="bg-white p-6 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3 text-[#3A5B1E] font-bold">04</div>
                <h4 className="font-bold text-black mb-2">Mantenimiento Eléctrico</h4>
                <p className="text-sm text-slate-600">Prevención predictiva 24/7</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="py-32 bg-gradient-to-br from-[#3A5B1E] via-[#2d4617] to-[#3A5B1E] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              Comienza tu transformación energética hoy
            </h2>
            <p className="text-xl text-[#91A56E] leading-relaxed mb-12">
              Auditoría energética inicial sin costo. Conoce tu potencial de ahorro en 2 semanas.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="mailto:aportilla@globepower.cl" className="bg-white text-[#3A5B1E] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#91A56E] hover:text-white transition-all duration-300 rounded-md">
                Solicitar Auditoría Energética
              </a>
              <a href="mailto:aportilla@globepower.cl" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#3A5B1E] transition-all duration-300 rounded-md">
                Ver Casos de Éxito
              </a>
            </div>
            
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/80 mb-4">Contacto:</p>
              <p className="text-lg font-bold text-white mb-2">Álvaro Portilla - Gerente Globe Power</p>
              <p className="text-white/80">
                <a href="mailto:aportilla@globepower.cl" className="hover:text-white transition-colors">aportilla@globepower.cl</a> | 
                <a href="tel:+56957809131" className="hover:text-white transition-colors ml-2">+56 9 5780 9131</a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <img
                  src="/images/logos/power-logo-clean.png"
                  alt="Globe Power"
                  className="h-[60px] w-auto mb-4 opacity-80"
                />
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8F8B84] font-bold mt-4">
                  Una empresa de <a href="/" className="hover:text-white transition-colors">Grupo Globe</a>.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#91A56E]">Servicios</h4>
                <ul className="space-y-2">
                  <li><a href="/power/subdistribucion-remarcacion" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Subdistribución</a></li>
                  <li><a href="/power/eficiencia-energetica" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Eficiencia Energética</a></li>
                  <li><a href="/power/software-reporteria" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Software & Reportería</a></li>
                  <li><a href="/power/mantenimiento-electrico" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Mantenimiento</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#91A56E]">Grupo Globe</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Inicio</a></li>
                  <li><a href="/power" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Globe Power</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#91A56E]">Contacto</h4>
                <ul className="space-y-2">
                  <li><a href="mailto:aportilla@globepower.cl" className="text-[#8F8B84] hover:text-white transition-colors text-sm">aportilla@globepower.cl</a></li>
                  <li><a href="tel:+56957809131" className="text-[#8F8B84] hover:text-white transition-colors text-sm">+56 9 5780 9131</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-[#8F8B84] text-center">
                © 2026 Grupo Globe. Gestión energética corporativa en Chile.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
