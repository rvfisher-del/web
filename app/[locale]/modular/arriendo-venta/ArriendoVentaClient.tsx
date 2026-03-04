'use client';

import { motion } from 'framer-motion';
import ModularHeader from '@/components/layout/ModularHeader';

export default function ArriendoVentaClient() {
  return (
    <>
      <div className="bg-white">
        <ModularHeader />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
            <div className="absolute inset-0 bg-[#DC964E]/10" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-6">
              <a href="/modular" className="text-[#DC964E] hover:underline text-sm">
                ← Volver a Globe Modular
              </a>
            </div>
            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Arriendo o compra: Tú decides cómo operar.
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#DC964E] mb-16 leading-relaxed max-w-3xl mx-auto">
              No todos los proyectos son iguales. Por eso ofrecemos flexibilidad: arriendo corto plazo (semanas/meses), arriendo largo plazo (años con mantención) o compra directa (asset ownership).
            </p>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">4</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Modelos de Negocio
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">7 DÍAS</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Instalación más rápida (arriendo)
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Flexibilidad según proyecto
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Model 01: Arriendo Corto Plazo */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">01</div>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                  Arriendo Corto Plazo
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Para proyectos temporales, construcción, eventos y expansiones cortas. Desde semanas hasta meses.
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#DC964E] mb-4">Ideal Para</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Proyectos de construcción</strong> — Oficinas, baños, bodegas temporales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Eventos y ferias</strong> — Espacios temporales con desmontaje rápido</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Expansiones estacionales</strong> — Retail, agricultura, logística</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Proyectos urgentes</strong> — Cuando necesitas operar en días, no meses</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-100 p-10 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-black mb-4">Qué Incluye</h3>
                <div className="space-y-4 text-sm text-slate-700 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Entrega e instalación</p>
                      <p>Transporte, montaje, conexión de servicios básicos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Mantención básica</p>
                      <p>Inspección mensual (si arriendo &gt;3 meses)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Remoción al finalizar</p>
                      <p>Desmontaje y retiro sin dejar rastro</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Soporte técnico</p>
                      <p>Respuesta &lt;8 horas para emergencias</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-300 pt-6">
                  <h3 className="text-sm font-bold text-black mb-3">Modelo de Pricing</h3>
                  <p className="text-sm text-slate-700 mb-4">
                    Tarifa semanal o mensual según duración. Sin CAPEX. Costos operativos predecibles.
                  </p>
                  <h3 className="text-sm font-bold text-black mb-3">Beneficios Clave</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Cero CAPEX</strong> — No inmovilizas capital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Full-service</strong> — Nosotros gestionamos todo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Flexibilidad total</strong> — Devuelves cuando terminas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Model 02: Arriendo Largo Plazo */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-white p-10 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-black mb-4">Qué Incluye</h3>
                <div className="space-y-4 text-sm text-slate-700 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Ingeniería completa</p>
                      <p>Diseño estructural, eléctrico, sanitario, HVAC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Instalación certificada</p>
                      <p>Montaje, certificación SEC, permisos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Mantención integral</p>
                      <p>Preventiva + correctiva durante todo el contrato</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Modificaciones</p>
                      <p>Expansiones o cambios con ingeniería certificada</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-300 pt-6">
                  <h3 className="text-sm font-bold text-black mb-3">Modelo de Pricing</h3>
                  <p className="text-sm text-slate-700 mb-4">
                    Tarifa mensual con descuentos por plazos largos (2+ años). Todo incluido: mantención, soporte, modificaciones.
                  </p>
                  <h3 className="text-sm font-bold text-black mb-3">Beneficios Clave</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Costos predecibles</strong> — Tarifa fija mensual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Soporte continuo</strong> — Mantención incluida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Upgrades incluidos</strong> — Modificaciones certificadas</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">02</div>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                  Arriendo Largo Plazo
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Para campamentos mineros, proyectos de energía, operaciones industriales permanentes. Desde 1 año hasta 10+ años.
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#DC964E] mb-4">Ideal Para</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Campamentos mineros</strong> — Operación continua por años</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Proyectos de energía</strong> — Renovables, oil & gas de largo plazo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Operaciones industriales</strong> — Bodegas, oficinas permanentes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Cuando prefieres OPEX sobre CAPEX</strong> — Sin inmovilizar capital</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Model 03: Venta (Compra Directa) */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">03</div>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                  Venta (Compra Directa)
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Para instalaciones permanentes cuando se desea asset ownership. Tu activo, tu control.
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#DC964E] mb-4">Ideal Para</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Instalaciones permanentes</strong> — Oficinas, bodegas, clínicas propias</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Cuando deseas asset ownership</strong> — El activo aparece en tu balance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Proyectos custom</strong> — Diseño específico según necesidades</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Valor largo plazo</strong> — Recuperas inversión en 3-7 años</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-100 p-10 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-black mb-4">Qué Incluye</h3>
                <div className="space-y-4 text-sm text-slate-700 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Ingeniería completa</p>
                      <p>Diseño custom, cálculos estructurales, planos certificados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Fabricación modular</p>
                      <p>Control de calidad en planta, materiales certificados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Instalación llave en mano</p>
                      <p>Montaje, certificación SEC, permisos municipales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Documentación completa</p>
                      <p>As-builts, manuales O&M, certificados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Garantía</p>
                      <p>5 años estructural, 2 años sistemas</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-300 pt-6">
                  <h3 className="text-sm font-bold text-black mb-3">Modelo de Pricing</h3>
                  <p className="text-sm text-slate-700 mb-4">
                    Precio turnkey (todo incluido). Pago por hitos: 30% anticipo, 40% fabricación, 30% instalación certificada.
                  </p>
                  <h3 className="text-sm font-bold text-black mb-3">Beneficios Clave</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Asset ownership</strong> — Tu propiedad, tu control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Customización total</strong> — Diseño a medida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Valor largo plazo</strong> — Inversión recuperable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Model 04: Ingeniería + Construcción (Turnkey) */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-white p-10 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-black mb-4">Qué Incluye</h3>
                <div className="space-y-4 text-sm text-slate-700 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Análisis de sitio</p>
                      <p>Evaluación geotécnica, topografía, servicios disponibles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Ingeniería completa</p>
                      <p>Estructural, eléctrica, sanitaria, HVAC, coordinación modular</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Gestión de permisos</p>
                      <p>SEC, medioambientales, municipales, sectoriales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Fabricación y logística</p>
                      <p>Construcción en planta, transporte, preparación terreno</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-black">Montaje y certificación</p>
                      <p>Instalación, pruebas, certificación final, handover completo</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-300 pt-6">
                  <h3 className="text-sm font-bold text-black mb-3">Modelo de Pricing</h3>
                  <p className="text-sm text-slate-700 mb-4">
                    Precio proyecto (lump sum) con cronograma fijo. Single point of responsibility.
                  </p>
                  <h3 className="text-sm font-bold text-black mb-3">Beneficios Clave</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Un solo responsable</strong> — No coordinamos subcontratistas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Compliance 100%</strong> — Todos los permisos gestionados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Diseño a medida</strong> — Custom para necesidades complejas</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">04</div>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                  Ingeniería + Construcción (Llave en Mano)
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Para proyectos complejos, multi-edificio y desarrollos integrados. Single point of responsibility desde diseño hasta certificación.
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#DC964E] mb-4">Ideal Para</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Proyectos complejos</strong> — Campamentos 500+ personas, desarrollos custom</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Multi-edificio</strong> — Oficinas + bodegas + comedores + dormitorios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Instalaciones integradas</strong> — Sistemas compartidos (agua, energía, tratamiento)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Cuando prefieres un solo responsable</strong> — No coordinamos nosotros</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Decision Framework Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                ¿Arriendo o compra? Depende de tu proyecto.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Hacemos análisis de TCO (Total Cost of Ownership) para ayudarte a decidir. Te mostramos los números.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Arriendo Column */}
              <div className="bg-slate-50 p-10 rounded-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-black mb-6">Arriendo Mejor Cuando...</h3>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">✓</span>
                    <span><strong>Proyecto temporal</strong> (semanas a meses, o años pero no permanente)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">✓</span>
                    <span><strong>Presupuesto limitado</strong> (OPEX preferido sobre CAPEX)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">✓</span>
                    <span><strong>Necesitas flexibilidad</strong> (devolver al terminar, modificar sin asset lock-in)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">✓</span>
                    <span><strong>Quieres full-service</strong> (mantención incluida, cero gestión propia)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">✓</span>
                    <span><strong>No quieres gestionar permisos/certificación</strong> (nosotros hacemos todo)</span>
                  </li>
                </ul>
              </div>

              {/* Venta Column */}
              <div className="bg-slate-50 p-10 rounded-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-black mb-6">Venta Mejor Cuando...</h3>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">✓</span>
                    <span><strong>Instalación permanente</strong> (5+ años de uso proyectado)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">✓</span>
                    <span><strong>Deseas asset ownership</strong> (activo en balance, valor recuperable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">✓</span>
                    <span><strong>Quieres customización total</strong> (diseño específico, modificaciones futuras propias)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">✓</span>
                    <span><strong>Prefieres gestión propia</strong> (tienes equipo de mantención interno)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">✓</span>
                    <span><strong>Puedes capitalizar CAPEX</strong> (no hay restricción de inversión)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-slate-600 mb-8">
                <strong>Cuando estés en duda:</strong> Cotizamos ambas opciones (arriendo y venta) con análisis de TCO completo. Decides informado.
              </p>
              <a href="mailto:modular@grupoglobe.cl" className="inline-block bg-[#DC964E] text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#BA6347] transition-all duration-300 rounded-md">
                Cotiza Arriendo y Venta →
              </a>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-[#DC964E] via-[#BA6347] to-[#DC964E] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              ¿Necesitas evaluar opciones de arriendo o venta?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Programamos evaluación en terreno (sin costo) y te entregamos propuesta técnica + comercial en 10 días hábiles.
            </p>

            <div className="mb-12 text-left max-w-2xl mx-auto">
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Evaluación técnica sin costo (visita en terreno incluida)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Propuesta con opciones (arriendo corto/largo, venta, turnkey) + análisis TCO</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Sin compromiso de contrato — decides después de revisar números</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:modular@grupoglobe.cl" className="bg-white text-[#DC964E] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-slate-100 transition-all duration-300 rounded-md">
                Solicitar Evaluación
              </a>
              <a href="/modular" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#DC964E] transition-all duration-300 rounded-md">
                Volver a Globe Modular
              </a>
            </div>
            <p className="text-white/70 mt-8 text-sm">
              Email: <a href="mailto:modular@grupoglobe.cl" className="text-white hover:underline">modular@grupoglobe.cl</a> | Tel: +56 2 XXXX XXXX
            </p>
          </div>
        </section>

        {/* Footer (minimal for spoke pages) */}
        <footer className="bg-slate-950 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm text-[#8F8B84]">
              © 2026 Globe Modular — Una empresa de <a href="/" className="text-white hover:underline">Grupo Globe</a>. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
