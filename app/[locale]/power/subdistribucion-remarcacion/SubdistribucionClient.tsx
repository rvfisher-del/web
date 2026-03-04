'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function SubdistribucionClient() {
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
                Transparencia total que elimina cobros injustos
              </h1>
              
              <p className="text-[clamp(20px,2vw,28px)] font-light text-[#91A56E] mb-12 leading-relaxed max-w-4xl mx-auto">
                Asignamos consumos reales a cada operador con precisión superior al 99%
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">99%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Precisión</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">+2000</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Puntos Medición</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">&lt;1H</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Tiempo Respuesta</div>
                </div>
              </div>

              <a href="#contacto" className="bg-[#3A5B1E] text-white px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md inline-block">
                Agenda Demo Técnica
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
                La facturación por metro cuadrado genera injusticias sistemáticas
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Sin medición real por operador, los ajustes manuales conducen a errores, conflictos y desconfianza.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="bg-red-50 p-10 border-l-4 border-red-600">
                <div className="text-6xl font-bold text-red-600 mb-6">✗</div>
                <h3 className="text-2xl font-bold text-black mb-6">Modelo Tradicional (Prorrateo m²)</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>Facturación sin relación al consumo real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>Ajustes manuales propensos a error humano</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>Conflictos recurrentes con arrendatarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>Cero trazabilidad ni auditoría</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#3A5B1E]/5 p-10 border-l-4 border-[#3A5B1E]">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">✓</div>
                <h3 className="text-2xl font-bold text-[#3A5B1E] mb-6">Medición SENTRON + Powermind</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Consumo exacto por operador (precisión &gt;99%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Automatización total, sin intervención manual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Datos auditables y transparentes en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Mejora relación propietario-arrendatario</span>
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

        {/* Section 2: The Solution */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Hardware industrial Siemens + Software Power Digital
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                La combinación perfecta entre precisión alemana y análisis inteligente de datos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Hardware */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl font-bold text-[#3A5B1E] mb-6">⚙</div>
                <h3 className="text-2xl font-bold text-black mb-6">Hardware SENTRON</h3>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <h4 className="font-bold text-[#3A5B1E] mb-2">Modelo 7KT1661</h4>
                    <p className="text-sm">Medidor trifásico de alta precisión para grandes consumos</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3A5B1E] mb-2">Modelo PAC 4220</h4>
                    <p className="text-sm">Analizador de redes con monitoreo continuo de calidad energética</p>
                  </div>
                  <div className="bg-[#3A5B1E]/10 px-4 py-3 rounded mt-6">
                    <span className="text-sm font-bold text-[#3A5B1E]">Certificación IEC 61557, clase 0.5</span>
                  </div>
                </div>
              </motion.div>

              {/* Software */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl font-bold text-[#3A5B1E] mb-6">⚙</div>
                <h3 className="text-2xl font-bold text-black mb-6">Software Powermind</h3>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <h4 className="font-bold text-[#3A5B1E] mb-2">Procesamiento en Tiempo Real</h4>
                    <p className="text-sm">Lectura cada 15 minutos, consolidación automática</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3A5B1E] mb-2">Facturación Automatizada</h4>
                    <p className="text-sm">Exportación directa a sistemas ERP y contables</p>
                  </div>
                  <div className="bg-[#3A5B1E]/10 px-4 py-3 rounded mt-6">
                    <span className="text-sm font-bold text-[#3A5B1E]">Dashboards ejecutivos personalizables</span>
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

        {/* Section 3: How It Works (Flow Diagram) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                El flujo de precisión: Del consumo real a la factura exacta
              </h2>
            </div>

            {/* Flow Diagram */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-16 max-w-6xl mx-auto">
              <div className="bg-[#3A5B1E] text-white px-10 py-8 rounded-lg text-center flex-1 min-w-[220px]">
                <div className="text-5xl font-bold mb-4">→</div>
                <div className="font-bold text-xl mb-2">Consumo Real</div>
                <p className="text-sm text-white/80">Cada operador consume según su uso</p>
              </div>
              <div className="text-4xl text-[#3A5B1E]">→</div>
              <div className="bg-[#3A5B1E] text-white px-10 py-8 rounded-lg text-center flex-1 min-w-[220px]">
                <div className="text-5xl font-bold mb-4">→</div>
                <div className="font-bold text-xl mb-2">Medición SENTRON</div>
                <p className="text-sm text-white/80">Hardware Siemens captura datos precisos</p>
              </div>
              <div className="text-4xl text-[#3A5B1E]">→</div>
              <div className="bg-[#3A5B1E] text-white px-10 py-8 rounded-lg text-center flex-1 min-w-[220px]">
                <div className="text-5xl font-bold mb-4">→</div>
                <div className="font-bold text-xl mb-2">Procesamiento Powermind</div>
                <p className="text-sm text-white/80">Software consolida y analiza automáticamente</p>
              </div>
              <div className="text-4xl text-[#3A5B1E]">→</div>
              <div className="bg-[#3A5B1E] text-white px-10 py-8 rounded-lg text-center flex-1 min-w-[220px]">
                <div className="text-5xl font-bold mb-4">→</div>
                <div className="font-bold text-xl mb-2">Facturación Exacta</div>
                <p className="text-sm text-white/80">Cada operador paga lo que consumió</p>
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto">
              <p className="text-lg text-[#3A5B1E] font-bold">
                De la lectura a la factura en menos de 48 horas
              </p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 4: Benefits (3 cards) */}
        <section className="py-32 bg-gradient-to-br from-[#3A5B1E] to-[#2d4617] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
                Tres beneficios inmediatos y medibles
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-lg text-center">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">01</div>
                <h3 className="text-2xl font-bold mb-4">Consumos Reales</h3>
                <p className="text-white/90 leading-relaxed">
                  Asignamos consumos exactos a cada operador e inquilino con precisión superior al 99%
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-lg text-center">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">02</div>
                <h3 className="text-2xl font-bold mb-4">Adiós al Prorrateo</h3>
                <p className="text-white/90 leading-relaxed">
                  Eliminamos el modelo obsoleto de facturación por metro cuadrado
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-lg text-center">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">03</div>
                <h3 className="text-2xl font-bold mb-4">Relación Mejorada</h3>
                <p className="text-white/90 leading-relaxed">
                  Datos auditables y transparentes que generan confianza entre propietario y arrendatario
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 5: Tech Specs */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Especificaciones técnicas y protocolos de integración
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Hardware Specs */}
              <div className="bg-white p-8 border-l-4 border-[#3A5B1E]">
                <h3 className="text-xl font-bold text-[#3A5B1E] mb-6">Hardware SENTRON</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span><strong>Precisión:</strong> Clase 0.5 según IEC 61557</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span><strong>Rango medición:</strong> 1A a 6000A</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span><strong>Comunicación:</strong> Modbus RTU / TCP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span><strong>Frecuencia muestreo:</strong> Cada 200ms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span><strong>Certificación:</strong> CE, UL, cUL</span>
                  </li>
                </ul>
              </div>

              {/* Software Integration */}
              <div className="bg-white p-8 border-l-4 border-[#3A5B1E]">
                <h3 className="text-xl font-bold text-[#3A5B1E] mb-6">Integración Powercenter 3000</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span><strong>Protocolo:</strong> Modbus TCP/RTU nativo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span><strong>Cloud:</strong> AWS, Azure, Insights Hub</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span><strong>API:</strong> REST API para ERP/sistemas contables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span><strong>Reportería:</strong> Dashboards Grafana/Power BI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">•</span>
                    <span><strong>Retención datos:</strong> 5 años mínimo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-white px-8 py-4 rounded-lg shadow-md">
                <span className="text-lg font-bold text-slate-800">Partnership Exclusivo Siemens para SMB en Chile</span>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 6: Case Study (optional, placeholder) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Resultados reales en edificios corporativos
              </h2>
            </div>

            <div className="max-w-4xl mx-auto bg-slate-50 p-10 border-l-4 border-[#3A5B1E]">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-[#3A5B1E] mb-2">70+</div>
                  <div className="text-sm text-slate-600">Activos gestionados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#3A5B1E] mb-2">+2000</div>
                  <div className="text-sm text-slate-600">Puntos de medición activos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#3A5B1E] mb-2">15%</div>
                  <div className="text-sm text-slate-600">Reducción consumo no facturado</div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-xl font-bold text-black mb-4">Clientes de diversos sectores:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Edificios corporativos clase A y A+</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Centros comerciales y retail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Plantas industriales y logísticas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Hospitales y centros de salud</span>
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

        {/* Related Spokes */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-black mb-4">Servicios Relacionados</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
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
              Termina con los cobros injustos hoy mismo
            </h2>
            <p className="text-xl text-[#91A56E] leading-relaxed mb-12">
              Demo técnica sin costo. Te mostramos el sistema funcionando en un edificio real.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="mailto:aportilla@globepower.cl" className="bg-white text-[#3A5B1E] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#91A56E] hover:text-white transition-all duration-300 rounded-md">
                Agenda Demo Técnica
              </a>
              <a href="mailto:aportilla@globepower.cl" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#3A5B1E] transition-all duration-300 rounded-md">
                Solicitar Propuesta
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
