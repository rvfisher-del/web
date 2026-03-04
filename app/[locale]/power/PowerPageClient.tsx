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
              <a href="#contacto" className="bg-[#3A5B1E]/80 backdrop-blur-sm border border-white/30 text-white px-4 md:px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#3A5B1E] transition-all duration-300">
                CONTACTO
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="#ecosistema" className="bg-[#3A5B1E] text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md">
                Descubre Cómo
              </a>
              <a href="#contacto" className="bg-transparent border-2 border-white text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#3A5B1E] transition-all duration-300 rounded-md">
                Agenda Consultoría
              </a>
            </div>

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
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 3: The Transformation */}
        <section className="py-32 bg-gradient-to-br from-[#3A5B1E] to-[#2d4617] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
                La energía es el sistema operativo central de tu edificio
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="text-center md:text-left">
                <div className="text-8xl font-black text-white/20 mb-4">ANTES</div>
                <div className="text-4xl font-bold mb-4">Gasto Fijo</div>
                <p className="text-lg text-white/80">Costo ciego sin visibilidad ni control</p>
              </div>

              <div className="text-center md:text-left">
                <div className="text-8xl font-black text-[#91A56E] mb-4">AHORA</div>
                <div className="text-4xl font-bold mb-4">Activo Estratégico</div>
                <p className="text-lg text-white/80">Motor que impulsa eficiencia, sostenibilidad y rentabilidad</p>
              </div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-[#91A56E] text-2xl flex-shrink-0">✓</span>
                    <span>Cuando se mide, gestiona y optimiza correctamente, la energía deja de ser un costo ciego.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#91A56E] text-2xl flex-shrink-0">✓</span>
                    <span>Se transforma en el motor que impulsa la eficiencia, la sostenibilidad y la rentabilidad corporativa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#91A56E] text-2xl flex-shrink-0">✓</span>
                    <span>Globe Power convierte este potencial latente en resultados financieros concretos.</span>
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

        {/* SECTION 4: Four Pillars (with links to spokes) */}
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
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* SECTION 5: Trust Signals */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Resultados concretos respaldados por datos
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-8 bg-white rounded-lg border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">+70</div>
                <div className="text-sm text-slate-600">Activos gestionados</div>
              </div>
              <div className="text-center p-8 bg-white rounded-lg border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">+2000</div>
                <div className="text-sm text-slate-600">Puntos de medición</div>
              </div>
              <div className="text-center p-8 bg-white rounded-lg border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">99%</div>
                <div className="text-sm text-slate-600">Uptime garantizado</div>
              </div>
              <div className="text-center p-8 bg-white rounded-lg border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">15%</div>
                <div className="text-sm text-slate-600">Reducción consumo</div>
              </div>
            </div>

            {/* Coverage & Partnership */}
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-6">Cobertura Nacional</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Santiago y Región Metropolitana</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Valparaíso, Viña del Mar, Concepción</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Todas las regiones de Chile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Respuesta &lt;4H zonas remotas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-6">Partnership Siemens</h3>
                <div className="flex justify-center mb-6">
                  <div className="bg-slate-50 px-6 py-3 rounded-lg">
                    <span className="text-xl font-bold text-slate-800">Siemens Partner</span>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Alianza exclusiva para SMB</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Hardware SENTRON certificado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Software Power Digital</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Soporte técnico internacional</span>
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

        {/* SECTION 6: CTA */}
        <section id="contacto" className="py-32 bg-gradient-to-br from-[#3A5B1E] via-[#2d4617] to-[#3A5B1E] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              Lideremos juntos la gestión energética corporativa en Chile
            </h2>
            <p className="text-xl text-[#91A56E] leading-relaxed mb-12">
              Nuestra propuesta es una alianza a largo plazo para transformar la energía en el mayor activo de tus edificios.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="mailto:aportilla@globepower.cl" className="bg-white text-[#3A5B1E] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#91A56E] hover:text-white transition-all duration-300 rounded-md">
                Agenda Consultoría Técnica
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
              <p className="text-white/60 mt-4">
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
