'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PowerPageClient() {
  const pathname = usePathname();

  // Determine home link based on current path
  const getHomeLink = () => {
    if (pathname.includes('/servicios')) return '/servicios';
    if (pathname.includes('/power')) return '/power';
    return '/'; // default to root
  };

  const homeLink = getHomeLink();

  // Handle INICIO click to prevent reload when already on division home
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
            {/* Power Logo */}
            <a href="/" className="flex-shrink-0 py-2 bg-transparent flex items-center pl-12">
              <img
                src="/images/logos/power-logo-clean.png"
                alt="Globe Power - Gestión Energética Corporativa Chile"
                height={96}
                width="auto"
                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </a>

            {/* Navigation */}
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

        {/* Hero Section with Video Background */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Video Background */}
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
            {/* Subtle green gradient overlay */}
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

            {/* CTA Buttons */}
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
                <div className="text-3xl font-black text-white mb-2">
                  +70
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">
                  ACTIVOS GESTIONADOS
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                <div className="text-3xl font-black text-white mb-2">
                  99%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">
                  UPTIME CONTINUO
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                <div className="text-3xl font-black text-white mb-2">
                  15%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">
                  REDUCCIÓN CONSUMO
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
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 1: The Problem (Page 2) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Los activos operan con modelos obsoletos y riesgos invisibles
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Problem 1 */}
              <div className="bg-slate-50 p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4">💸</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Cobros Ineficientes
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  La facturación por metro cuadrado, sin medición real por operador, ajustes manuales, errores e injusticias.
                </p>
              </div>

              {/* Problem 2 */}
              <div className="bg-slate-50 p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Falta de Control
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sin telemetría en tiempo real, los costos operativos aumentan por consumos anómalos no detectados.
                </p>
              </div>

              {/* Problem 3 */}
              <div className="bg-slate-50 p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Oportunidades Perdidas
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Activos con más de 300 kW de consumo permanecen en régimen regulado, perdiendo la ventaja de negociar contratos competitivos.
                </p>
              </div>

              {/* Problem 4 */}
              <div className="bg-slate-50 p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Mantenimientos Correctivos
                </h3>
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

        {/* Section 2: The Transformation (Page 3) */}
        <section className="py-32 bg-gradient-to-br from-[#3A5B1E] to-[#2d4617] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
                La energía es el sistema operativo central de tu edificio
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="text-center md:text-left">
                <div className="text-8xl font-black text-white/20 mb-4">
                  ANTES
                </div>
                <div className="text-4xl font-bold mb-4">Gasto Fijo</div>
                <p className="text-lg text-white/80">
                  Costo ciego sin visibilidad ni control
                </p>
              </div>

              <div className="text-center md:text-left">
                <div className="text-8xl font-black text-[#91A56E] mb-4">
                  AHORA
                </div>
                <div className="text-4xl font-bold mb-4">Activo Estratégico</div>
                <p className="text-lg text-white/80">
                  Motor que impulsa eficiencia, sostenibilidad y rentabilidad
                </p>
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

        {/* Section 3: Ecosystem (4 Pillars - Page 4) */}
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
              {/* Pillar 1 */}
              <div className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6 text-[#3A5B1E] font-bold">01</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Subdistribución y Remarcación
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Transparencia absoluta en la medición.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6 text-[#3A5B1E] font-bold">02</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Eficiencia Energética
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Optimización alineada a normativas internacionales.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6 text-[#3A5B1E] font-bold">03</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Software y Reportería
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Telemetría y análisis en tiempo real.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white p-8 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6 text-[#3A5B1E] font-bold">04</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Mantenimiento Eléctrico
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Continuidad operativa preventiva y correctiva.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 4: Technology (Siemens Partnership - Page 5) */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Rigor industrial y tecnológico en alianza exclusiva con Siemens
              </h2>
              <div className="flex justify-center mb-8">
                <div className="bg-white px-8 py-4 rounded-lg shadow-md">
                  <span className="text-2xl font-bold text-slate-800">Siemens Partner</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Tech Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 border border-slate-200 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#3A5B1E] mb-4">
                  Hardware de Precisión
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Equipos SENTRON (7KT1661 y PAC 4220) que garantizan exactitud industrial en cada punto de medición.
                </p>
                <div className="text-sm text-[#3A5B1E] font-bold">
                  Precisión: &gt;99%
                </div>
              </motion.div>

              {/* Tech Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 border border-slate-200 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#3A5B1E] mb-4">
                  Inteligencia de Datos
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Software Power Digital para análisis predictivo, gestión en tiempo real y reportería avanzada.
                </p>
                <div className="text-sm text-[#3A5B1E] font-bold">
                  AI-Powered Insights
                </div>
              </motion.div>

              {/* Tech Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 border border-slate-200 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#3A5B1E] mb-4">
                  Gestión Centralizada
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Integración nativa con Powercenter 3000 a través de protocolos Modbus TCP y RTU.
                </p>
                <div className="text-sm text-[#3A5B1E] font-bold">
                  Unified Platform
                </div>
              </motion.div>

              {/* Tech Card 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-8 border border-slate-200 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#3A5B1E] mb-4">
                  Escalabilidad Cloud
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Interoperabilidad fluida con plataformas líderes como Insights Hub, AWS y Azure.
                </p>
                <div className="text-sm text-[#3A5B1E] font-bold">
                  Enterprise-Ready
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 5: Transparency (Page 6) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Transparencia total que elimina cobros injustos y fricciones
              </h2>
              <div className="text-2xl font-bold text-[#3A5B1E] mb-8">
                Precisión superior al 99% en medición
              </div>
            </div>

            {/* Flow Diagram */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-16 max-w-5xl mx-auto">
              <div className="bg-[#3A5B1E] text-white px-8 py-6 rounded-lg text-center flex-1 min-w-[200px]">
                <div className="font-bold mb-2">Consumo Real</div>
              </div>
              <div className="text-4xl text-[#3A5B1E]">→</div>
              <div className="bg-[#3A5B1E] text-white px-8 py-6 rounded-lg text-center flex-1 min-w-[200px]">
                <div className="font-bold mb-2">Medición SENTRON</div>
              </div>
              <div className="text-4xl text-[#3A5B1E]">→</div>
              <div className="bg-[#3A5B1E] text-white px-8 py-6 rounded-lg text-center flex-1 min-w-[200px]">
                <div className="font-bold mb-2">Procesamiento Powermind</div>
              </div>
              <div className="text-4xl text-[#3A5B1E]">→</div>
              <div className="bg-[#3A5B1E] text-white px-8 py-6 rounded-lg text-center flex-1 min-w-[200px]">
                <div className="font-bold mb-2">Facturación Exacta</div>
              </div>
            </div>

            {/* 3 Benefits */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">📊</div>
                <p className="text-slate-600 leading-relaxed">
                  Asignamos consumos reales a cada operador e inquilino.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🚫</div>
                <p className="text-slate-600 leading-relaxed">
                  Eliminamos el modelo de prorrateo por metro cuadrado.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🤝</div>
                <p className="text-slate-600 leading-relaxed">
                  Mejoramos la relación propietario-arrendatario con datos auditables y transparentes.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-[#3A5B1E] font-bold">
                Somos responsables ante su operador de todo tema energético
              </p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 6: Maintenance 4.0 (Page 7) */}
        <section className="py-32 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
                El mantenimiento 4.0 es gestión de riesgos y continuidad operativa
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                El mantenimiento ya no es una simple operación; es el pilar de la seguridad eléctrica.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800 p-8 border border-slate-700 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#91A56E] mb-4">
                  Telemetría Activa
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Anticipamos fallas en salas eléctricas y transformadores antes de que ocurran.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-800 p-8 border border-slate-700 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#91A56E] mb-4">
                  Decisiones Basadas en Datos
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Transición de un mantenimiento reactivo a una estrategia predictiva y correctiva de alta precisión.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-800 p-8 border border-slate-700 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#91A56E] mb-4">
                  Realizamos los Mantenimientos
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Nuestros clientes saben que nuestros datos y mantenimientos generan eficiencia en sus presupuestos.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 7: Business Model (Page 9) */}
        <section className="py-32 bg-gradient-to-br from-[#3A5B1E] to-[#2d4617] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
                Transformamos un gasto ciego en una nueva línea de ingresos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <div className="text-5xl mb-4">💰</div>
                <p className="text-lg leading-relaxed">
                  Comercializamos la energía de la mano de nuestros clientes.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <div className="text-5xl mb-4">🏗️</div>
                <p className="text-lg leading-relaxed">
                  Financiamos el equipamiento y asumimos la gestión del facility eléctrico.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <div className="text-5xl mb-4">📈</div>
                <p className="text-lg leading-relaxed">
                  Generamos ingresos recuperados, reducimos costos operativos y liberamos flujo de caja para tu negocio principal.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <div className="text-5xl mb-4">🎯</div>
                <p className="text-lg leading-relaxed">
                  Beneficios tributarios y comerciales directos para el propietario del activo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 8: Scale (Page 10) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Estandarización y control absoluto para más de 70 activos de distintas industrias
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-8xl font-black text-[#3A5B1E] mb-4">
                  +70
                </div>
                <div className="text-2xl font-bold text-black mb-2">Activos</div>
                <p className="text-slate-600">Gestionados a nivel nacional</p>
              </div>

              <div className="text-center">
                <div className="text-8xl font-black text-[#3A5B1E] mb-4">
                  +2,000
                </div>
                <div className="text-2xl font-bold text-black mb-2">Puntos</div>
                <p className="text-slate-600">De medición por activo</p>
              </div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg text-slate-600">
                  <span className="text-[#3A5B1E] text-2xl flex-shrink-0">✓</span>
                  <span>Centralización total del consumo energético a nivel nacional bajo un estándar único.</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-600">
                  <span className="text-[#3A5B1E] text-2xl flex-shrink-0">✓</span>
                  <span>Homogeneización de la calidad de servicio, la reportería y el control técnico.</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-slate-600">
                  <span className="text-[#3A5B1E] text-2xl flex-shrink-0">✓</span>
                  <span>Escalamiento del modelo corporativo asegurando visibilidad en tiempo real de todo el portafolio.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 9: Deployment (Page 11) */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Despliegue escalonado con cero impacto en la operación diaria
              </h2>
            </div>

            {/* 5-Phase Timeline */}
            <div className="grid md:grid-cols-5 gap-4 mb-12">
              {/* Phase 1 */}
              <div className="bg-white p-6 border-t-4 border-[#3A5B1E] rounded-lg text-center">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-3">01</div>
                <h3 className="font-bold text-black mb-2">Planificación</h3>
                <p className="text-sm text-slate-600">
                  Consultoría técnica. Tus activos + Globe Power.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="bg-white p-6 border-t-4 border-[#3A5B1E] rounded-lg text-center">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-3">02</div>
                <h3 className="font-bold text-black mb-2">Integración</h3>
                <p className="text-sm text-slate-600">
                  Diseño de arquitectura. Instalación hardware Siemens SENTRON.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="bg-white p-6 border-t-4 border-[#3A5B1E] rounded-lg text-center">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-3">03</div>
                <h3 className="font-bold text-black mb-2">Monitoreo Inicial</h3>
                <p className="text-sm text-slate-600">
                  Power Digital comisionamiento y validación.
                </p>
              </div>

              {/* Phase 4 */}
              <div className="bg-white p-6 border-t-4 border-[#3A5B1E] rounded-lg text-center">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-3">04</div>
                <h3 className="font-bold text-black mb-2">Escalamiento</h3>
                <p className="text-sm text-slate-600">
                  Expansión del modelo estandarizado a nuevos recintos.
                </p>
              </div>

              {/* Phase 5 */}
              <div className="bg-white p-6 border-t-4 border-[#3A5B1E] rounded-lg text-center">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-3">05</div>
                <h3 className="font-bold text-black mb-2">Despliegue Total</h3>
                <p className="text-sm text-slate-600">
                  Operación centralizada de todo el parque inmobiliario.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-bold text-[#3A5B1E]">
                Mantenimiento de sistemas energéticos 24/7
              </p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 10: Metrics (Page 13) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Métricas que respaldan nuestra eficiencia operativa
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {/* Metric 1 */}
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">
                  &gt;90%
                </div>
                <div className="text-sm text-slate-600">
                  Cobertura de instalación en edificios administrados
                </div>
              </div>

              {/* Metric 2 */}
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">
                  99%
                </div>
                <div className="text-sm text-slate-600">
                  Disponibilidad del sistema (Uptime continuo)
                </div>
              </div>

              {/* Metric 3 */}
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">
                  15%
                </div>
                <div className="text-sm text-slate-600">
                  Reducción promedio de consumo no facturado
                </div>
              </div>

              {/* Metric 4 */}
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">
                  1H
                </div>
                <div className="text-sm text-slate-600">
                  Tiempo de respuesta promedio ante consultas técnicas
                </div>
              </div>

              {/* Metric 5 */}
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">
                  20%
                </div>
                <div className="text-sm text-slate-600">
                  Ahorro en presupuesto de mantenimiento
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 11: Differentiation (Page 14) */}
        <section className="py-32 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
                El Único integrador en Chile que combina rigor industrial y soporte humano
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800 p-8 border border-slate-700 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-[#91A56E] mb-4">
                  Rigor Industrial
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Alianza exclusiva Siemens para SMB, garantizando calidad de clase mundial.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-800 p-8 border border-slate-700 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-[#91A56E] mb-4">
                  Soporte Humano
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Atención personalizada por especialistas. Sin bots, sin tickets perdidos.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-800 p-8 border border-slate-700 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-[#91A56E] mb-4">
                  Agilidad Tecnológica
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Plataformas en la nube con IA para detección temprana de anomalías.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-slate-800 p-8 border border-slate-700 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-[#91A56E] mb-4">
                  Sostenibilidad Validada
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Apoyo para certificaciones I-RECs y respaldo como empresa Sistema B.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* CTA Section (Page 15) */}
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
                  <li><a href="#ecosistema" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Subdistribución</a></li>
                  <li><a href="#ecosistema" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Eficiencia Energética</a></li>
                  <li><a href="#ecosistema" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Software & Reportería</a></li>
                  <li><a href="#ecosistema" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Mantenimiento</a></li>
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
