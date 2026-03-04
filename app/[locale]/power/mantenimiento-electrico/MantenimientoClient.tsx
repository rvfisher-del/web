'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function MantenimientoClient() {
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
        <header className="fixed top-6 left-1/2 -translate-x-1/2 max-w-7xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 w-[95%]" style={{ zIndex: 9999 }}>
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
        <section className="relative min-h-[90vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
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
                Mantenimiento 4.0: prevención predictiva, no reparación reactiva
              </h1>
              
              <p className="text-[clamp(20px,2vw,28px)] font-light text-[#91A56E] mb-12 leading-relaxed max-w-4xl mx-auto">
                Anticipamos fallas antes de que ocurran
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">20%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Ahorro Presupuesto</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">&lt;4H</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Respuesta Emergencias</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">24/7</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Soporte Disponible</div>
                </div>
              </div>

              <a href="#contacto" className="bg-[#3A5B1E] text-white px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md inline-block">
                Cotizar Contrato Mantención
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

        {/* Section 1: The Problem */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                El mantenimiento correctivo cuesta 3 veces más que el preventivo
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Reparar al romper genera interrupciones operativas, pérdidas financieras y riesgos de seguridad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="bg-red-50 p-10 border-l-4 border-red-600">
                <div className="text-6xl mb-6">⚠️</div>
                <h3 className="text-2xl font-bold text-black mb-6">Modelo Reactivo (Tradicional)</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>Fallas imprevistas detienen operaciones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>Costos 3x superiores en reparaciones de emergencia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>Riesgos de seguridad eléctrica no detectados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>Cero visibilidad del estado de la infraestructura</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#3A5B1E]/5 p-10 border-l-4 border-[#3A5B1E]">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-[#3A5B1E] mb-6">Mantenimiento 4.0 (Predictivo)</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Telemetría activa anticipa fallas antes de que ocurran</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Ahorro 20% en presupuesto anual de mantenimiento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Prevención basada en datos, no en calendario arbitrario</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>99% uptime garantizado, cero incidentes de seguridad</span>
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

        {/* Section 2: Our Model */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Nuestro modelo: Telemetría + Datos = Mantenimiento predictivo
              </h2>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
              <div className="bg-[#3A5B1E] text-white px-10 py-8 rounded-lg text-center flex-1 min-w-[250px]">
                <div className="text-5xl mb-4">📊</div>
                <div className="font-bold text-xl mb-2">Telemetría Activa</div>
                <p className="text-sm text-white/80">Monitoreo continuo de voltaje, corriente, temperatura</p>
              </div>
              <div className="text-4xl text-[#3A5B1E]">+</div>
              <div className="bg-[#3A5B1E] text-white px-10 py-8 rounded-lg text-center flex-1 min-w-[250px]">
                <div className="text-5xl mb-4">🤖</div>
                <div className="font-bold text-xl mb-2">Decisiones Basadas en Datos</div>
                <p className="text-sm text-white/80">AI identifica patrones anómalos y anticipa fallas</p>
              </div>
              <div className="text-4xl text-[#3A5B1E]">=</div>
              <div className="bg-[#3A5B1E] text-white px-10 py-8 rounded-lg text-center flex-1 min-w-[250px]">
                <div className="text-5xl mb-4">⚡</div>
                <div className="font-bold text-xl mb-2">Mantenimiento Predictivo</div>
                <p className="text-sm text-white/80">Intervención justo a tiempo, antes del problema</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 3: Services (3 tiers) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                TRES NIVELES DE SERVICIO
              </span>
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Preventivo, Predictivo y Correctivo: Cobertura total 24/7
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Tier 1: Preventivo */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-6">🛡️</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Mantenimiento Preventivo
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Inspecciones programadas según normativa SEC. Termografía infrarroja, medición resistencia de aislación, pruebas dieléctricas.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Inspecciones trimestrales/semestrales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Detección temprana de anomalías</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Reportes con evidencia fotográfica</span>
                  </div>
                </div>
              </motion.div>

              {/* Tier 2: Predictivo */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-6">🔮</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Mantenimiento Predictivo
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Análisis continuo de datos de telemetría. Machine learning identifica patrones y anticipa fallas con semanas de anticipación.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Monitoreo 24/7 con IA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Alertas automáticas pre-falla</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Intervención programada, no reactiva</span>
                  </div>
                </div>
              </motion.div>

              {/* Tier 3: Correctivo */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-6">🚨</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Correctivo 24/7
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Respuesta inmediata ante emergencias eléctricas. Equipo técnico certificado SEC disponible las 24 horas, todos los días del año.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Respuesta &lt;4H zonas remotas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Respuesta &lt;2H zonas urbanas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Stock permanente de repuestos críticos</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 4: What We Maintain */}
        <section className="py-32 bg-gradient-to-br from-[#3A5B1E] to-[#2d4617] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
                Cobertura completa de infraestructura eléctrica crítica
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="font-bold text-lg mb-2">Salas Eléctricas</h3>
                <p className="text-sm text-white/80">Tableros generales, CCM, barras</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-lg mb-2">Transformadores</h3>
                <p className="text-sm text-white/80">Secos y en aceite, hasta 2500 kVA</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl mb-3">🔌</div>
                <h3 className="font-bold text-lg mb-2">Tableros MT/BT</h3>
                <p className="text-sm text-white/80">Media y baja tensión, protecciones</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl mb-3">🔋</div>
                <h3 className="font-bold text-lg mb-2">Generadores</h3>
                <p className="text-sm text-white/80">Grupos electrógenos, UPS</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-bold text-lg mb-2">Iluminación</h3>
                <p className="text-sm text-white/80">Sistemas normales y emergencia</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-bold text-lg mb-2">Puesta a Tierra</h3>
                <p className="text-sm text-white/80">Mediciones, correcciones, SPT</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 5: Response Times */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Tiempos de respuesta que minimizan impacto operativo
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-10 border-t-4 border-[#3A5B1E] rounded-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-4">&lt;4H</div>
                <h3 className="text-lg font-bold text-black mb-3">Emergencias Remotas</h3>
                <p className="text-sm text-slate-600">
                  Activos fuera de zonas urbanas, regiones o áreas de difícil acceso
                </p>
              </div>

              <div className="bg-white p-10 border-t-4 border-[#3A5B1E] rounded-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-4">&lt;2H</div>
                <h3 className="text-lg font-bold text-black mb-3">Emergencias Urbanas</h3>
                <p className="text-sm text-slate-600">
                  Edificios en Santiago, Valparaíso, Concepción y principales ciudades
                </p>
              </div>

              <div className="bg-white p-10 border-t-4 border-[#3A5B1E] rounded-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-4">1H</div>
                <h3 className="text-lg font-bold text-black mb-3">Consultas Técnicas</h3>
                <p className="text-sm text-slate-600">
                  Respuesta a dudas, análisis de alertas y soporte remoto especializado
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-[#3A5B1E] font-bold">
                Equipo técnico certificado SEC disponible 24/7/365
              </p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 6: Results */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Resultados medibles en tu operación
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-8 bg-slate-50 rounded-lg">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">20%</div>
                <div className="text-sm uppercase tracking-wider text-slate-600 mb-4">Ahorro Presupuesto</div>
                <p className="text-xs text-slate-500">Reducción en costos anuales de mantenimiento vs. modelo reactivo</p>
              </div>

              <div className="text-center p-8 bg-slate-50 rounded-lg">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">99%</div>
                <div className="text-sm uppercase tracking-wider text-slate-600 mb-4">Uptime Garantizado</div>
                <p className="text-xs text-slate-500">Disponibilidad operativa continua sin interrupciones no programadas</p>
              </div>

              <div className="text-center p-8 bg-slate-50 rounded-lg">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">0</div>
                <div className="text-sm uppercase tracking-wider text-slate-600 mb-4">Incidentes Seguridad</div>
                <p className="text-xs text-slate-500">Cero accidentes eléctricos en activos gestionados (5 años)</p>
              </div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto bg-slate-50 p-10 border-l-4 border-[#3A5B1E]">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">Beneficios Adicionales</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#3A5B1E] text-2xl flex-shrink-0">✓</span>
                  <span>Cumplimiento normativo SEC actualizado automáticamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3A5B1E] text-2xl flex-shrink-0">✓</span>
                  <span>Reportería ejecutiva mensual con KPIs y tendencias</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3A5B1E] text-2xl flex-shrink-0">✓</span>
                  <span>Stock permanente de repuestos críticos sin costo adicional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3A5B1E] text-2xl flex-shrink-0">✓</span>
                  <span>Historial digital completo de intervenciones y evidencia</span>
                </li>
              </ul>
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
              <a href="/power/eficiencia-energetica" className="bg-white p-6 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3 text-[#3A5B1E] font-bold">02</div>
                <h4 className="font-bold text-black mb-2">Eficiencia Energética</h4>
                <p className="text-sm text-slate-600">Reduce 15% tu consumo con gestión basada en datos</p>
              </a>
              <a href="/power/software-reporteria" className="bg-white p-6 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3 text-[#3A5B1E] font-bold">03</div>
                <h4 className="font-bold text-black mb-2">Software y Reportería</h4>
                <p className="text-sm text-slate-600">Telemetría en tiempo real</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="py-32 bg-gradient-to-br from-[#3A5B1E] via-[#2d4617] to-[#3A5B1E] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              Protege tu inversión con mantenimiento predictivo
            </h2>
            <p className="text-xl text-[#91A56E] leading-relaxed mb-12">
              Cotización sin costo. Te mostramos el ahorro proyectado en tu activo específico.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="mailto:aportilla@globepower.cl" className="bg-white text-[#3A5B1E] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#91A56E] hover:text-white transition-all duration-300 rounded-md">
                Cotizar Contrato Mantención
              </a>
              <a href="mailto:aportilla@globepower.cl" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#3A5B1E] transition-all duration-300 rounded-md">
                Solicitar Auditoría Técnica
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
