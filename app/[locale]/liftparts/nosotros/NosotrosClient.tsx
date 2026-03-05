'use client';

import LiftPartsSubNav from '@/components/LiftPartsSubNav';

export default function NosotrosClient() {
  const differentiators = [
    {
      number: '01',
      title: 'Laboratorio de Reparación',
      description: 'Único en el mercado chileno',
      details: 'Ningún otro proveedor ofrece reparación certificada de componentes. Cuando el repuesto está obsoleto o descontinuado, podemos repararlo con garantía.',
    },
    {
      number: '02',
      title: 'Equipo Experto de Repuestos',
      description: 'Encontramos alternativas cuando nadie más puede',
      details: 'Experiencia técnica y red amplia de proveedores certificados nos permiten localizar soluciones para componentes imposibles de conseguir.',
    },
    {
      number: '03',
      title: 'Estándares Canadienses',
      description: 'Calidad + trazabilidad en cada componente',
      details: 'Operaciones profesionales, inventario estratégico, certificación de calidad, y documentación completa en cada repuesto.',
    },
    {
      number: '04',
      title: 'Respuesta Rápida',
      description: 'WhatsApp en minutos, no horas',
      details: 'Sistema WhatsApp-first con equipo técnico disponible para identificación de repuestos, cotizaciones y soporte inmediato.',
    },
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
                href="https://wa.me/56977974948?text=Hola%2C%20quiero%20conocer%20más%20sobre%20Globe%20Lift%20Parts"
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
        <section className="relative min-h-[80vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[#FCD074]/10" />
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="inline-block bg-[#FCD074] text-black px-6 py-3 rounded-full font-black text-sm tracking-wider uppercase mb-8">
              PARTE DEL GRUPO GLOBE
            </div>

            <h1 className="text-[clamp(48px,7vw,96px)] font-black leading-[1.05] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Estándares Canadienses Aplicados a Cada Repuesto
            </h1>
            
            <p className="text-[clamp(20px,2.5vw,32px)] font-light text-[#FCD074] mb-12 leading-relaxed max-w-4xl mx-auto">
              Parte del Grupo Globe. 700+ Ascensores Mantenidos.
            </p>

            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Globe Lift Parts nace de la experiencia real de mantener cientos de ascensores diariamente. Sabemos exactamente qué componentes fallan, cuándo fallan, y cómo solucionarlo rápido.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-6xl font-black text-black mb-12">Nuestra Misión</h2>
            <p className="text-3xl font-light text-slate-700 leading-relaxed mb-16">
              "Extender la vida útil de ascensores mediante repuestos de calidad y reparación experta"
            </p>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              No vendemos simplemente piezas. Ofrecemos soluciones completas: repuestos certificados, reparación de componentes obsoletos, y el respaldo técnico del portfolio más grande de Chile.
            </p>
          </div>
        </section>

        {/* Connection to Globe Services */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,5vw,72px)] font-black text-black mb-8">
                Conexión con Globe Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                No somos solo distribuidores de repuestos. Somos parte del Grupo Globe, el operador de mantenimiento más grande de Chile.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-white p-12 rounded-2xl shadow-lg">
                <div className="text-6xl mb-6">🏢</div>
                <h3 className="text-3xl font-bold text-black mb-6">700+ Ascensores Mantenidos</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Globe Services mantiene más de 700 ascensores en edificios comerciales y residenciales premium en Santiago y regiones.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">→</span>
                    <span className="text-slate-700">Datos reales de fallas y componentes críticos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">→</span>
                    <span className="text-slate-700">Sabemos qué repuestos se necesitan urgentemente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">→</span>
                    <span className="text-slate-700">Inventario estratégico basado en experiencia real</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-12 rounded-2xl shadow-lg">
                <div className="text-6xl mb-6">🔧</div>
                <h3 className="text-3xl font-bold text-black mb-6">Experiencia Técnica de Campo</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Nuestros técnicos trabajan todos los días con todas las marcas principales. Conocimiento directo de cómo funcionan y qué componentes requieren.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">→</span>
                    <span className="text-slate-700">Técnicos certificados con años de experiencia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">→</span>
                    <span className="text-slate-700">Soporte técnico experto para identificación de piezas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">→</span>
                    <span className="text-slate-700">Recomendaciones basadas en rendimiento real</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Canadian Standards Story */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,5vw,72px)] font-black text-black mb-8">
                ¿Por Qué Estándares Canadienses?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-50 p-12 rounded-2xl border-l-4 border-[#FCD074] mb-12">
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  Grupo Globe fue fundado por profesionales canadienses que trajeron estándares de calidad y operaciones de primer mundo a Chile.
                </p>
                <p className="text-xl text-slate-700 leading-relaxed">
                  Estos mismos estándares — documentación completa, trazabilidad de componentes, certificación de calidad, y operaciones profesionales — son la base de Globe Lift Parts.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                    <div className="text-5xl mb-4">📋</div>
                    <h3 className="text-xl font-bold text-black">Documentación Completa</h3>
                  </div>
                  <p className="text-slate-600">
                    Cada repuesto con certificación de origen, especificaciones técnicas y garantía
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                    <div className="text-5xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-black">Trazabilidad Total</h3>
                  </div>
                  <p className="text-slate-600">
                    Sabemos de dónde viene cada componente y podemos verificar su autenticidad
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-black">Certificación de Calidad</h3>
                  </div>
                  <p className="text-slate-600">
                    Estándares canadienses aplicados a cada repuesto y reparación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Differentiators */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,5vw,72px)] font-black text-black mb-8">
                Cuatro Diferenciadores Clave
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Por qué Globe Lift Parts es diferente a cualquier otro proveedor en Chile
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {differentiators.map((item) => (
                <div key={item.number} className="bg-white p-12 rounded-2xl border-l-4 border-[#FCD074] hover:shadow-2xl transition-all duration-300">
                  <div className="text-7xl font-black text-[#FCD074] mb-6">{item.number}</div>
                  <h3 className="text-3xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-lg font-bold text-slate-500 mb-6">{item.description}</p>
                  <p className="text-slate-600 leading-relaxed">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Placeholder */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-black mb-8">
                Nuestro Equipo
              </h2>
              <p className="text-xl text-slate-600">
                Profesionales con experiencia real en terreno
              </p>
            </div>

            {/* Team Photo Placeholder */}
            <div className="bg-slate-100 rounded-2xl h-[500px] flex items-center justify-center mb-16">
              <div className="text-center text-slate-400">
                <div className="text-9xl mb-6">👥</div>
                <p className="text-2xl font-bold">Foto del Equipo Globe Lift Parts</p>
                <p className="text-lg mt-2">Profesional, industrial, chileno</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-slate-600 leading-relaxed mb-12">
                Nuestro equipo combina experiencia técnica de campo con conocimiento profundo de proveedores internacionales. Cuando necesitas un repuesto crítico, trabajamos incansablemente para encontrarlo.
              </p>

              <div className="bg-slate-50 p-12 rounded-2xl">
                <h3 className="text-3xl font-bold text-black mb-6">¿Quieres Unirte al Equipo?</h3>
                <p className="text-lg text-slate-600 mb-8">
                  Estamos creciendo y buscamos técnicos expertos en repuestos de ascensores.
                </p>
                <a
                  href="mailto:talento@grupoglobe.cl"
                  className="inline-block bg-[#FCD074] text-black px-10 py-4 font-bold uppercase rounded-lg hover:bg-[#FCD074]/80 transition-all duration-300"
                >
                  Enviar CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Placeholder */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-black mb-8">
                Certificaciones y Garantías
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
                <div className="text-7xl mb-6">🏅</div>
                <h3 className="text-2xl font-bold text-black mb-4">Estándares Canadienses</h3>
                <p className="text-slate-600 leading-relaxed">
                  Certificación de calidad aplicada a cada repuesto y reparación
                </p>
              </div>

              <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
                <div className="text-7xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-black mb-4">Garantía Incluida</h3>
                <p className="text-slate-600 leading-relaxed">
                  Todos los repuestos OEM con garantía del fabricante. Reparaciones con 6 meses de garantía.
                </p>
              </div>

              <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
                <div className="text-7xl mb-6">🔒</div>
                <h3 className="text-2xl font-bold text-black mb-4">Trazabilidad ISO</h3>
                <p className="text-slate-600 leading-relaxed">
                  Documentación completa de origen, fabricante y certificaciones
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-6xl font-black mb-16">Nuestros Valores</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl">
                <h3 className="text-3xl font-bold text-[#FCD074] mb-4">Profesionalismo</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  Operaciones con estándares canadienses. Documentación completa. Cumplimiento de plazos. Sin excusas.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl">
                <h3 className="text-3xl font-bold text-[#FCD074] mb-4">Soluciones Reales</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  No decimos "no tenemos" y dejamos el problema. Encontramos alternativas, reparamos, o localizamos proveedores.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl">
                <h3 className="text-3xl font-bold text-[#FCD074] mb-4">Respuesta Rápida</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  WhatsApp en minutos, no horas. Ascensor detenido es emergencia. Tratamos tu urgencia como nuestra urgencia.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl">
                <h3 className="text-3xl font-bold text-[#FCD074] mb-4">Expertise Técnico</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  700+ ascensores mantenidos nos dan conocimiento que otros proveedores simplemente no tienen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-gradient-to-br from-green-600 to-green-700">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-black text-white mb-8">
              ¿Listo para Trabajar con Nosotros?
            </h2>
            <p className="text-2xl text-white/90 mb-12">
              Experimenta la diferencia de trabajar con un proveedor profesional respaldado por el portfolio de mantenimiento más grande de Chile.
            </p>
            <a
              href="https://wa.me/56977974948?text=Hola%2C%20quiero%20trabajar%20con%20Globe%20Lift%20Parts"
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
              © 2026 Globe Lift Parts — Una empresa del Grupo Globe<br/>
              Estándares Canadienses Aplicados • 700+ Ascensores Mantenidos
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
