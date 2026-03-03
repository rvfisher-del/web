'use client';

import { motion } from 'framer-motion';

export default function ServicesPageClient() {
  return (
    <>
      <div className="bg-white">
        {/* Services-Specific Glass Pill Header */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 max-w-7xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 w-[95%]" style={{ zIndex: 9999 }}>
          <div className="px-14 py-4 flex justify-between items-center w-full h-32">
            {/* Services Logo - TODO: Create services-logo-clean.png */}
            <a href="/" className="flex-shrink-0 py-2 bg-transparent flex items-center pl-12">
              <img
                src="/images/logos/globe-logo-clean.png"
                alt="Globe Services"
                height={96}
                width="auto"
                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </a>

            {/* Navigation */}
            <nav className="flex items-center gap-4 md:gap-6 pr-12">
              <a href="/" className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300">
                INICIO
              </a>
              <a href="#soluciones" className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300">
                SOLUCIONES
              </a>
              <a href="mailto:talento@grupoglobe.cl" className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300 relative group whitespace-nowrap">
                TRABAJA CON NOSOTROS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BA6347] group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#contacto" className="bg-[#BA6347]/80 backdrop-blur-sm border border-white/30 text-white px-4 md:px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#BA6347] transition-all duration-300">
                CONTACTO
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section with Video Background */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Video Background - Using existing video with terracotta overlay */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src="https://kfli3thlaotlfeup.public.blob.vercel-storage.com/Video_Creation_Feedback_and_Generation.mp4" type="video/mp4" />
            </video>
            {/* Terracotta Clara Overlay */}
            <div className="absolute inset-0 bg-[#BA6347]/30" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Excelencia operativa en cada detalle.
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#D4957D] mb-12 leading-relaxed max-w-3xl mx-auto">
              Mantenimiento, Reparaciones y Gestión de modernización.
            </p>

            {/* Service Excellence Dashboard - High-Density Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
              {/* Card 1 - Response Time */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg relative">
                <div className="absolute top-4 right-4 text-[#BA6347] text-xl font-bold">+</div>
                <div className="text-4xl font-black text-white mb-2">
                  &lt;2H
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  TIEMPO DE RESPUESTA
                </div>
              </div>

              {/* Card 2 - Resolution Rate */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg relative">
                <div className="absolute top-4 right-4 text-[#BA6347] text-xl font-bold">+</div>
                <div className="text-4xl font-black text-white mb-2">
                  99.2%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  TASA DE RESOLUCIÓN
                </div>
              </div>

              {/* Card 3 - Technical Support */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#BA6347] px-8 py-10 rounded-lg relative">
                <div className="absolute top-4 right-4 text-[#BA6347] text-xl font-bold">+</div>
                <div className="text-4xl font-black text-white mb-2">
                  24/7
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D4957D]">
                  SOPORTE TÉCNICO
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

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* The Big Three - 01, 02, 03 Grid */}
        <section id="soluciones" className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                ARQUITECTURA COMPLETA — TERRACOTTA CLARA
              </span>
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Tres Pilares. <br/>Una Solución Completa.
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Mantenimiento, Logística y Gestión integrados en una sola operación. Todo lo que necesitas para mantener tu infraestructura funcionando sin interrupciones.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* 01 - Mantención Integral */}
              <div className="bg-white p-10 border-l-4 border-[#BA6347] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#BA6347] font-bold">01</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Mantención Integral
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Facilities & Assets. Mantenimiento preventivo y correctivo de infraestructura crítica.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Sistemas HVAC</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Equipos industriales</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Infraestructura eléctrica</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: cero interrupciones operativas por fallas de equipamiento.
                </p>
              </div>

              {/* 02 - Logística y Soporte */}
              <div className="bg-white p-10 border-l-4 border-[#BA6347] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#BA6347] font-bold">02</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Logística y Soporte
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Operational flow. Gestión de repuestos, inventarios y cadena de suministro técnica.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Stock de repuestos críticos</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Gestión de proveedores</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Optimización de inventarios</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: disponibilidad inmediata de componentes cuando los necesitas.
                </p>
              </div>

              {/* 03 - Gestión de Proyectos */}
              <div className="bg-white p-10 border-l-4 border-[#BA6347] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#BA6347] font-bold">03</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Gestión de Proyectos
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Turnkey solutions. Proyectos de modernización y mejora continua llave en mano.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Retrofits industriales</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Upgrades de sistemas</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BA6347] text-xl flex-shrink-0">✓</span>
                    <span>Proyectos de eficiencia</span>
                  </li>
                </ul>
                <p className="text-sm text-[#BA6347] font-semibold">
                  → Lo que significa: modernización sin detener operaciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* Section 1: Vertical Pillar - Nuestras Dimensiones Operativas */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold uppercase tracking-tight text-[#BA6347] mb-6">
                Nuestras Dimensiones Operativas
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: MANTENIMIENTO PREVENTIVO */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                className="bg-gradient-to-b from-transparent to-[#BA6347]/10 bg-white border border-slate-200 p-10 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#BA6347] mb-6">
                  Mantenimiento Preventivo
                </h3>
                <p className="text-base leading-relaxed text-[#8F8B84] mb-6">
                  Programas estructurados de mantenimiento para HVAC, equipos industriales y sistemas críticos. Detectamos problemas antes de que se conviertan en paradas operativas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Inspecciones programadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Diagnóstico predictivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Reportes de estado 24/7</span>
                  </li>
                </ul>
              </motion.div>

              {/* Card 2: GESTIÓN DE REPUESTOS */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-gradient-to-b from-transparent to-[#BA6347]/10 bg-white border border-slate-200 p-10 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#BA6347] mb-6">
                  Gestión de Repuestos
                </h3>
                <p className="text-base leading-relaxed text-[#8F8B84] mb-6">
                  Stock estratégico de componentes críticos y gestión de cadena de suministro para minimizar tiempos de espera. Disponibilidad inmediata cuando más importa.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Inventario crítico on-site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Red de proveedores certificados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Logística express &lt;24h</span>
                  </li>
                </ul>
              </motion.div>

              {/* Card 3: MODERNIZACIÓN */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-b from-transparent to-[#BA6347]/10 bg-white border border-slate-200 p-10 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#BA6347] mb-6">
                  Modernización
                </h3>
                <p className="text-base leading-relaxed text-[#8F8B84] mb-6">
                  Proyectos de retrofits y upgrades que mejoran eficiencia sin interrumpir operaciones. Transformación técnica con continuidad operativa garantizada.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Retrofits llave en mano</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Upgrades de sistemas legacy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#BA6347] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Certificaciones técnicas incluidas</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* Section 2: Service Portfolio - High-Density Detail Block */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold uppercase tracking-tight text-[#BA6347] mb-6">
                Portfolio de Servicios Técnicos
              </h2>
              <p className="text-xl text-[#8F8B84] leading-relaxed max-w-3xl mx-auto">
                Soluciones completas para cada necesidad operativa.
              </p>
            </div>

            {/* High-Density Service Grid */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* HVAC Systems */}
                <div className="bg-white border border-slate-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold uppercase tracking-tight text-[#BA6347] mb-3">
                    Sistemas HVAC
                  </h4>
                  <ul className="space-y-2 text-sm text-[#8F8B84]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Mantenimiento preventivo chillers y unidades manejadoras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Limpieza y sanitización de ductos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Optimización de consumo energético</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Monitoreo de temperatura y humedad 24/7</span>
                    </li>
                  </ul>
                </div>

                {/* Electrical Infrastructure */}
                <div className="bg-white border border-slate-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold uppercase tracking-tight text-[#BA6347] mb-3">
                    Infraestructura Eléctrica
                  </h4>
                  <ul className="space-y-2 text-sm text-[#8F8B84]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Inspección termográfica de tableros</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Mantención de sistemas UPS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Corrección de factor de potencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Certificación SEC de instalaciones</span>
                    </li>
                  </ul>
                </div>

                {/* Industrial Equipment */}
                <div className="bg-white border border-slate-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold uppercase tracking-tight text-[#BA6347] mb-3">
                    Equipos Industriales
                  </h4>
                  <ul className="space-y-2 text-sm text-[#8F8B84]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Bombas y sistemas de presión</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Compresores de aire industrial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Sistemas de elevación (ascensores, montacargas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Equipamiento de proceso crítico</span>
                    </li>
                  </ul>
                </div>

                {/* Facilities Management */}
                <div className="bg-white border border-slate-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold uppercase tracking-tight text-[#BA6347] mb-3">
                    Gestión de Facilities
                  </h4>
                  <ul className="space-y-2 text-sm text-[#8F8B84]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Coordinación de proveedores multisite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Dashboard de gestión operativa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Reportes ejecutivos mensuales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#BA6347] flex-shrink-0">→</span>
                      <span>Compliance y auditorías técnicas</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#BA6347] mb-2">&lt;2H</div>
                  <div className="text-sm uppercase tracking-wide text-[#8F8B84]">Respuesta Promedio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#BA6347] mb-2">99.2%</div>
                  <div className="text-sm uppercase tracking-wide text-[#8F8B84]">Tasa de Resolución</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#BA6347] mb-2">24/7/365</div>
                  <div className="text-sm uppercase tracking-wide text-[#8F8B84]">Disponibilidad</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#BA6347]/30" />
        </div>

        {/* Section 3: Technical Detail - 4-Column Grid Footer */}
        <section className="py-32 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold uppercase tracking-tight text-white mb-6">
                Excelencia Operativa
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                Servicios técnicos completos para operaciones que exigen disponibilidad continua.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Column A: Preventivo */}
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#BA6347] mb-4">
                  Preventivo
                </h3>
                <p className="text-sm leading-relaxed text-[#8F8B84] mb-6">
                  Inspecciones programadas y mantenimiento preventivo para evitar paradas inesperadas.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Programas personalizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Diagnóstico predictivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Reportes técnicos detallados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Alertas tempranas</span>
                  </li>
                </ul>
              </div>

              {/* Column B: Correctivo */}
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#BA6347] mb-4">
                  Correctivo
                </h3>
                <p className="text-sm leading-relaxed text-[#8F8B84] mb-6">
                  Respuesta rápida ante fallas con técnicos certificados y repuestos disponibles.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Respuesta &lt;2 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Técnicos especializados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Stock de emergencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Soporte 24/7/365</span>
                  </li>
                </ul>
              </div>

              {/* Column C: Logística */}
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#BA6347] mb-4">
                  Logística
                </h3>
                <p className="text-sm leading-relaxed text-[#8F8B84] mb-6">
                  Gestión completa de repuestos, proveedores e inventarios críticos.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Inventario on-site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Proveedores certificados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Entrega express &lt;24h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Gestión de garantías</span>
                  </li>
                </ul>
              </div>

              {/* Column D: Proyectos */}
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#BA6347] mb-4">
                  Proyectos
                </h3>
                <p className="text-sm leading-relaxed text-[#8F8B84] mb-6">
                  Retrofits, upgrades y modernización de sistemas con continuidad operativa.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Gestión llave en mano</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Sin interrupción operativa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Certificaciones incluidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BA6347] flex-shrink-0">→</span>
                    <span>Garantía extendida</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Highlight Bar */}
            <div className="mt-16 grid md:grid-cols-4 gap-6 p-8 bg-[#BA6347]/20 border border-[#BA6347]/30 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#BA6347] mb-2">&lt;2H</div>
                <div className="text-xs uppercase tracking-wide text-slate-400">Respuesta Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#BA6347] mb-2">99.2%</div>
                <div className="text-xs uppercase tracking-wide text-slate-400">Tasa de Resolución</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#BA6347] mb-2">24/7</div>
                <div className="text-xs uppercase tracking-wide text-slate-400">Soporte Técnico</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#BA6347] mb-2">15+</div>
                <div className="text-xs uppercase tracking-wide text-slate-400">Años de Experiencia</div>
              </div>
            </div>

            {/* Proof Section */}
            <div className="mt-12 border-t border-[#BA6347]/20 pt-8">
              <p className="text-sm text-[#8F8B84] text-center">
                Clientes actuales: Industrial (5 plantas), Retail (18 tiendas), Inmobiliario (12 edificios clase A)
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section - Terracotta Clara */}
        <section id="contacto" className="py-32 bg-gradient-to-br from-[#BA6347] via-[#A8563C] to-[#BA6347] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              ¿Tu infraestructura necesita soporte confiable?
            </h2>
            <p className="text-xl text-[#D4957D] leading-relaxed mb-8">
              Conversemos sobre cómo Globe Services puede mantener tus operaciones funcionando sin interrupciones.
            </p>

            {/* Risk Reversal Benefits */}
            <div className="mb-12 text-left max-w-2xl mx-auto">
              <ul className="space-y-3 text-[#D4957D]">
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Evaluación técnica sin costo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Propuesta en 5 días hábiles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Sin compromiso de contrato</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:services@grupoGlobe.com" className="bg-white text-[#BA6347] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#D4957D] hover:text-white transition-all duration-300 rounded-md">
                Solicitar Consulta
              </a>
              <a href="mailto:services@grupoGlobe.com" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#BA6347] transition-all duration-300 rounded-md">
                Contactar Ahora
              </a>
            </div>
            <p className="text-[#8F8B84] mt-8">
              Email: <a href="mailto:services@grupoGlobe.com" className="text-white hover:underline">services@grupoGlobe.com</a> | Tel: +56 2 XXXX XXXX
            </p>
          </div>
        </section>

        {/* Services-Specific Footer */}
        <footer className="bg-slate-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <img
                  src="/images/logos/globe-logo-clean.png"
                  alt="Globe Services"
                  className="h-10 w-auto mb-4 opacity-80"
                />
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8F8B84] font-bold mt-4">
                  Una empresa de <a href="/" className="text-[#8F8B84] hover:text-white transition-colors">Grupo Globe</a>.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#D4957D]">Soluciones</h4>
                <ul className="space-y-2">
                  <li><a href="#soluciones" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Mantención Integral</a></li>
                  <li><a href="#soluciones" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Logística y Soporte</a></li>
                  <li><a href="#soluciones" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Gestión de Proyectos</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#D4957D]">Grupo Globe</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Inicio</a></li>
                  <li><a href="/#empresas" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Empresas</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#D4957D]">Contacto</h4>
                <ul className="space-y-2">
                  <li><a href="mailto:services@grupoGlobe.com" className="text-[#8F8B84] hover:text-white transition-colors text-sm">services@grupoGlobe.com</a></li>
                  <li><span className="text-[#8F8B84] text-sm">+56 2 XXXX XXXX</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-[#8F8B84] text-center">
                © 2026 Grupo Globe. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
