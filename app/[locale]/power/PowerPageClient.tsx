'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PowerPageClient() {
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
        {/* Power-Specific Glass Pill Header */}
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
              <a href="#ecosistema" className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300">
                ECOSISTEMA
              </a>
              <a href="mailto:talento@grupoglobe.cl" className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300 relative group whitespace-nowrap">
                TRABAJA CON NOSOTROS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3A5B1E] group-hover:w-full transition-all duration-300" />
              </a>
              {/* NEW: Sticky Header CTA */}
              <a href="#contacto" className="bg-[#3A5B1E]/80 backdrop-blur-sm border border-white/30 text-white px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#3A5B1E] transition-all duration-300">
                AGENDA UNA CONSULTA
              </a>
            </nav>
          </div>
        </header>

        {/* SECTION 1: Hero Section with Video Background */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label="Gestión energética corporativa: sistemas eléctricos, medición industrial y telemetría en tiempo real"
              title="Globe Power - Gestión Energética en Acción"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src="https://kfli3thlaotlfeup.public.blob.vercel-storage.com/Video_Creation_Feedback_and_Generation.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
            <div className="absolute inset-0 bg-[#3A5B1E]/10" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Transformamos la energía en un recurso estratégico de tu activo.
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#91A56E] mb-8 leading-relaxed max-w-3xl mx-auto">
              Gestión operativa, tecnológica y sostenible con estándar internacional.
            </p>
            
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Cuidamos tu energía, todos los días.
            </p>

            {/* CTA 1: Hero Primary + Secondary */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a href="#contacto" className="bg-[#3A5B1E] text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md">
                Agenda una Consultoría Técnica
              </a>
              <a href="#ecosistema" className="bg-transparent border-2 border-white text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#3A5B1E] transition-all duration-300 rounded-md">
                Ver la Solución
              </a>
            </div>
            <p className="text-sm text-white/60 mb-16">Evaluación sin costo — Visita técnica incluida</p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                <div className="text-3xl font-black text-white mb-2">+70</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">ACTIVOS GESTIONADOS</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                <div className="text-3xl font-black text-white mb-2">99%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">UPTIME CONTINUO</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                <div className="text-3xl font-black text-white mb-2">15%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">REDUCCIÓN CONSUMO</div>
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

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 2: The Problem */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Los activos operan con modelos obsoletos y riesgos invisibles
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-50 p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-4">01</div>
                <h3 className="text-xl font-bold text-black mb-4">Cobros Ineficientes</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  La facturación por metro cuadrado, sin medición real por operador, ajustes manuales, errores e injusticias.
                </p>
              </div>

              <div className="bg-slate-50 p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-4">02</div>
                <h3 className="text-xl font-bold text-black mb-4">Falta de Control</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sin telemetría en tiempo real, los costos operativos aumentan por consumos anómalos no detectados.
                </p>
              </div>

              <div className="bg-slate-50 p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-4">03</div>
                <h3 className="text-xl font-bold text-black mb-4">Oportunidades Perdidas</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Activos con más de 300 kW de consumo permanecen en régimen regulado, perdiendo la ventaja de negociar contratos competitivos.
                </p>
              </div>

              <div className="bg-slate-50 p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-4">04</div>
                <h3 className="text-xl font-bold text-black mb-4">Mantenimientos Correctivos</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reparar al romper es mucho más caro a largo plazo que el preventivo.
                </p>
              </div>
            </div>

            {/* CTA 2: After Problem Section */}
            <div className="text-center mt-16 mb-12">
              <h3 className="text-2xl font-bold text-black mb-6">Transformemos estos riesgos en oportunidades</h3>
              <a href="#ecosistema" className="inline-block bg-black text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#3A5B1E] transition-all duration-300 rounded-md">
                Ver la Solución
              </a>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 3: Four Pillars (with links to spokes) */}
        <section id="ecosistema" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                ARQUITECTURA COMPLETA
              </span>
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Un ecosistema integral bajo un solo responsable
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Pillar 1: Subdistribución y Remarcación */}
              <a 
                href="/power/subdistribucion-remarcacion" 
                className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 text-[#3A5B1E] font-bold">01</div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#3A5B1E] transition-colors">
                  Subdistribución y Remarcación
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Transparencia absoluta en la medición. Precisión &gt;99% con hardware Siemens SENTRON.
                </p>
                <span className="text-[#3A5B1E] text-sm font-bold group-hover:underline">
                  Conoce más →
                </span>
              </a>

              {/* Pillar 2: Eficiencia Energética */}
              <a 
                href="/power/eficiencia-energetica" 
                className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 text-[#3A5B1E] font-bold">02</div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#3A5B1E] transition-colors">
                  Eficiencia Energética
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Optimización alineada a normativas internacionales. ISO 50001, auditorías, SGE.
                </p>
                <span className="text-[#3A5B1E] text-sm font-bold group-hover:underline">
                  Conoce más →
                </span>
              </a>

              {/* Pillar 3: Software y Reportería */}
              <a 
                href="/power/software-reporteria" 
                className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 text-[#3A5B1E] font-bold">03</div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#3A5B1E] transition-colors">
                  Software y Reportería
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Telemetría y análisis en tiempo real. Power Digital, dashboards, AI insights.
                </p>
                <span className="text-[#3A5B1E] text-sm font-bold group-hover:underline">
                  Conoce más →
                </span>
              </a>

              {/* Pillar 4: Mantenimiento Eléctrico */}
              <a 
                href="/power/mantenimiento-electrico" 
                className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 text-[#3A5B1E] font-bold">04</div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#3A5B1E] transition-colors">
                  Mantenimiento Eléctrico
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Continuidad operativa preventiva y correctiva 24/7. Mantenimiento 4.0 predictivo.
                </p>
                <span className="text-[#3A5B1E] text-sm font-bold group-hover:underline">
                  Conoce más →
                </span>
              </a>
            </div>

            {/* CTA 3: After Ecosystem */}
            <div className="text-center mt-16 mb-12">
              <h3 className="text-2xl font-bold text-black mb-6">¿Cómo se integra esto en tu operación?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contacto" className="inline-block bg-[#3A5B1E] text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md">
                  Hablar con un Especialista en Integración
                </a>
                <a href="#tecnologia" className="inline-block bg-transparent border-2 border-black text-black px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-all duration-300 rounded-md">
                  Ver Tecnología
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 4: Technology (Siemens Partnership) */}
        <section id="tecnologia" className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                ALIANZA EXCLUSIVA
              </span>
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Rigor industrial y tecnológico en alianza exclusiva con Siemens
              </h2>
              <div className="flex justify-center mb-8">
                <div className="bg-white px-8 py-4 rounded-lg shadow-lg border-2 border-[#3A5B1E]">
                  <span className="text-2xl font-black text-slate-800">SIEMENS PARTNER</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Hardware de Precisión */}
              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-6">Hardware de Precisión</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">SENTRON PAC 4220 & 7KT1661</h4>
                    <p className="text-slate-600 text-sm">Precisión &gt;99% — Medición industrial en cada punto</p>
                  </div>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span>Medición trifásica de alta precisión</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span>Registro de consumo, potencia, factor de potencia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span>Conectividad Modbus TCP/RTU</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Software y Cloud */}
              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-6">Software y Cloud</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Power Digital + Powercenter 3000</h4>
                    <p className="text-slate-600 text-sm">Análisis predictivo, gestión en tiempo real, reportería avanzada</p>
                  </div>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span>Dashboards en tiempo real</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span>AI para detección temprana de anomalías</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span>Integración AWS, Azure, Insights Hub</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* EMS + BMS Integration */}
              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] rounded-lg md:col-span-2">
                <h3 className="text-2xl font-bold text-black mb-6">Integración EMS + BMS</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">EMS (Energy Management System)</h4>
                    <p className="text-slate-600 text-sm">Analiza y optimiza consumo energético</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">BMS (Building Management System)</h4>
                    <p className="text-slate-600 text-sm">Ejecuta y automatiza infraestructura edilicia</p>
                  </div>
                </div>
                <div className="mt-6 p-6 bg-slate-50 rounded-lg">
                  <p className="text-black font-bold mb-2">Resultado:</p>
                  <p className="text-slate-600 text-sm">Gestor energético integrado. Eficiencia + mejora continua + cumplimiento ISO 50.001</p>
                </div>
              </div>
            </div>

            {/* CTA 4: After Technology */}
            <div className="text-center mt-16 mb-12">
              <h3 className="text-2xl font-bold text-black mb-6">Ve el sistema en acción</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contacto" className="inline-block bg-[#3A5B1E] text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md">
                  Solicita una Demo Técnica
                </a>
                <a href="mailto:aportilla@globepower.cl" className="inline-block bg-transparent border-2 border-black text-black px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-all duration-300 rounded-md">
                  Descargar Especificaciones Técnicas
                </a>
              </div>
              <p className="text-sm text-slate-600 mt-4">Presentación personalizada — 30 minutos</p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 5: Transparency (Billing) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Transparencia total que elimina cobros injustos y fricciones
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Flow Diagram */}
              <div className="grid md:grid-cols-4 gap-4 mb-12">
                <div className="text-center p-6 bg-slate-50 rounded-lg border-2 border-[#3A5B1E]">
                  <div className="text-4xl font-bold text-[#3A5B1E] mb-3">1</div>
                  <h4 className="font-bold text-black mb-2">Consumo Real</h4>
                  <p className="text-xs text-slate-600">Medición en tiempo real</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-lg border-2 border-[#3A5B1E]">
                  <div className="text-4xl font-bold text-[#3A5B1E] mb-3">2</div>
                  <h4 className="font-bold text-black mb-2">Medición SENTRON</h4>
                  <p className="text-xs text-slate-600">Precisión &gt;99%</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-lg border-2 border-[#3A5B1E]">
                  <div className="text-4xl font-bold text-[#3A5B1E] mb-3">3</div>
                  <h4 className="font-bold text-black mb-2">Procesamiento Powermind</h4>
                  <p className="text-xs text-slate-600">Cálculo exacto</p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-lg border-2 border-[#3A5B1E]">
                  <div className="text-4xl font-bold text-[#3A5B1E] mb-3">4</div>
                  <h4 className="font-bold text-black mb-2">Facturación Exacta</h4>
                  <p className="text-xs text-slate-600">Auditable y transparente</p>
                </div>
              </div>

              {/* 3 Benefits */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">✓</div>
                  <p className="font-bold text-black mb-2">Consumos Reales</p>
                  <p className="text-sm text-slate-600">Asignamos consumos reales a cada operador e inquilino</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">✓</div>
                  <p className="font-bold text-black mb-2">Sin Prorrateo</p>
                  <p className="text-sm text-slate-600">Eliminamos el modelo de prorrateo por metro cuadrado</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">✓</div>
                  <p className="font-bold text-black mb-2">Datos Auditables</p>
                  <p className="text-sm text-slate-600">Mejoramos la relación propietario-arrendatario con transparencia total</p>
                </div>
              </div>
            </div>

            {/* CTA 5: After Transparency */}
            <div className="text-center mt-16 mb-12">
              <h3 className="text-2xl font-bold text-black mb-6">¿Cuánto estás perdiendo con el modelo actual?</h3>
              <a href="#contacto" className="inline-block bg-black text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#3A5B1E] transition-all duration-300 rounded-md">
                Solicita una Auditoría de Facturación Energética
              </a>
              <p className="text-sm text-slate-600 mt-4">Análisis gratuito — Identifica oportunidades en 48 horas</p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 6: Maintenance 4.0 */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                El mantenimiento 4.0 es gestión de riesgos y continuidad operativa
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                El mantenimiento ya no es una simple operación; es el pilar de la seguridad eléctrica.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-black mb-4">Telemetría Activa</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Anticipamos fallas antes de que ocurran mediante monitoreo continuo y alertas predictivas.
                </p>
              </div>

              <div className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-black mb-4">Decisiones Basadas en Datos</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  De reactivo a predictivo. Los datos históricos y en tiempo real guían las intervenciones.
                </p>
              </div>

              <div className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-black mb-4">Eficiencia Presupuestaria</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Realizamos los mantenimientos que los datos demandan, generando ahorro de 20% en presupuesto.
                </p>
              </div>
            </div>

            {/* CTA 6: After Maintenance 4.0 */}
            <div className="text-center mt-16 mb-12">
              <h3 className="text-2xl font-bold text-black mb-6">¿Cuál es el nivel de riesgo de tu infraestructura eléctrica?</h3>
              <a href="#contacto" className="inline-block bg-[#3A5B1E] text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md">
                Solicita una Evaluación de Riesgo
              </a>
              <p className="text-sm text-slate-600 mt-4">Inspección termográfica incluida — Sin costo</p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 7: Business Model */}
        <section className="py-32 bg-gradient-to-br from-[#3A5B1E] to-[#2d4617] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-6" style={{ letterSpacing: '-0.05em' }}>
                Transformamos un gasto ciego en una nueva línea de ingresos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#91A56E] mb-4">01</div>
                <h3 className="text-xl font-bold mb-3">Comercialización Energética</h3>
                <p className="text-white/80 text-sm">Comercializamos la energía de la mano de nuestros clientes, optimizando contratos y aprovechando oportunidades de mercado.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#91A56E] mb-4">02</div>
                <h3 className="text-xl font-bold mb-3">Financiamiento de Equipamiento</h3>
                <p className="text-white/80 text-sm">Financiamos el equipamiento y asumimos la gestión del facility eléctrico, liberando tu capital para tu core business.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#91A56E] mb-4">03</div>
                <h3 className="text-xl font-bold mb-3">Ingresos Recuperados</h3>
                <p className="text-white/80 text-sm">Generamos ingresos recuperados, reducimos costos operativos y liberamos flujo de caja para inversiones estratégicas.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#91A56E] mb-4">04</div>
                <h3 className="text-xl font-bold mb-3">Beneficios Tributarios</h3>
                <p className="text-white/80 text-sm">Beneficios tributarios y comerciales directos para el propietario del activo, maximizando el retorno de inversión.</p>
              </div>
            </div>

            {/* CTA 7: After Business Model */}
            <div className="text-center mt-16 mb-12">
              <h3 className="text-2xl font-bold mb-6">¿Cuánto podrías recuperar con este modelo?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contacto" className="inline-block bg-white text-[#3A5B1E] px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#91A56E] hover:text-white transition-all duration-300 rounded-md">
                  Calcula tu Potencial de Ahorro
                </a>
                <a href="mailto:aportilla@globepower.cl" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#3A5B1E] transition-all duration-300 rounded-md">
                  Ver Caso Financiero Real
                </a>
              </div>
              <p className="text-sm text-white/60 mt-4">Respuesta en 24 horas — Proyección personalizada</p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 8: Scale */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Estandarización y control absoluto para más de 70 activos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
              <div className="text-center p-12 bg-slate-50 rounded-lg border-t-4 border-[#3A5B1E]">
                <div className="text-7xl font-black text-[#3A5B1E] mb-4">+70</div>
                <p className="text-lg font-bold text-black">Activos Gestionados</p>
                <p className="text-sm text-slate-600 mt-2">De distintas industrias</p>
              </div>
              <div className="text-center p-12 bg-slate-50 rounded-lg border-t-4 border-[#3A5B1E]">
                <div className="text-7xl font-black text-[#3A5B1E] mb-4">+2000</div>
                <p className="text-lg font-bold text-black">Puntos de Medición</p>
                <p className="text-sm text-slate-600 mt-2">Por activo en promedio</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 border-l-4 border-[#3A5B1E]">
                <h3 className="text-xl font-bold text-black mb-4">Centralización Nacional</h3>
                <p className="text-slate-600 text-sm">Centralización total del consumo energético a nivel nacional bajo un estándar único.</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-[#3A5B1E]">
                <h3 className="text-xl font-bold text-black mb-4">Homogeneización</h3>
                <p className="text-slate-600 text-sm">Homogeneización de la calidad de servicio, la reportería y el control técnico en todo el portafolio.</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-[#3A5B1E]">
                <h3 className="text-xl font-bold text-black mb-4">Escalamiento Corporativo</h3>
                <p className="text-slate-600 text-sm">Escalamiento del modelo corporativo asegurando visibilidad en tiempo real de todo el portafolio.</p>
              </div>
            </div>

            {/* CTA 8: After Scale */}
            <div className="text-center mt-16 mb-12">
              <h3 className="text-2xl font-bold text-black mb-6">¿Gestionas múltiples activos?</h3>
              <a href="#contacto" className="inline-block bg-black text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#3A5B1E] transition-all duration-300 rounded-md">
                Agenda una Consulta para Portafolio
              </a>
              <p className="text-sm text-slate-600 mt-4">Soluciones corporativas para +10 propiedades</p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 9: Deployment */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Despliegue escalonado con cero impacto en la operación diaria
              </h2>
            </div>

            {/* 5-Phase Timeline */}
            <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
              <div className="text-center p-6 bg-white border-t-4 border-[#3A5B1E] rounded-lg">
                <div className="text-4xl font-bold text-[#3A5B1E] mb-3">1</div>
                <h4 className="font-bold text-black mb-2">Planificación</h4>
                <p className="text-xs text-slate-600">Consultoría técnica y evaluación de activo</p>
              </div>
              <div className="text-center p-6 bg-white border-t-4 border-[#3A5B1E] rounded-lg">
                <div className="text-4xl font-bold text-[#3A5B1E] mb-3">2</div>
                <h4 className="font-bold text-black mb-2">Integración</h4>
                <p className="text-xs text-slate-600">Diseño arquitectónico e instalación SENTRON</p>
              </div>
              <div className="text-center p-6 bg-white border-t-4 border-[#3A5B1E] rounded-lg">
                <div className="text-4xl font-bold text-[#3A5B1E] mb-3">3</div>
                <h4 className="font-bold text-black mb-2">Monitoreo Inicial</h4>
                <p className="text-xs text-slate-600">Puesta en marcha Power Digital y baseline</p>
              </div>
              <div className="text-center p-6 bg-white border-t-4 border-[#3A5B1E] rounded-lg">
                <div className="text-4xl font-bold text-[#3A5B1E] mb-3">4</div>
                <h4 className="font-bold text-black mb-2">Escalamiento</h4>
                <p className="text-xs text-slate-600">Expansión del modelo a nuevas propiedades</p>
              </div>
              <div className="text-center p-6 bg-white border-t-4 border-[#3A5B1E] rounded-lg">
                <div className="text-4xl font-bold text-[#3A5B1E] mb-3">5</div>
                <h4 className="font-bold text-black mb-2">Despliegue Total</h4>
                <p className="text-xs text-slate-600">Operación centralizada de todo el portafolio 24/7</p>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block bg-white px-8 py-4 rounded-lg border-2 border-[#3A5B1E]">
                <p className="text-lg font-bold text-black">Mantenimiento de sistemas energéticos 24/7</p>
              </div>
            </div>

            {/* CTA 9: After Deployment */}
            <div className="text-center mt-16 mb-12">
              <h3 className="text-2xl font-bold text-black mb-6">Sin impacto operativo. Cero riesgo.</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contacto" className="inline-block bg-[#3A5B1E] text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md">
                  Comienza tu Evaluación
                </a>
                <a href="mailto:aportilla@globepower.cl" className="inline-block bg-transparent border-2 border-black text-black px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-all duration-300 rounded-md">
                  Ver Cronograma de Implementación
                </a>
              </div>
              <p className="text-sm text-slate-600 mt-4">Despliegue piloto disponible — Prueba antes de escalar</p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 10: Metrics */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Métricas que respaldan nuestra eficiencia operativa
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
              <div className="text-center p-8 bg-slate-50 rounded-lg border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">&gt;90%</div>
                <div className="text-sm text-slate-600 font-bold">Cobertura de Instalación</div>
                <div className="text-xs text-slate-500 mt-2">En edificios administrados</div>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-lg border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">99%</div>
                <div className="text-sm text-slate-600 font-bold">Disponibilidad del Sistema</div>
                <div className="text-xs text-slate-500 mt-2">Uptime continuo</div>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-lg border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">15%</div>
                <div className="text-sm text-slate-600 font-bold">Reducción de Consumo</div>
                <div className="text-xs text-slate-500 mt-2">No facturado (desperdicio)</div>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-lg border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">1H</div>
                <div className="text-sm text-slate-600 font-bold">Tiempo de Respuesta</div>
                <div className="text-xs text-slate-500 mt-2">Promedio consultas técnicas</div>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-lg border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">20%</div>
                <div className="text-sm text-slate-600 font-bold">Ahorro en Mantenimiento</div>
                <div className="text-xs text-slate-500 mt-2">Presupuesto anual</div>
              </div>
            </div>

            {/* CTA 10: After Metrics */}
            <div className="text-center mt-16 mb-12">
              <h3 className="text-2xl font-bold text-black mb-6">Alcanza estos niveles de eficiencia</h3>
              <a href="#contacto" className="inline-block bg-black text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#3A5B1E] transition-all duration-300 rounded-md">
                Comienza tu Evaluación Energética
              </a>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 11: Differentiation */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                El único integrador en Chile que combina rigor industrial y soporte humano
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] rounded-lg">
                <div className="text-6xl mb-6">🏭</div>
                <h3 className="text-xl font-bold text-black mb-4">Rigor Industrial</h3>
                <p className="text-slate-600 text-sm">Alianza exclusiva Siemens para SMB, garantizando calidad de clase mundial.</p>
              </div>

              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] rounded-lg">
                <div className="text-6xl mb-6">👥</div>
                <h3 className="text-xl font-bold text-black mb-4">Soporte Humano</h3>
                <p className="text-slate-600 text-sm">Atención personalizada por especialistas. Sin bots, sin tickets perdidos.</p>
              </div>

              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] rounded-lg">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-xl font-bold text-black mb-4">Agilidad Tecnológica</h3>
                <p className="text-slate-600 text-sm">Plataformas en la nube con IA para detección temprana de anomalías. Predictivo vs. reactivo.</p>
              </div>

              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] rounded-lg">
                <div className="text-6xl mb-6">🌱</div>
                <h3 className="text-xl font-bold text-black mb-4">Sostenibilidad Validada</h3>
                <p className="text-slate-600 text-sm">Apoyo para certificaciones I-RECs y respaldo como empresa Sistema B.</p>
              </div>
            </div>

            {/* CTA 11: After Differentiation */}
            <div className="text-center mt-16 mb-12">
              <h3 className="text-2xl font-bold text-black mb-6">Experiencia Globe Power vs. Contratistas Tradicionales</h3>
              <a href="#contacto" className="inline-block bg-[#3A5B1E] text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md">
                Agenda una Reunión Comparativa
              </a>
              <p className="text-sm text-slate-600 mt-4">30 minutos — Te mostramos la diferencia</p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 12: Final CTA */}
        <section id="contacto" className="py-32 bg-gradient-to-br from-[#3A5B1E] via-[#2d4617] to-[#3A5B1E] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              Lideremos juntos la gestión energética corporativa en Chile
            </h2>
            <p className="text-xl text-[#91A56E] leading-relaxed mb-12">
              Nuestra propuesta es una alianza a largo plazo para transformar la energía en el mayor activo de tus edificios.
            </p>

            {/* CTA 12 & 13: Final Primary + Secondary */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="mailto:aportilla@globepower.cl" className="bg-white text-[#3A5B1E] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#91A56E] hover:text-white transition-all duration-300 rounded-md">
                Agenda una Consultoría Estratégica
              </a>
              <a href="mailto:aportilla@globepower.cl" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#3A5B1E] transition-all duration-300 rounded-md">
                Contactar Ahora
              </a>
            </div>
            
            {/* Contact Block - Prominent */}
            <div className="border-t border-white/20 pt-8 pb-8">
              <p className="text-white/80 mb-4 text-sm uppercase tracking-wide">Contacto Directo</p>
              <p className="text-2xl font-bold text-white mb-4">Álvaro Portilla</p>
              <p className="text-lg text-[#91A56E] mb-6">Gerente Globe Power</p>
              <div className="space-y-2">
                <p className="text-white">
                  <a href="mailto:aportilla@globepower.cl" className="hover:text-[#91A56E] transition-colors font-bold">aportilla@globepower.cl</a>
                </p>
                <p className="text-white">
                  <a href="tel:+56957809131" className="hover:text-[#91A56E] transition-colors font-bold">+56 9 5780 9131</a>
                </p>
              </div>
              <p className="text-white/60 mt-6">
                <a href="http://www.globepower.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.globepower.com</a>
              </p>
            </div>

            <div className="mt-12">
              <p className="text-2xl font-bold text-white">
                Cuidamos tu energía, todos los días.
              </p>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Button - CTA 14 */}
        <a 
          href="https://wa.me/56957809131?text=Hola,%20quiero%20información%20sobre%20Globe%20Power" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50"
          aria-label="Contactar por WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        {/* Power-Specific Footer */}
        <footer className="bg-slate-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <img
                  src="/images/logos/power-logo-clean.png"
                  alt="Globe Power - Gestión Energética Corporativa"
                  className="h-[60px] w-auto mb-4 opacity-80"
                />
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8F8B84] font-bold mt-4">
                  Una empresa de <a href="/" className="hover:text-white transition-colors">Grupo Globe</a>.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#91A56E]">Ecosistema</h4>
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
                  <li><a href="/#empresas" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Empresas</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#91A56E]">Contacto</h4>
                <ul className="space-y-2">
                  <li><a href="mailto:aportilla@globepower.cl" className="text-[#8F8B84] hover:text-white transition-colors text-sm">aportilla@globepower.cl</a></li>
                  <li><a href="tel:+56957809131" className="text-[#8F8B84] hover:text-white transition-colors text-sm">+56 9 5780 9131</a></li>
                  <li><a href="http://www.globepower.com" target="_blank" rel="noopener noreferrer" className="text-[#8F8B84] hover:text-white transition-colors text-sm">www.globepower.com</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-[#8F8B84] text-center">
                © 2026 Grupo Globe. Gestión energética corporativa en Chile. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
