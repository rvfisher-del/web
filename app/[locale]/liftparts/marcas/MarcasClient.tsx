'use client';

import LiftPartsSubNav from '@/components/LiftPartsSubNav';

export default function MarcasClient() {
  const brands = [
    { name: 'Schindler', logo: '/images/liftparts/brands/schindler-group.jpeg', description: 'Líder mundial en ascensores y escaleras mecánicas' },
    { name: 'Otis', logo: '/images/liftparts/brands/otis-logo.png', description: 'Inventor del ascensor de seguridad moderno' },
    { name: 'Kone', logo: '/images/liftparts/brands/kone-logo.png', description: 'Innovación en movilidad urbana' },
    { name: 'Mitsubishi', logo: '/images/liftparts/brands/midsubishi-elevator.png', description: 'Tecnología japonesa de precisión' },
    { name: 'ThyssenKrupp', logo: '/images/liftparts/brands/thyssenkrupp-elevator-logo.jpeg', description: 'Ingeniería alemana de excelencia' },
  ];

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-1/2 -translate-x-1/2 max-w-7xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 w-[95%] mt-6" style={{ zIndex: 9999 }}>
          <div className="px-14 py-4 flex justify-between items-center w-full h-32">
            <a href="/liftparts" className="flex-shrink-0 py-2 bg-transparent flex items-center pl-12">
              <img
                src="/images/liftparts/logo-globe-lift-parts.png"
                alt="Globe Lift Parts"
                height={96}
                width="auto"
                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </a>

            <nav className="flex items-center gap-4 md:gap-6 pr-12">
              <a href="/liftparts" className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300">
                INICIO
              </a>
              <a 
                href="https://wa.me/56977974948?text=Hola%2C%20necesito%20repuestos%20para%20una%20marca%20específica"
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

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[#FCD074]/10" />
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-[clamp(48px,7vw,96px)] font-black leading-[1.05] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Todas las Marcas.<br/>Todas las Piezas.
            </h1>
            
            <p className="text-[clamp(20px,2.5vw,32px)] font-light text-[#FCD074] mb-12 leading-relaxed max-w-4xl mx-auto">
              OEM y equivalentes certificados con estándares canadienses
            </p>

            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              700+ ascensores mantenidos por Grupo Globe nos dan el conocimiento técnico para soportar todas las marcas principales. Sabemos qué falla, qué funciona, y dónde encontrar alternativas cuando nadie más puede.
            </p>
          </div>
        </section>

        {/* Brand Logos Grid */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-black mb-8">
                Marcas Principales Soportadas
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Repuestos OEM originales y equivalentes certificados para todas las marcas líderes en la industria.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {brands.map((brand, index) => (
                <div key={index} className="bg-white border-2 border-slate-200 rounded-2xl p-12 hover:border-[#FCD074] hover:shadow-2xl transition-all duration-300">
                  <div className="bg-slate-50 h-48 rounded-xl flex items-center justify-center mb-8 p-6">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      className="max-h-32 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">{brand.name}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{brand.description}</p>
                  <a
                    href={`https://wa.me/56977974948?text=Hola%2C%20necesito%20repuestos%20para%20${brand.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#FCD074] font-bold hover:text-black transition-colors"
                  >
                    Consultar repuestos →
                  </a>
                </div>
              ))}

              {/* Additional Brands Placeholder */}
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                <div className="text-6xl mb-6">🏢</div>
                <h3 className="text-2xl font-bold text-black mb-4">Y Muchas Más...</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Fujitec, Hyundai, y todas las marcas principales del mercado chileno.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OEM vs Equivalents */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,5vw,72px)] font-black text-black mb-8">
                OEM y Equivalentes Certificados
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Ofrecemos tanto repuestos originales (OEM) como alternativas equivalentes certificadas que cumplen con estándares canadienses de calidad.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-white p-12 rounded-2xl shadow-lg">
                <div className="text-5xl mb-6">✅</div>
                <h3 className="text-4xl font-bold text-black mb-6">Repuestos OEM</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Componentes originales del fabricante. Garantía de compatibilidad perfecta y trazabilidad completa.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span className="text-slate-700">Piezas originales de fábrica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span className="text-slate-700">Garantía del fabricante incluida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span className="text-slate-700">Certificación de autenticidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span className="text-slate-700">Trazabilidad completa de origen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-12 rounded-2xl shadow-lg">
                <div className="text-5xl mb-6">🔧</div>
                <h3 className="text-4xl font-bold text-black mb-6">Equivalentes Certificados</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Alternativas de calidad que cumplen o superan especificaciones originales. Ideal cuando OEM está obsoleto o tiene precio excesivo.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span className="text-slate-700">Cumple estándares canadienses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span className="text-slate-700">Ahorro significativo (30-50%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span className="text-slate-700">Certificación de calidad Globe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl flex-shrink-0">→</span>
                    <span className="text-slate-700">Disponibilidad inmediata</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Can't Find Your Brand */}
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-16 text-center text-white">
              <div className="text-7xl mb-8">🔍</div>
              <h2 className="text-5xl font-black mb-8">
                ¿No Está Tu Marca en la Lista?
              </h2>
              <p className="text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                Consúltanos de todos modos. Nuestro equipo experto puede ayudarte a encontrar alternativas cuando nadie más puede. Experiencia de 700+ ascensores del portfolio Globe nos da acceso a soluciones únicas.
              </p>
              <a
                href="https://wa.me/56977974948?text=Hola%2C%20necesito%20repuestos%20para%20una%20marca%20que%20no%20está%20en%20la%20lista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-12 py-5 text-xl font-bold uppercase rounded-lg hover:bg-green-700 transition-all duration-300"
              >
                📱 Consultar Marca Específica
              </a>
            </div>
          </div>
        </section>

        {/* Quality Guarantee */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,5vw,72px)] font-black text-black mb-8">
                Garantía de Calidad
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-10">
              <div className="text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                  <div className="text-5xl mb-4">🏅</div>
                  <h3 className="text-2xl font-bold text-black mb-2">Estándares Canadienses</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Cada repuesto certificado con estándares canadienses de calidad y trazabilidad.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                  <div className="text-5xl mb-4">📋</div>
                  <h3 className="text-2xl font-bold text-black mb-2">Trazabilidad Completa</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Documentación completa de origen, fabricante y certificaciones de cada componente.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                  <div className="text-5xl mb-4">🔧</div>
                  <h3 className="text-2xl font-bold text-black mb-2">700+ Ascensores</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Experiencia real de mantenimiento. Sabemos qué funciona y qué no.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold text-black mb-2">Stock Estratégico</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Inventario basado en datos reales de fallas. Tenemos lo que realmente se necesita.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-gradient-to-br from-green-600 to-green-700">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-black text-white mb-6">
              ¿Qué Marca Necesitas?
            </h2>
            <p className="text-2xl text-white/90 mb-12">
              Contáctanos via WhatsApp. Respuesta en minutos.
            </p>
            <a
              href="https://wa.me/56977974948?text=Hola%2C%20necesito%20repuestos%20para%20ascensores"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 px-12 py-5 text-xl font-black uppercase rounded-xl hover:bg-green-50 transition-all duration-300"
            >
              📱 Contactar Ahora
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white/60 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm">
              © 2026 Globe Lift Parts — Una empresa del Grupo Globe
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
