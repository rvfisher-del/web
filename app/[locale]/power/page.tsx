import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Globe Power | El Músculo Silencioso del Grupo',
  description: 'Verde Profundo. Energía clara y ordenada para operaciones críticas. El músculo silencioso del grupo Globe.',
};

export default function PowerPage() {
  return (
    <>
      <div className="bg-white">
        {/* Power-Specific Glass Pill Header */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 max-w-6xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 w-[90%]" style={{ zIndex: 9999 }}>
          <div className="px-14 py-4 flex justify-between items-center w-full h-32">
            {/* Power Logo */}
            <a href="/" className="flex-shrink-0 py-2 bg-transparent flex items-center pl-12">
              <img
                src="/images/logos/power-logo-clean.png"
                alt="Globe Power"
                height={96}
                width="auto"
                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </a>

            {/* Navigation */}
            <nav className="flex items-center gap-6 md:gap-10 pr-12">
              <a href="/" className="px-4 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300">
                INICIO
              </a>
              <a href="#soluciones" className="px-4 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300">
                SOLUCIONES
              </a>
              <a href="#contacto" className="bg-[#3A5B1E]/80 backdrop-blur-sm border border-white/30 text-white px-4 md:px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#3A5B1E] transition-all duration-300">
                CONTACTO
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section with Video Background */}
        <section className="relative min-h-screen flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Video Background - Using existing video with green overlay */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src="/videos/power-hero-verde-profundo.mp4" type="video/mp4" />
            </video>
            {/* Verde Profundo Overlay */}
            <div className="absolute inset-0 bg-[#3A5B1E]/30" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#91A56E] mb-4 block">
                Globe Power — Verde Profundo
              </span>
            </div>
            
            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-8" style={{ letterSpacing: '-0.05em' }}>
              Hacemos visible lo que otros esconden.
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#91A56E] mb-12 leading-relaxed max-w-3xl mx-auto">
              Energía industrial para operaciones que no pueden detenerse.
            </p>

            {/* Financial Impact Dashboard - High-Density Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
              {/* Card 1 - Mining */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-8 py-10 rounded-lg relative">
                <div className="absolute top-4 right-4 text-[#3A5B1E] text-xl font-bold">+</div>
                <div className="text-4xl font-black text-white mb-2">
                  $200K/HR
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">
                  DOWNTIME MINERO
                </div>
              </div>

              {/* Card 2 - Retail */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-8 py-10 rounded-lg relative">
                <div className="absolute top-4 right-4 text-[#3A5B1E] text-xl font-bold">+</div>
                <div className="text-4xl font-black text-white mb-2">
                  &gt;99.5%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">
                  UPTIME RETAIL
                </div>
              </div>

              {/* Card 3 - Real Estate */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-8 py-10 rounded-lg relative">
                <div className="absolute top-4 right-4 text-[#3A5B1E] text-xl font-bold">+</div>
                <div className="text-4xl font-black text-white mb-2">
                  15-30%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">
                  AHORRO REAL ESTATE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Big Three - 01, 02, 03 Grid */}
        <section id="soluciones" className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                ARQUITECTURA COMPLETA — VERDE PROFUNDO
              </span>
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Tres Pilares.<br/>Una Solución Completa.
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Suministro, Eficiencia y Analítica integrados en una sola operación. Todo lo que necesitas para mantener la energía sin interrupciones.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* 01 - Suministro */}
              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#3A5B1E] font-bold">01</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Suministro
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Subdistribución eléctrica exclusiva. Media y baja tensión. Respaldo automático ante fallas de red.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Subestaciones propias</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Infraestructura redundante</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Mantenimiento preventivo incluido</span>
                  </li>
                </ul>
                <p className="text-sm text-[#3A5B1E] font-semibold">
                  → Lo que significa: cero interrupciones incluso cuando la red pública falla.
                </p>
              </div>

              {/* 02 - Eficiencia */}
              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#3A5B1E] font-bold">02</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Eficiencia
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Auditorías energéticas, corrección de factor de potencia, optimización de demanda y reducción de costos operativos.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Análisis de consumo real</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Identificación de pérdidas</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Plan de optimización a medida</span>
                  </li>
                </ul>
                <p className="text-sm text-[#3A5B1E] font-semibold">
                  → Lo que significa: pagas solo por la energía que realmente necesitas.
                </p>
              </div>

              {/* 03 - Analítica */}
              <div className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#3A5B1E] font-bold">03</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Analítica
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Monitoreo en tiempo real, dashboards visuales, alertas automáticas y reportes ejecutivos con métricas verificables.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Dashboard 24/7</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Alertas predictivas</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Reporting mensual transparente</span>
                  </li>
                </ul>
                <p className="text-sm text-[#3A5B1E] font-semibold">
                  → Lo que significa: decisiones basadas en datos reales, no suposiciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Vertical Pillar - Nuestras Dimensiones Operativas */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold uppercase tracking-tight text-[#3A5B1E] mb-6">
                Nuestras Dimensiones Operativas
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: INFRAESTRUCTURA */}
              <div className="bg-gradient-to-b from-transparent to-[#3A5B1E]/10 bg-white border border-slate-200 p-10 rounded-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#3A5B1E] mb-6">
                  Infraestructura
                </h3>
                <p className="text-base leading-relaxed text-[#8F8B84] mb-6">
                  Generación de respaldo automático, sistemas de transferencia y subestaciones propias para operaciones críticas sin interrupciones. Cuando la red falla, tus sistemas ni lo notan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Grupos electrógenos industriales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Transferencias automáticas &lt;3 seg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Mantenimiento preventivo 24/7</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: INTELIGENCIA */}
              <div className="bg-gradient-to-b from-transparent to-[#3A5B1E]/10 bg-white border border-slate-200 p-10 rounded-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#3A5B1E] mb-6">
                  Inteligencia
                </h3>
                <p className="text-base leading-relaxed text-[#8F8B84] mb-6">
                  Monitoreo en tiempo real, análisis predictivo y dashboards ejecutivos con datos verificables. Detectamos problemas antes de que se conviertan en crisis.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Telemetría continua multisite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Alertas predictivas automáticas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Reportes ejecutivos mensuales</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: OPTIMIZACIÓN */}
              <div className="bg-gradient-to-b from-transparent to-[#3A5B1E]/10 bg-white border border-slate-200 p-10 rounded-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#3A5B1E] mb-6">
                  Optimización
                </h3>
                <p className="text-base leading-relaxed text-[#8F8B84] mb-6">
                  Reducción medible de costos operativos mediante auditorías energéticas, corrección de factor de potencia y gestión de demanda.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Corrección factor de potencia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Gestión de demanda peak/off-peak</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-lg flex-shrink-0 font-bold">•</span>
                    <span className="text-[#8F8B84] text-sm leading-relaxed">Ahorro típico: 15-30% anual (verificado en clientes retail y minería)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Utilivisor Killer - Submetering Data Block */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold uppercase tracking-tight text-[#3A5B1E] mb-6">
                Transparencia Total en el Consumo
              </h2>
              <p className="text-xl text-[#8F8B84] leading-relaxed max-w-3xl mx-auto">
                Transparencia total en el consumo. Entienda su uso energético para operar con máxima rentabilidad.
              </p>
            </div>

            {/* High-Density Data Table */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#3A5B1E] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Ubicación</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Medidor</th>
                      <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider">kWh Mes Actual</th>
                      <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider">kWh Mes Anterior</th>
                      <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider">Variación</th>
                      <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider">Costo/kWh</th>
                      <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider">Total</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-[#3A5B1E]">Torre Norte - Piso 3</td>
                      <td className="px-6 py-4 text-sm text-[#8F8B84]">SM-103A</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">24,567</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">23,890</td>
                      <td className="px-6 py-4 text-sm text-right text-[#3A5B1E] font-semibold">+2.8%</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">$0.142</td>
                      <td className="px-6 py-4 text-sm text-right text-[#3A5B1E] font-bold">$3,488.51</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-[#3A5B1E]">Retail Ground Floor</td>
                      <td className="px-6 py-4 text-sm text-[#8F8B84]">SM-GF-01</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">38,921</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">41,203</td>
                      <td className="px-6 py-4 text-sm text-right text-green-600 font-semibold">-5.5%</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">$0.138</td>
                      <td className="px-6 py-4 text-sm text-right text-[#3A5B1E] font-bold">$5,371.10</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-[#3A5B1E]">Data Center - Nivel B1</td>
                      <td className="px-6 py-4 text-sm text-[#8F8B84]">SM-DC-B1</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">67,450</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">66,789</td>
                      <td className="px-6 py-4 text-sm text-right text-[#3A5B1E] font-semibold">+1.0%</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">$0.145</td>
                      <td className="px-6 py-4 text-sm text-right text-[#3A5B1E] font-bold">$9,780.25</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-[#3A5B1E]">HVAC Sistema Central</td>
                      <td className="px-6 py-4 text-sm text-[#8F8B84]">SM-HVAC-01</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">52,134</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">54,908</td>
                      <td className="px-6 py-4 text-sm text-right text-green-600 font-semibold">-5.1%</td>
                      <td className="px-6 py-4 text-sm text-right text-[#8F8B84] font-mono">$0.140</td>
                      <td className="px-6 py-4 text-sm text-right text-[#3A5B1E] font-bold">$7,298.76</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold">
                      <td className="px-6 py-4 text-sm text-[#3A5B1E]" colSpan={2}>TOTAL EDIFICIO</td>
                      <td className="px-6 py-4 text-sm text-right text-[#3A5B1E] font-mono">183,072</td>
                      <td className="px-6 py-4 text-sm text-right text-[#3A5B1E] font-mono">186,790</td>
                      <td className="px-6 py-4 text-sm text-right text-green-600">-2.0%</td>
                      <td className="px-6 py-4 text-sm text-right text-[#3A5B1E]">—</td>
                      <td className="px-6 py-4 text-sm text-right text-[#3A5B1E] font-bold">$25,938.62</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Submetering Benefits */}
              <div className="grid md:grid-cols-3 gap-6 p-8 bg-white border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3A5B1E] mb-2">100%</div>
                  <div className="text-sm uppercase tracking-wide text-[#8F8B84]">Transparencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3A5B1E] mb-2">Real-Time</div>
                  <div className="text-sm uppercase tracking-wide text-[#8F8B84]">Monitoreo 24/7</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3A5B1E] mb-2">15-30%</div>
                  <div className="text-sm uppercase tracking-wide text-[#8F8B84]">Ahorro Promedio</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Detail - 4-Column Grid Footer */}
        <section className="py-32 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(32px,4.5vw,48px)] font-bold uppercase tracking-tight text-white mb-6">
                Grid of Expertise
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                Servicios técnicos completos para operaciones críticas sin compromisos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Column A: Mantenimiento */}
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#3A5B1E] mb-4">
                  Mantenimiento
                </h3>
                <p className="text-sm leading-relaxed text-[#8F8B84] mb-6">
                  Generadores industriales, HVAC crítico y sistemas auxiliares con mantenimiento preventivo programado.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Grupos electrógenos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Sistemas HVAC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Transferencias automáticas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>UPS y respaldo</span>
                  </li>
                </ul>
              </div>

              {/* Column B: Montaje & Retrofits */}
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#3A5B1E] mb-4">
                  Montaje & Retrofits
                </h3>
                <p className="text-sm leading-relaxed text-[#8F8B84] mb-6">
                  Instalación de infraestructura nueva y modernización de sistemas existentes sin interrupciones operativas.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Subestaciones propias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Tableros MT/BT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Modernización sistemas legacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Certificación SEC</span>
                  </li>
                </ul>
              </div>

              {/* Column C: Emergencias 24/7 */}
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#3A5B1E] mb-4">
                  Emergencias 24/7
                </h3>
                <p className="text-sm leading-relaxed text-[#8F8B84] mb-6">
                  Respuesta inmediata ante fallas críticas con técnicos certificados disponibles las 24 horas.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Tiempo respuesta: &lt;60 min en Santiago, &lt;90 min regiones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Repuestos críticos en stock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Técnicos SEC certificados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>SLA garantizado</span>
                  </li>
                </ul>
              </div>

              {/* Column D: Gestión de Sistemas Críticos */}
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg">
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#3A5B1E] mb-4">
                  Gestión de Sistemas Críticos
                </h3>
                <p className="text-sm leading-relaxed text-[#8F8B84] mb-6">
                  Administración completa de infraestructura energética para operaciones que no pueden detenerse.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Data centers tier 2/3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Operaciones mineras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Retail multisite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A5B1E] flex-shrink-0">→</span>
                    <span>Industrial continuo</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Highlight Bar */}
            <div className="mt-16 grid md:grid-cols-4 gap-6 p-8 bg-[#3A5B1E]/20 border border-[#3A5B1E]/30 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-2">&lt;3 seg</div>
                <div className="text-xs uppercase tracking-wide text-slate-400">Transferencia Automática</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-2">99.7%</div>
                <div className="text-xs uppercase tracking-wide text-slate-400">Uptime Garantizado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-2">&lt;60 min</div>
                <div className="text-xs uppercase tracking-wide text-slate-400">Respuesta Emergencias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3A5B1E] mb-2">24/7/365</div>
                <div className="text-xs uppercase tracking-wide text-slate-400">Monitoreo Continuo</div>
              </div>
            </div>

            {/* Proof Section */}
            <div className="mt-12 border-t border-[#3A5B1E]/20 pt-8">
              <p className="text-sm text-[#8F8B84] text-center">
                Clientes actuales: Minería (3 operaciones), Retail (12 tiendas), Real Estate (8 edificios clase A)
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section - Verde Profundo */}
        <section id="contacto" className="py-32 bg-gradient-to-br from-[#3A5B1E] via-[#2d4617] to-[#3A5B1E] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              ¿Tu operación necesita energía confiable?
            </h2>
            <p className="text-xl text-[#91A56E] leading-relaxed mb-8">
              Conversemos sobre cómo Globe Power puede ser tu socio energético de largo plazo.
            </p>

            {/* Risk Reversal Benefits */}
            <div className="mb-12 text-left max-w-2xl mx-auto">
              <ul className="space-y-3 text-[#91A56E]">
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Auditoría energética sin costo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Propuesta técnica en 5 días hábiles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Sin compromiso de contrato</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:power@grupoGlobe.com" className="bg-white text-[#3A5B1E] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#91A56E] hover:text-white transition-all duration-300 rounded-md">
                Solicitar Consulta
              </a>
              <a href="mailto:power@grupoGlobe.com" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#3A5B1E] transition-all duration-300 rounded-md">
                Contactar Ahora
              </a>
            </div>
            <p className="text-[#8F8B84] mt-8">
              Email: <a href="mailto:power@grupoGlobe.com" className="text-white hover:underline">power@grupoGlobe.com</a> | Manager: Alvaro Portilla | Tel: +56 2 XXXX XXXX
            </p>
          </div>
        </section>

        {/* Power-Specific Footer */}
        <footer className="bg-slate-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <img
                  src="/images/logos/power-logo-clean.png"
                  alt="Globe Power"
                  className="h-10 w-auto mb-4 opacity-80"
                />
                <p className="text-[#91A56E] font-medium">El músculo silencioso del grupo.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#91A56E]">Soluciones</h4>
                <ul className="space-y-2">
                  <li><a href="#soluciones" className="text-white/70 hover:text-[#91A56E] transition-colors text-sm">Suministro</a></li>
                  <li><a href="#soluciones" className="text-white/70 hover:text-[#91A56E] transition-colors text-sm">Eficiencia</a></li>
                  <li><a href="#soluciones" className="text-white/70 hover:text-[#91A56E] transition-colors text-sm">Analítica</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#91A56E]">Grupo Globe</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-white/70 hover:text-[#91A56E] transition-colors text-sm">Inicio</a></li>
                  <li><a href="/#empresas" className="text-white/70 hover:text-[#91A56E] transition-colors text-sm">Empresas</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#91A56E]">Contacto</h4>
                <ul className="space-y-2">
                  <li><a href="mailto:power@grupoGlobe.com" className="text-white/70 hover:text-[#91A56E] transition-colors text-sm">power@grupoGlobe.com</a></li>
                  <li><span className="text-white/70 text-sm">Alvaro Portilla</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-white/60 text-center">© 2026 Globe Power. Verde Profundo. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
