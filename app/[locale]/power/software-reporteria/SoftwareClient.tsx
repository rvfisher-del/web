'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function SoftwareClient() {
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
        <header className="fixed top-0 left-1/2 -translate-x-1/2 max-w-7xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 w-[95%]" style={{ zIndex: 9999 }}>
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
                Telemetría y análisis en tiempo real con Power Digital
              </h1>
              
              <p className="text-[clamp(20px,2vw,28px)] font-light text-[#91A56E] mb-12 leading-relaxed max-w-4xl mx-auto">
                Ve todo tu portafolio energético desde una pantalla
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">+70</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Activos Gestionados</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">+2000</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Puntos Medición</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">99%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Uptime</div>
                </div>
              </div>

              <a href="#contacto" className="bg-[#3A5B1E] text-white px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md inline-block">
                Ver Demo en Vivo
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

        {/* Section 1: The Platform */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Power Digital: La plataforma Siemens que centraliza tu portafolio energético
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Partnership exclusivo Siemens para SMB. Hardware industrial + Software inteligente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="bg-white px-8 py-4 rounded-lg shadow-md inline-block mb-8">
                  <span className="text-2xl font-bold text-slate-800">Siemens Partner</span>
                </div>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3 text-lg">
                    <span className="text-[#3A5B1E] text-2xl flex-shrink-0">✓</span>
                    <span>Integración nativa con hardware SENTRON</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg">
                    <span className="text-[#3A5B1E] text-2xl flex-shrink-0">✓</span>
                    <span>Dashboards ejecutivos personalizables en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg">
                    <span className="text-[#3A5B1E] text-2xl flex-shrink-0">✓</span>
                    <span>Alertas predictivas de anomalías y fallas</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg">
                    <span className="text-[#3A5B1E] text-2xl flex-shrink-0">✓</span>
                    <span>Reportería automática y exportación ERP/BI</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-10 border-l-4 border-[#3A5B1E]">
                <div className="text-5xl mb-6">🖥️</div>
                <h3 className="text-2xl font-bold text-black mb-4">Arquitectura Cloud-Native</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Escalabilidad empresarial con integración a AWS, Azure e Insights Hub. Acceso desde cualquier dispositivo, en cualquier momento.
                </p>
                <div className="bg-[#3A5B1E]/10 px-4 py-3 rounded">
                  <span className="text-sm font-bold text-[#3A5B1E]">Disponibilidad 99.9% garantizada</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 2: Features (4 cards) */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                CAPACIDADES AVANZADAS
              </span>
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Cuatro pilares tecnológicos que transforman datos en decisiones
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">01</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Telemetría Activa
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Monitoreo continuo cada 15 minutos de todos los puntos de medición. Visibilidad total del consumo por operador, piso, circuito y equipo.
                </p>
                <div className="bg-[#3A5B1E]/10 px-4 py-3 rounded">
                  <span className="text-sm font-bold text-[#3A5B1E]">Real-time monitoring</span>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">02</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Análisis Predictivo
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Algoritmos de IA identifican patrones anómalos, anticipan fallas y sugieren optimizaciones. Machine learning sobre datos históricos.
                </p>
                <div className="bg-[#3A5B1E]/10 px-4 py-3 rounded">
                  <span className="text-sm font-bold text-[#3A5B1E]">AI-powered insights</span>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">03</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Reportería Avanzada
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Dashboards personalizables para diferentes roles: ejecutivos, operaciones, finanzas. Exportación automática a Excel, PDF, Power BI.
                </p>
                <div className="bg-[#3A5B1E]/10 px-4 py-3 rounded">
                  <span className="text-sm font-bold text-[#3A5B1E]">Custom dashboards</span>
                </div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">04</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Integración Cloud
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Interoperabilidad fluida con AWS, Azure e Insights Hub. APIs REST para conectar con ERP, sistemas contables y herramientas BI.
                </p>
                <div className="bg-[#3A5B1E]/10 px-4 py-3 rounded">
                  <span className="text-sm font-bold text-[#3A5B1E]">Enterprise integration</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 3: Use Cases (3 scenarios) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Casos de uso reales: Del dato al impacto financiero
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Use Case 1 */}
              <div className="bg-slate-50 p-8 border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">01</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Multi-Site Management
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Centraliza 70+ activos en una sola plataforma. Compara rendimiento entre edificios, identifica outliers, estandariza mejores prácticas.
                </p>
                <div className="text-[#3A5B1E] font-bold text-sm">
                  Caso: Portafolio corporativo nacional
                </div>
              </div>

              {/* Use Case 2 */}
              <div className="bg-slate-50 p-8 border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">02</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Anomaly Detection
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Alertas automáticas de consumos anómalos. Detecta fugas energéticas, equipos defectuosos o usos no autorizados en tiempo real.
                </p>
                <div className="text-[#3A5B1E] font-bold text-sm">
                  Caso: Detección fuga 30% en piso 8
                </div>
              </div>

              {/* Use Case 3 */}
              <div className="bg-slate-50 p-8 border-t-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">03</div>
                <h3 className="text-xl font-bold text-black mb-4">
                  Budget Forecasting
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Predicción de costos energéticos con machine learning. Simula escenarios, optimiza contratos de suministro, planifica presupuestos.
                </p>
                <div className="text-[#3A5B1E] font-bold text-sm">
                  Caso: Ahorro 12% anual en negociación
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 4: Integrations */}
        <section className="py-32 bg-gradient-to-br from-[#3A5B1E] to-[#2d4617] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
                Integraciones nativas con tu stack tecnológico
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Hardware</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#91A56E] text-xl flex-shrink-0">•</span>
                    <span>Siemens SENTRON (7KT1661, PAC 4220)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#91A56E] text-xl flex-shrink-0">•</span>
                    <span>Powercenter 3000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#91A56E] text-xl flex-shrink-0">•</span>
                    <span>Protocolos Modbus TCP / RTU</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Cloud & Software</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#91A56E] text-xl flex-shrink-0">•</span>
                    <span>AWS, Azure, Insights Hub</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#91A56E] text-xl flex-shrink-0">•</span>
                    <span>Power BI, Grafana, Tableau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#91A56E] text-xl flex-shrink-0">•</span>
                    <span>SAP, Oracle, Microsoft Dynamics (vía API REST)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-[#91A56E] font-bold">
                APIs abiertas para integraciones personalizadas
              </p>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 5: Tech Stack */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Stack tecnológico: Hardware alemán + Software en la nube
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Hardware Column */}
                <div className="bg-white p-8 border-l-4 border-[#3A5B1E]">
                  <h3 className="text-xl font-bold text-[#3A5B1E] mb-6">Hardware Industrial</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span><strong>Siemens SENTRON:</strong> Medición clase 0.5, precisión &gt;99%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span><strong>Comunicación:</strong> Modbus TCP/RTU, Ethernet industrial</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span><strong>Certificación:</strong> IEC 61557, CE, UL</span>
                    </li>
                  </ul>
                </div>

                {/* Software Column */}
                <div className="bg-white p-8 border-l-4 border-[#3A5B1E]">
                  <h3 className="text-xl font-bold text-[#3A5B1E] mb-6">Software Power Digital</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span><strong>Telemetría:</strong> Lecturas cada 15 min, almacenamiento 5 años</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span><strong>Cloud-native:</strong> AWS/Azure, escalabilidad automática</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                      <span><strong>APIs:</strong> REST, webhooks, integración ERP/BI</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-white p-10 border-t-4 border-[#3A5B1E] text-center">
                <div className="text-5xl mb-4">🔐</div>
                <h3 className="text-2xl font-bold text-black mb-4">Seguridad y Cumplimiento</h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Cifrado AES-256 en tránsito y reposo. Cumplimiento ISO 27001, SOC 2 Type II. Backup diario automático con retención 5 años.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Related Spokes */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-black mb-4">Servicios Relacionados</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/power/subdistribucion-remarcacion" className="bg-slate-50 p-6 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3 text-[#3A5B1E] font-bold">01</div>
                <h4 className="font-bold text-black mb-2">Subdistribución y Remarcación</h4>
                <p className="text-sm text-slate-600">Transparencia total en medición</p>
              </a>
              <a href="/power/eficiencia-energetica" className="bg-slate-50 p-6 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3 text-[#3A5B1E] font-bold">02</div>
                <h4 className="font-bold text-black mb-2">Eficiencia Energética</h4>
                <p className="text-sm text-slate-600">Reduce 15% tu consumo con gestión basada en datos</p>
              </a>
              <a href="/power/mantenimiento-electrico" className="bg-slate-50 p-6 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
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
              Centraliza tu portafolio energético en una sola plataforma
            </h2>
            <p className="text-xl text-[#91A56E] leading-relaxed mb-12">
              Demo en vivo de 30 minutos. Te mostramos tu data energética en tiempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="mailto:aportilla@globepower.cl" className="bg-white text-[#3A5B1E] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#91A56E] hover:text-white transition-all duration-300 rounded-md">
                Ver Demo en Vivo
              </a>
              <a href="mailto:aportilla@globepower.cl" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#3A5B1E] transition-all duration-300 rounded-md">
                Solicitar Acceso
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
