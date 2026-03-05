'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import LiftPartsSubNav from '@/components/LiftPartsSubNav';

export default function LiftPartsPageClient() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  const getHomeLink = () => {
    if (pathname.includes('/liftparts')) return '/liftparts';
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
        {/* Lift Parts Glass Pill Header */}
        <header className="fixed top-0 left-1/2 -translate-x-1/2 max-w-7xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 w-[95%] mt-6" style={{ zIndex: 9999 }}>
          <div className="px-14 py-4 flex justify-between items-center w-full h-32">
            <a href="/" className="flex-shrink-0 py-2 bg-transparent flex items-center pl-12">
              <img
                src="/images/liftparts/logo-globe-lift-parts.png"
                alt="Globe Lift Parts - Repuestos y Reparación de Componentes para Ascensores"
                height={96}
                width="auto"
                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </a>

            <nav className="flex items-center gap-4 md:gap-6 pr-12">
              <a href={homeLink} onClick={handleInicioClick} className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300">
                INICIO
              </a>
              <a href="#servicios" className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300">
                SERVICIOS
              </a>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300"
                >
                  SOLUCIONES ▾
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-50">
                    <a
                      href="/liftparts/catalogo"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FCD074] transition-colors"
                    >
                      Catálogo de Repuestos
                    </a>
                    <a
                      href="/liftparts/laboratorio"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FCD074] transition-colors"
                    >
                      Laboratorio de Reparación
                    </a>
                    <a
                      href="/liftparts/marcas"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FCD074] transition-colors"
                    >
                      Marcas Soportadas
                    </a>
                    <a
                      href="/liftparts/nosotros"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FCD074] transition-colors"
                    >
                      Sobre Nosotros
                    </a>
                  </div>
                )}
              </div>
              
              <a href="mailto:liftparts@grupoglobe.com" className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300 relative group whitespace-nowrap">
                CONTACTO
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FCD074] group-hover:w-full transition-all duration-300" />
              </a>
              <a 
                href="https://wa.me/56977974948?text=Hola%2C%20necesito%20información%20sobre%20repuestos%20para%20ascensores" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 backdrop-blur-sm border border-white/30 text-white px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-green-700 transition-all duration-300"
              >
                📱 WHATSAPP
              </a>
            </nav>
          </div>
        </header>

        {/* Sticky Sub-Navigation */}
        <LiftPartsSubNav />

        {/* Hero Section with Placeholder Video Background */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 z-0">
            {/* Placeholder for repair lab video */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-80" />
            <div className="absolute inset-0 bg-[#FCD074]/10" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-[clamp(48px,6vw,96px)] font-black leading-[1.05] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Repuestos + Reparación de Componentes para Ascensores
            </h1>
            
            <p className="text-[clamp(20px,2.5vw,32px)] font-light text-[#FCD074] mb-12 leading-relaxed max-w-3xl mx-auto">
              Estándares Canadienses Aplicados
            </p>

            {/* Unique Value Proposition */}
            <div className="max-w-2xl mx-auto mb-16 px-6 py-6 border-l-4 border-[#FCD074] bg-white/5 backdrop-blur-sm">
              <p className="text-white text-xl leading-relaxed">
                <span className="font-bold text-[#FCD074]">Reparamos lo que otros no pueden conseguir.</span><br/>
                Laboratorio avanzado + catálogo completo + todas las marcas.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a 
                href="https://wa.me/56977974948?text=Hola%2C%20necesito%20información%20sobre%20repuestos%20para%20ascensores"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-12 py-5 text-lg font-bold tracking-wide uppercase hover:bg-green-700 transition-all duration-300 rounded-lg shadow-2xl"
              >
                📱 Contactar via WhatsApp
              </a>
              <a 
                href="/liftparts/catalogo" 
                className="bg-transparent border-2 border-white text-white px-12 py-5 text-lg font-bold tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
              >
                Ver Catálogo
              </a>
            </div>
            <p className="text-sm text-white/70">Respuesta en minutos — Stock disponible — Despacho rápido</p>

            {/* Trust Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#FCD074] px-8 py-10 rounded-lg">
                <div className="text-5xl font-black text-white mb-2">700+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#FCD074]">Ascensores Mantenidos</div>
                <p className="text-white/60 text-sm mt-2">Parte del Grupo Globe</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#FCD074] px-8 py-10 rounded-lg">
                <div className="text-5xl font-black text-white mb-2">&lt;5 MIN</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#FCD074]">Tiempo de Respuesta</div>
                <p className="text-white/60 text-sm mt-2">Via WhatsApp</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#FCD074] px-8 py-10 rounded-lg">
                <div className="text-5xl font-black text-white mb-2">TODAS</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#FCD074]">Las Marcas</div>
                <p className="text-white/60 text-sm mt-2">Schindler, Otis, TKE, Kone, Mitsubishi...</p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
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

        {/* Ghost Thread Divider */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#FCD074]/30" />
        </div>

        {/* Four Service Pillars (Hub Links to Spokes) */}
        <section id="servicios" className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-24">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                SOLUCIÓN COMPLETA — SERVICIO PROFESIONAL
              </span>
              <h2 className="text-[clamp(48px,6vw,88px)] font-black leading-[1.1] text-black mb-8" style={{ letterSpacing: '-0.05em' }}>
                Cuatro Pilares de Servicio
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Repuestos de calidad + reparación experta + respuesta rápida + estándares canadienses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Pillar 1: Laboratorio de Reparación (UNIQUE) */}
              <a href="/liftparts/laboratorio" className="group bg-white p-12 border-l-4 border-[#FCD074] hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-7xl text-[#FCD074] font-black">01</div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold tracking-tight text-black leading-tight mb-4 group-hover:text-[#FCD074] transition-colors">
                      Laboratorio de Reparación
                    </h3>
                    <p className="text-lg font-bold text-[#FCD074] mb-4">⭐ ÚNICO EN EL MERCADO</p>
                  </div>
                </div>
                
                <p className="text-[17px] font-light text-slate-600 leading-relaxed mb-8">
                  Reparamos lo que otros no pueden conseguir. Componentes obsoletos, repuestos descontinuados, placas electrónicas — nuestro laboratorio avanzado puede repararlo con certificación y garantía.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Reparación de placas electrónicas, motores, encoders</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Diagnóstico completo en 24 horas garantizado</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Ahorro de 40-70% versus reemplazo nuevo</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Certificación y garantía incluida en cada reparación</span>
                  </li>
                </ul>

                <div className="flex gap-4">
                  <span className="text-sm font-bold text-[#FCD074] uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    Ver Laboratorio →
                  </span>
                </div>
              </a>

              {/* Pillar 2: Catálogo de Repuestos */}
              <a href="/liftparts/catalogo" className="group bg-white p-12 border-l-4 border-[#FCD074] hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-7xl text-[#FCD074] font-black">02</div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold tracking-tight text-black leading-tight mb-4 group-hover:text-[#FCD074] transition-colors">
                      Catálogo de Repuestos
                    </h3>
                    <p className="text-lg font-bold text-slate-500 mb-4">Todas las marcas, todas las piezas</p>
                  </div>
                </div>
                
                <p className="text-[17px] font-light text-slate-600 leading-relaxed mb-8">
                  Catálogo completo de repuestos para todas las marcas. Desde motores hasta botones, cables hasta sensores — tenemos el stock estratégico que necesitas para mantener tus ascensores operando.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Repuestos OEM y equivalentes certificados</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Stock estratégico basado en 700+ ascensores mantenidos</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Consulta rápida via WhatsApp con foto del repuesto</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Despacho rápido en Santiago y regiones</span>
                  </li>
                </ul>

                <div className="flex gap-4">
                  <span className="text-sm font-bold text-[#FCD074] uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    Ver Catálogo →
                  </span>
                </div>
              </a>

              {/* Pillar 3: Marcas Soportadas */}
              <a href="/liftparts/marcas" className="group bg-white p-12 border-l-4 border-[#FCD074] hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-7xl text-[#FCD074] font-black">03</div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold tracking-tight text-black leading-tight mb-4 group-hover:text-[#FCD074] transition-colors">
                      Marcas Soportadas
                    </h3>
                    <p className="text-lg font-bold text-slate-500 mb-4">Schindler, Otis, TKE, Kone, Mitsubishi y más</p>
                  </div>
                </div>
                
                <p className="text-[17px] font-light text-slate-600 leading-relaxed mb-8">
                  700+ ascensores mantenidos nos dan el conocimiento técnico para soportar todas las marcas principales. Sabemos qué falla, qué funciona, y dónde encontrar alternativas cuando nadie más puede.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Schindler, Otis, ThyssenKrupp, Kone, Mitsubishi</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Fujitec, Hyundai y todas las marcas principales</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Equivalentes certificados con estándares canadienses</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Trazabilidad completa de cada componente</span>
                  </li>
                </ul>

                <div className="flex gap-4">
                  <span className="text-sm font-bold text-[#FCD074] uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    Ver Marcas →
                  </span>
                </div>
              </a>

              {/* Pillar 4: Equipo Experto */}
              <a href="/liftparts/nosotros" className="group bg-white p-12 border-l-4 border-[#FCD074] hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-7xl text-[#FCD074] font-black">04</div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold tracking-tight text-black leading-tight mb-4 group-hover:text-[#FCD074] transition-colors">
                      Equipo Experto
                    </h3>
                    <p className="text-lg font-bold text-slate-500 mb-4">Encontramos alternativas cuando nadie más puede</p>
                  </div>
                </div>
                
                <p className="text-[17px] font-light text-slate-600 leading-relaxed mb-8">
                  Parte del Grupo Globe, aplicamos estándares canadienses a cada repuesto y operación. Nuestro equipo experto tiene la experiencia y las conexiones para encontrar soluciones cuando otros se rinden.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Operaciones profesionales con estándares canadienses</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Experiencia técnica de 700+ ascensores del portfolio Globe</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Red amplia de proveedores certificados internacionales</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span>Soporte técnico experto via WhatsApp en minutos</span>
                  </li>
                </ul>

                <div className="flex gap-4">
                  <span className="text-sm font-bold text-[#FCD074] uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    Conocer Equipo →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA Section - MASSIVE */}
        <section className="py-32 bg-gradient-to-br from-green-600 to-green-700">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-[clamp(40px,5vw,72px)] font-black text-white mb-8 leading-tight">
              De la Foto a la Cotización en Minutos
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed">
              ¿Ascensor detenido? ¿Necesitas un repuesto urgente?<br/>
              Envíanos foto via WhatsApp y te cotizamos al instante.
            </p>

            <a 
              href="https://wa.me/56977974948?text=Hola%2C%20necesito%20información%20sobre%20repuestos%20para%20ascensores"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 px-16 py-6 text-2xl font-black uppercase rounded-xl hover:bg-green-50 transition-all duration-300 shadow-2xl"
            >
              📱 Enviar WhatsApp Ahora
            </a>

            <p className="text-white/80 mt-8 text-lg">
              +56 9 7797 4948 • Respuesta en menos de 5 minutos
            </p>
          </div>
        </section>

        {/* Trust Elements & Canadian Standards */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,5vw,64px)] font-black text-black mb-6">
                Parte del Grupo Globe
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Aplicamos estándares canadienses de calidad a cada repuesto y operación. La experiencia de 700+ ascensores mantenidos respalda cada componente que entregamos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                  <div className="text-5xl mb-4">🏅</div>
                  <h3 className="text-2xl font-bold text-black mb-2">Estándares Canadienses</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Certificación de calidad en cada repuesto. Trazabilidad completa. Operaciones profesionales.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold text-black mb-2">Respuesta Rápida</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  WhatsApp en minutos. Despacho mismo día en Santiago. Stock estratégico siempre disponible.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                  <div className="text-5xl mb-4">🔧</div>
                  <h3 className="text-2xl font-bold text-black mb-2">Experiencia Técnica</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  700+ ascensores mantenidos. Sabemos qué falla, qué funciona, y dónde encontrar alternativas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Contact Block */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-black mb-8">¿Necesitas un Repuesto?</h2>
            <p className="text-2xl text-white/80 mb-12">
              Contacta a nuestro equipo experto ahora.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-[#FCD074] mb-4">Simon Abramovicz</h3>
                <p className="text-white/80 mb-4">Manager, Globe Lift Parts</p>
                <a 
                  href="https://wa.me/56977974948"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 font-bold"
                >
                  📱 +56 9 7797 4948
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-[#FCD074] mb-4">Oficina Central</h3>
                <p className="text-white/80 mb-2">Isadora Goyenechea 3520, of 300</p>
                <p className="text-white/80 mb-4">Las Condes, Chile</p>
                <a href="mailto:liftparts@grupoglobe.com" className="text-[#FCD074] font-bold">
                  liftparts@grupoglobe.com
                </a>
              </div>
            </div>

            <a 
              href="https://wa.me/56977974948?text=Hola%2C%20necesito%20información%20sobre%20repuestos%20para%20ascensores"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-12 py-5 text-lg font-bold uppercase rounded-lg hover:bg-green-700 transition-all duration-300"
            >
              📱 Contactar via WhatsApp
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white/60 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm">
              © 2026 Globe Lift Parts — Una empresa del Grupo Globe<br/>
              Estándares Canadienses Aplicados • 700+ Ascensores Mantenidos
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
