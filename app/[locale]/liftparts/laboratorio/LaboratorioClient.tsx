'use client';

import LiftPartsSubNav from '@/components/LiftPartsSubNav';

export default function LaboratorioClient() {
  const repairableComponents = [
    { name: 'Placas Electrónicas', icon: '🔌', description: 'Control boards, circuitos de potencia, variadores' },
    { name: 'Motores', icon: '⚙️', description: 'Motores de tracción, puertas, frenos electromagnéticos' },
    { name: 'Encoders', icon: '📡', description: 'Encoders obsoletos, sensores de posición, sistemas de medición' },
    { name: 'Sistemas de Puertas', icon: '🚪', description: 'Operadores, controles, sensores de seguridad' },
    { name: 'Paneles de Control', icon: '🎛️', description: 'Interfaces, displays, botoneras' },
    { name: 'Variadores de Frecuencia', icon: '📊', description: 'VFD, drives, inversores' },
  ];

  const repairProcess = [
    {
      step: '1',
      title: 'Envíanos el Componente',
      description: 'Retiro sin costo en Santiago. Despacho desde regiones con seguimiento.',
    },
    {
      step: '2',
      title: 'Diagnóstico Completo',
      description: 'Evaluación técnica en 24 horas. Informe detallado con fotos y recomendaciones.',
    },
    {
      step: '3',
      title: 'Cotización de Reparación',
      description: 'Precio fijo, plazo definido, garantía incluida. Sin sorpresas.',
    },
    {
      step: '4',
      title: 'Reparación Certificada',
      description: 'Trabajo en laboratorio avanzado. Pruebas de calidad antes de devolución.',
    },
  ];

  const benefits = [
    { title: 'Ahorro 40-70%', description: 'versus reemplazo con componente nuevo', icon: '💰' },
    { title: 'Garantía Incluida', description: 'Certificación de calidad en cada reparación', icon: '✅' },
    { title: '24 Horas Diagnóstico', description: 'Turnaround rápido para minimizar downtime', icon: '⚡' },
    { title: 'Componentes Obsoletos', description: 'Reparamos lo que otros no pueden conseguir', icon: '🔧' },
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
                href="https://wa.me/56977974948?text=Hola%2C%20necesito%20información%20sobre%20reparación%20de%20componentes"
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
          
          {/* Placeholder for lab equipment photo */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="inline-block bg-[#FCD074] text-black px-6 py-3 rounded-full font-black text-sm tracking-wider uppercase mb-8">
              ⭐ ÚNICO EN EL MERCADO
            </div>

            <h1 className="text-[clamp(48px,7vw,96px)] font-black leading-[1.05] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Laboratorio Avanzado de Reparación de Componentes
            </h1>
            
            <p className="text-[clamp(22px,2.5vw,32px)] font-light text-[#FCD074] mb-12 leading-relaxed max-w-4xl mx-auto">
              No encontramos el repuesto → Lo reparamos con garantía
            </p>

            <div className="max-w-3xl mx-auto mb-12 px-8 py-6 border-l-4 border-[#FCD074] bg-white/5 backdrop-blur-sm">
              <p className="text-white text-xl leading-relaxed">
                Ningún otro proveedor en Chile ofrece reparación certificada de componentes. Cuando el repuesto está obsoleto, descontinuado o simplemente no está disponible, nuestro laboratorio avanzado puede repararlo.
              </p>
            </div>

            <a
              href="https://wa.me/56977974948?text=Hola%2C%20tengo%20un%20componente%20dañado%20y%20necesito%20evaluación"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-12 py-5 text-lg font-bold uppercase rounded-lg hover:bg-green-700 transition-all duration-300 shadow-2xl"
            >
              📱 Solicitar Evaluación Gratuita
            </a>
          </div>
        </section>

        {/* What We Repair */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,5vw,72px)] font-black text-black mb-8">
                ¿Qué Reparamos?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Especialización en componentes electrónicos y mecánicos críticos. Si está obsoleto o descontinuado, probablemente podemos repararlo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {repairableComponents.map((component, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200 hover:border-[#FCD074] hover:shadow-xl transition-all duration-300">
                  <div className="text-6xl mb-6">{component.icon}</div>
                  <h3 className="text-2xl font-bold text-black mb-3">{component.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Repair Process */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,5vw,72px)] font-black text-black mb-8">
                Proceso de Reparación
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Transparencia total. Plazos definidos. Sin sorpresas.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {repairProcess.map((item) => (
                <div key={item.step} className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FCD074]">
                    <div className="text-6xl font-black text-[#FCD074] mb-6">{item.step}</div>
                    <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Connector Arrow (except last) */}
                  {parseInt(item.step) < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#FCD074] text-3xl font-bold">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,5vw,72px)] font-black text-black mb-8">
                Beneficios de la Reparación
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-7xl mb-6">{benefit.icon}</div>
                  <h3 className="text-3xl font-black text-black mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Placeholder */}
        <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-8">Caso de Éxito</h2>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Case Study Image Placeholder */}
                <div className="bg-slate-700 rounded-xl h-96 flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <div className="text-8xl mb-4">📸</div>
                    <p>Foto del encoder reparado</p>
                  </div>
                </div>

                {/* Case Study Content */}
                <div>
                  <div className="inline-block bg-[#FCD074] text-black px-4 py-2 rounded-full font-bold text-sm mb-6">
                    CASO REAL
                  </div>
                  <h3 className="text-4xl font-black mb-6">Encoder Obsoleto Schindler 5400</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-[#FCD074] font-bold mb-2">PROBLEMA:</p>
                      <p className="text-white/80 text-lg">
                        Encoder de posición descontinuado. Schindler cotizaba reemplazo completo del sistema de control: $8.5M CLP.
                      </p>
                    </div>

                    <div>
                      <p className="text-[#FCD074] font-bold mb-2">SOLUCIÓN:</p>
                      <p className="text-white/80 text-lg">
                        Reparación completa del encoder en laboratorio. Calibración, certificación y garantía de 6 meses.
                      </p>
                    </div>

                    <div>
                      <p className="text-[#FCD074] font-bold mb-2">RESULTADO:</p>
                      <p className="text-white/80 text-lg">
                        <strong className="text-2xl text-[#FCD074]">60% de ahorro</strong> versus reemplazo completo. Componente funcionando perfectamente después de 18 meses.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 p-6 rounded-lg">
                    <p className="text-white/90 italic text-lg">
                      "Ningún otro proveedor nos dio una alternativa. Globe Lift Parts reparó el encoder y nos ahorró millones."
                    </p>
                    <p className="text-[#FCD074] mt-3 font-bold">
                      — Administrador de Edificio, Las Condes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Lab */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,5vw,72px)] font-black text-black mb-8">
                ¿Por Qué Nuestro Laboratorio?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-slate-50 p-12 rounded-2xl">
                <h3 className="text-3xl font-bold text-black mb-6">Experiencia Técnica Real</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Como parte del Grupo Globe, mantenemos 700+ ascensores diariamente. Sabemos exactamente qué componentes fallan, cómo fallan, y cómo repararlos correctamente.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">✓</span>
                    <span className="text-slate-700">Técnicos certificados con experiencia de campo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">✓</span>
                    <span className="text-slate-700">Equipamiento de diagnóstico avanzado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">✓</span>
                    <span className="text-slate-700">Protocolos de calidad estrictos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-12 rounded-2xl">
                <h3 className="text-3xl font-bold text-black mb-6">Estándares Canadienses</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Cada reparación sigue estándares canadienses de calidad. Documentación completa, trazabilidad, y certificación en cada trabajo.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">✓</span>
                    <span className="text-slate-700">Certificación de calidad incluida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">✓</span>
                    <span className="text-slate-700">Garantía de 6 meses en reparaciones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FCD074] text-xl">✓</span>
                    <span className="text-slate-700">Informe técnico detallado con cada trabajo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-gradient-to-br from-green-600 to-green-700">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-[clamp(36px,5vw,64px)] font-black text-white mb-8">
              ¿Componente Dañado u Obsoleto?
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed">
              Envíanos foto via WhatsApp. Evaluación técnica gratuita en 24 horas.<br/>
              Te diremos si podemos repararlo y cuánto ahorrarás.
            </p>

            <a
              href="https://wa.me/56977974948?text=Hola%2C%20tengo%20un%20componente%20para%20evaluar%20reparación"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 px-16 py-6 text-2xl font-black uppercase rounded-xl hover:bg-green-50 transition-all duration-300 shadow-2xl"
            >
              📱 Solicitar Evaluación Gratuita
            </a>

            <p className="text-white/80 mt-8 text-lg">
              +56 9 7797 4948 • liftparts@grupoglobe.com
            </p>
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
