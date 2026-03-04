'use client';

import { motion } from 'framer-motion';
import ModularHeader from '@/components/layout/ModularHeader';

export default function SolucionesModularesClient() {
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
              Soluciones Modulares para Cada Industria
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#DC964E] mb-16 leading-relaxed max-w-3xl mx-auto">
              Desde campamentos mineros hasta bodegas industriales. Diseño, ingeniería y fabricación con estándar canadiense adaptado a realidad chilena: altura, desierto, frío austral, zonas urbanas.
            </p>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">5</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Categorías de Productos
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">50-1000</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Personas (Capacidad)
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">3-90 DÍAS</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Instalación según complejidad
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Category 01: Campamentos y Dormitorios */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">01</div>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                  Campamentos y Dormitorios
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Campamentos mineros, hoteles de faena, dormitorios individuales y compartidos, recreación, comedores y cocinas.
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#DC964E] mb-4">Capacidad y Configuración</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>50-1000 personas</strong> — Desde campamentos pequeños hasta complejos completos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Dormitorios individuales o compartidos</strong> (2-4 personas/unidad)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Comedores industriales</strong> (50-500 personas por turno)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Espacios de recreación</strong> — TV, juegos, gimnasio, sala de estar</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-100 p-10 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-black mb-4">Especificaciones Técnicas</h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-black">Tamaño por módulo</p>
                    <p>6-12 metros (estándar modular)</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Materiales</p>
                    <p>Estructura acero, paneles aislantes, pisos vinílicos industriales</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">HVAC</p>
                    <p>Climatización para extremo calor/frío, filtración de polvo</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Instalación eléctrica</p>
                    <p>Certificación SEC completa, backup de emergencia</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Agua y sanitarios</p>
                    <p>Planta de tratamiento autónoma (zonas remotas), agua potable certificada</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Despliegue</p>
                    <p><strong>60-90 días</strong> para campamentos completos (200+ personas)</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Industrias principales</p>
                    <p>Minería, Construcción, Energía</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-300">
                  <a href="/modular/industrias/mineria" className="text-[#DC964E] font-semibold hover:underline">
                    Ver soluciones para minería →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Category 02: Oficinas y Espacios de Trabajo */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-white p-10 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-black mb-4">Especificaciones Técnicas</h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-black">Tamaño</p>
                    <p>20-200 m² (configuración flexible)</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Capacidad</p>
                    <p>10-100 personas según distribución</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Mobiliario</p>
                    <p>Escritorios, sillas ergonómicas, archivadores (opcional)</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Conectividad</p>
                    <p>Cableado estructurado, WiFi, telefonía</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Iluminación</p>
                    <p>LED industrial, temperatura color 4000K (productividad)</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Acústica</p>
                    <p>Paneles aislantes para reducción de ruido</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Despliegue</p>
                    <p><strong>3-10 días</strong> para oficinas temporales</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Industrias principales</p>
                    <p>Construcción, Minería, Retail, Educación</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-300">
                  <a href="/modular/industrias/construccion" className="text-[#DC964E] font-semibold hover:underline">
                    Ver soluciones para construcción →
                  </a>
                </div>
              </div>
              <div>
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">02</div>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                  Oficinas y Espacios de Trabajo
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Oficinas administrativas, salas de reunión y capacitación, salas de control y monitoreo, oficinas temporales para construcción.
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#DC964E] mb-4">Tipos de Espacios</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Oficinas administrativas</strong> — Espacios abiertos o privados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Salas de reunión</strong> — 6-20 personas, equipadas con proyector/pantalla</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Salas de control</strong> — Monitoreo 24/7, múltiples pantallas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Oficinas de obra</strong> — Temporales para proyectos construcción</span>
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

        {/* Category 03: Baños y Camarines */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">03</div>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                  Baños y Camarines
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Baños modulares (3-20 unidades), camarines con duchas, baños químicos premium para zonas sin servicios.
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#DC964E] mb-4">Configuraciones Disponibles</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Baños estándar</strong> — 3-20 unidades sanitarias por módulo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Camarines con duchas</strong> — Agua caliente, lockers, cumplimiento laboral</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Baños químicos premium</strong> — Para eventos o zonas sin agua/alcantarillado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Unidades accesibles</strong> — Cumplimiento Ley 20.422 (accesibilidad universal)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-100 p-10 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-black mb-4">Especificaciones Técnicas</h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-black">Capacidad</p>
                    <p>30-200 personas por día (según unidades)</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Materiales</p>
                    <p>Fibra de vidrio, acero inoxidable, pisos antideslizantes</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Agua caliente</p>
                    <p>Calefón eléctrico o gas (según disponibilidad)</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Ventilación</p>
                    <p>Forzada con extractores industriales</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Iluminación</p>
                    <p>LED de bajo consumo, sensor de movimiento (opcional)</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Cumplimiento</p>
                    <p>Ley laboral (DS 594), accesibilidad universal</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Despliegue</p>
                    <p><strong>5-10 días</strong></p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Industrias principales</p>
                    <p>Construcción, Eventos, Minería</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Category 04: Bodegas y Almacenamiento */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-white p-10 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-black mb-4">Especificaciones Técnicas</h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-black">Tamaño</p>
                    <p>50-500 m² (escalable con módulos adicionales)</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Altura libre</p>
                    <p>3-6 metros (según necesidad de estanterías)</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Estructura</p>
                    <p>Acero galvanizado, resistencia sísmica certificada</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Techo</p>
                    <p>Paneles aislantes, impermeables, reflectivos (zonas calurosas)</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Puertas</p>
                    <p>Portones industriales (manuales o automáticos), acceso vehicular</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Iluminación</p>
                    <p>LED industrial de alto flujo, sensores de movimiento</p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Despliegue</p>
                    <p><strong>15-30 días</strong></p>
                  </div>
                  <div>
                    <p className="font-bold text-black">Industrias principales</p>
                    <p>Industrial, Retail, Construcción, Agricultura</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-300">
                  <a href="/modular/industrias/industrial" className="text-[#DC964E] font-semibold hover:underline">
                    Ver soluciones industriales →
                  </a>
                </div>
              </div>
              <div>
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">04</div>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                  Bodegas y Almacenamiento
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Bodegas industriales (50-500 m²), almacenes temporales, centros de distribución modulares, almacenamiento de herramientas y materiales.
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#DC964E] mb-4">Aplicaciones Típicas</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Bodegas logísticas</strong> — Centros de distribución, almacenes temporales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Almacenamiento industrial</strong> — Insumos, repuestos, materias primas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Bodegas de construcción</strong> — Herramientas, materiales, equipos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Almacenamiento agrícola</strong> — Packing, refrigeración, insumos</span>
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

        {/* Category 05: Módulos Especializados */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">05</div>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                  Módulos Especializados
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Clínicas y consultorios médicos, salas de clase y educación, comedores industriales, talleres y mantención, laboratorios.
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#DC964E] mb-4">Categorías Especializadas</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Clínicas modulares</strong> — Consultorios, atención primaria, testeo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Salas de clase</strong> — Educación, capacitación, bibliotecas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Comedores industriales</strong> — Cocinas equipadas, capacidad 50-500 personas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Talleres de mantención</strong> — Equipados para reparación de equipos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Laboratorios</strong> — Control de calidad, análisis, investigación</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-100 p-10 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-black mb-4">Requisitos Específicos por Industria</h3>
                <div className="space-y-6 text-sm text-slate-700">
                  <div>
                    <p className="font-bold text-black mb-2">Salud</p>
                    <p>Normativa sanitaria MINSAL, bioseguridad, ventilación HEPA, pisos vinílicos sanitarios, agua filtrada, iluminación quirúrgica (si aplica)</p>
                    <a href="/modular/industrias/salud" className="text-[#DC964E] font-semibold hover:underline block mt-2">
                      Ver soluciones para salud →
                    </a>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-2">Educación</p>
                    <p>Acústica adecuada (aislamiento sonoro), iluminación natural + LED, pizarras/proyectores, mobiliario ergonómico, cumplimiento Superintendencia de Educación</p>
                    <a href="/modular/industrias/educacion" className="text-[#DC964E] font-semibold hover:underline block mt-2">
                      Ver soluciones para educación →
                    </a>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-2">Industrial</p>
                    <p>Ventilación industrial, sistemas de extracción, pisos antideslizantes resistentes a químicos, iluminación LED industrial, normativa ACHS</p>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-2">Despliegue</p>
                    <p><strong>15-45 días</strong> según complejidad y certificaciones requeridas</p>
                  </div>
                </div>
              </div>
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
              ¿Necesitas una solución modular específica?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Conversemos sobre tu proyecto. Te entregamos propuesta técnica en 10 días hábiles con opciones de arriendo y venta.
            </p>

            <div className="mb-12 text-left max-w-2xl mx-auto">
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Evaluación técnica sin costo (visita en terreno incluida)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Propuesta en 10 días hábiles con cronograma y pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Sin compromiso de contrato — evaluamos opciones</span>
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
