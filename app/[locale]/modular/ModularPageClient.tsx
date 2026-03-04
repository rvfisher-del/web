'use client';

import { motion } from 'framer-motion';
import ModularHeader from '@/components/layout/ModularHeader';
import IndustrialIcon from '@/components/ui/IndustrialIcon';
import { Mountain, Hammer, Zap, Factory, Store, Heart, GraduationCap, Wheat, Layers, Key, Cog } from 'lucide-react';

export default function ModularPageClient() {
  return (
    <>
      <div className="bg-white">
        <ModularHeader />

        {/* Hero Section with Video Background Placeholder */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Video Background - Industrial modular construction */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              aria-label="Globe Modular - Construcción modular industrial"
              title="Globe Modular — Construcción modular industrial"
            >
              <source src="https://if4karbef7lx3xxp.public.blob.vercel-storage.com/Cinematic_B_roll_of_Modular_Construction.mp4" type="video/mp4" />
            </video>
            {/* Dark gradient overlay - ensures white text remains 100% legible */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
            {/* Copper accent overlay */}
            <div className="absolute inset-0 bg-[#DC964E]/10" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Espacios modulares que operan con criterio.
            </h1>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
              {/* Card 1 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg relative">
                <div className="absolute top-4 right-4 text-[#DC964E] text-xl font-bold">+</div>
                <div className="text-4xl font-black text-white mb-2">
                  &lt;90 DÍAS
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Despliegue promedio (desde propuesta hasta operación)
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg relative">
                <div className="absolute top-4 right-4 text-[#DC964E] text-xl font-bold">+</div>
                <div className="text-4xl font-black text-white mb-2">
                  100%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Cumplimiento SEC y normativa vigente
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg relative">
                <div className="absolute top-4 right-4 text-[#DC964E] text-xl font-bold">+</div>
                <div className="text-4xl font-black text-white mb-2">
                  24/7
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Soporte técnico post-instalación
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
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Industries Served Section */}
        <section id="industrias" className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Una solución modular. Múltiples industrias.
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Desde campamentos mineros hasta bodegas industriales.
                <br />
                <br />
                Aplicamos el mismo método canadiense, la misma seriedad técnica y el mismo compromiso de postventa — <strong>sin importar tu industria</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Minería */}
              <div className="bg-white p-8 border border-slate-200 hover:border-t-2 hover:border-t-[#DC964E] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <IndustrialIcon icon={Mountain} size={24} />
                  <h3 className="text-2xl font-bold text-black">Minería</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Campamentos (200-1000 personas), oficinas de proyecto, talleres de mantención, comedores industriales y espacios de recreación.
                </p>
                <p className="text-sm font-semibold text-[#DC964E] mb-4">
                  Experiencia comprobada: Atacama, Antofagasta, Coquimbo — zonas de altura, desierto y clima extremo.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-2">Soluciones típicas:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Campamentos</strong> con dormitorios individuales/compartidos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Oficinas</strong> administrativas y salas de control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Comedores</strong> industriales y espacios de recreación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Talleres</strong> de mantención y bodegas</span>
                    </li>
                  </ul>
                </div>
                <a href="/modular/industrias/mineria" className="text-[#DC964E] font-semibold hover:underline">
                  Ver Soluciones para Minería →
                </a>
              </div>

              {/* Card 2: Construcción */}
              <div className="bg-white p-8 border border-slate-200 hover:border-t-2 hover:border-t-[#DC964E] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <IndustrialIcon icon={Hammer} size={24} />
                  <h3 className="text-2xl font-bold text-black">Construcción</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Oficinas temporales para obra, baños y camarines para trabajadores, bodegas de herramientas y almacenamiento de materiales.
                </p>
                <p className="text-sm font-semibold text-[#DC964E] mb-4">
                  Modelo flexible: Arriendo por semanas o meses, instalación rápida, remoción sin rastro.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-2">Soluciones típicas:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Oficinas de obra</strong> (10-100 personas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Baños y camarines</strong> (3-20 unidades)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Bodegas</strong> y almacenamiento seguro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Comedores</strong> y espacios comunes</span>
                    </li>
                  </ul>
                </div>
                <a href="/modular/industrias/construccion" className="text-[#DC964E] font-semibold hover:underline">
                  Ver Soluciones para Construcción →
                </a>
              </div>

              {/* Card 3: Energía */}
              <div className="bg-white p-8 border border-slate-200 hover:border-t-2 hover:border-t-[#DC964E] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <IndustrialIcon icon={Zap} size={24} />
                  <h3 className="text-2xl font-bold text-black">Energía</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Campamentos para proyectos renovables (solar, eólico), oficinas de proyecto, salas de control y almacenamiento técnico.
                </p>
                <p className="text-sm font-semibold text-[#DC964E] mb-4">
                  Zonas remotas: Despliegue con autonomía energética y manejo de residuos.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-2">Soluciones típicas:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Campamentos</strong> para construcción de parques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Salas de control</strong> y monitoreo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Oficinas</strong> técnicas y administrativas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Almacenes</strong> para equipos y repuestos</span>
                    </li>
                  </ul>
                </div>
                <a href="/modular/industrias/energia" className="text-[#DC964E] font-semibold hover:underline">
                  Ver Soluciones para Energía →
                </a>
              </div>

              {/* Card 4: Industrial */}
              <div className="bg-white p-8 border border-slate-200 hover:border-t-2 hover:border-t-[#DC964E] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <IndustrialIcon icon={Factory} size={24} />
                  <h3 className="text-2xl font-bold text-black">Industrial</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Bodegas y centros de distribución, oficinas administrativas, comedores industriales y espacios de descanso para turnos.
                </p>
                <p className="text-sm font-semibold text-[#DC964E] mb-4">
                  Escalabilidad: Soluciones modulares que crecen con tu operación.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-2">Soluciones típicas:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Bodegas</strong> y almacenes (50-500 m²)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Oficinas</strong> administrativas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Comedores</strong> y salas de descanso</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Talleres</strong> y mantención</span>
                    </li>
                  </ul>
                </div>
                <a href="/modular/industrias/industrial" className="text-[#DC964E] font-semibold hover:underline">
                  Ver Soluciones Industriales →
                </a>
              </div>

              {/* Card 5: Retail */}
              <div className="bg-white p-8 border border-slate-200 hover:border-t-2 hover:border-t-[#DC964E] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <IndustrialIcon icon={Store} size={24} />
                  <h3 className="text-2xl font-bold text-black">Retail</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Tiendas temporales durante renovación, pop-ups estacionales, oficinas de proyecto y almacenamiento seguro.
                </p>
                <p className="text-sm font-semibold text-[#DC964E] mb-4">
                  Estética + velocidad: Instalación rápida, remoción sin rastro.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-2">Soluciones típicas:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Tiendas temporales</strong> (retail construction)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Pop-ups</strong> y eventos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Oficinas</strong> de proyecto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Almacenamiento</strong> seguro</span>
                    </li>
                  </ul>
                </div>
                <a href="/modular/industrias/retail" className="text-[#DC964E] font-semibold hover:underline">
                  Ver Soluciones Retail →
                </a>
              </div>

              {/* Card 6: Salud */}
              <div className="bg-white p-8 border border-slate-200 hover:border-t-2 hover:border-t-[#DC964E] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <IndustrialIcon icon={Heart} size={24} />
                  <h3 className="text-2xl font-bold text-black">Salud</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Clínicas modulares, consultorios médicos, centros de testeo y espacios de atención primaria.
                </p>
                <p className="text-sm font-semibold text-[#DC964E] mb-4">
                  Normativa sanitaria: Cumplimiento completo, limpieza industrial, bioseguridad.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-2">Soluciones típicas:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Clínicas</strong> y consultorios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Centros de testeo</strong> (COVID, otros)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Atención primaria</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Oficinas</strong> administrativas de salud</span>
                    </li>
                  </ul>
                </div>
                <a href="/modular/industrias/salud" className="text-[#DC964E] font-semibold hover:underline">
                  Ver Soluciones Salud →
                </a>
              </div>

              {/* Card 7: Educación */}
              <div className="bg-white p-8 border border-slate-200 hover:border-t-2 hover:border-t-[#DC964E] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <IndustrialIcon icon={GraduationCap} size={24} />
                  <h3 className="text-2xl font-bold text-black">Educación</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Salas de clase temporales, oficinas administrativas, bibliotecas y laboratorios modulares.
                </p>
                <p className="text-sm font-semibold text-[#DC964E] mb-4">
                  Seguridad escolar: Acústica adecuada, espacios adaptados para aprendizaje.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-2">Soluciones típicas:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Salas de clase</strong> (expansión o renovación)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Oficinas</strong> administrativas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Bibliotecas</strong> y laboratorios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Espacios</strong> comunes y recreación</span>
                    </li>
                  </ul>
                </div>
                <a href="/modular/industrias/educacion" className="text-[#DC964E] font-semibold hover:underline">
                  Ver Soluciones Educación →
                </a>
              </div>

              {/* Card 8: Agricultura */}
              <div className="bg-white p-8 border border-slate-200 hover:border-t-2 hover:border-t-[#DC964E] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <IndustrialIcon icon={Wheat} size={24} />
                  <h3 className="text-2xl font-bold text-black">Agricultura</h3>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Alojamiento para temporeros, bodegas de packing, oficinas de campo y almacenamiento de insumos.
                </p>
                <p className="text-sm font-semibold text-[#DC964E] mb-4">
                  Cumplimiento laboral: Ley laboral, higiene industrial, durabilidad climática.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-2">Soluciones típicas:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Alojamiento temporero</strong> (cumplimiento laboral)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Bodegas</strong> de packing y refrigeración</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Oficinas</strong> de campo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Almacenamiento</strong> de insumos</span>
                    </li>
                  </ul>
                </div>
                <a href="/modular/industrias/agricultura" className="text-[#DC964E] font-semibold hover:underline">
                  Ver Soluciones Agricultura →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Three Pillars Section */}
        <section id="pilares" className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                ARQUITECTURA COMPLETA — OPERACIÓN CONFIABLE
              </span>
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Tres pilares, un compromiso: Que puedas dormir tranquilo.
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                No vendemos módulos baratos ni arriendos improvisados.
                <br />
                <br />
                Vendemos confiabilidad operativa — ingeniería seria, método canadiense y <strong>postventa que no te deja solo</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Pillar 01: Soluciones Modulares */}
              <div className="bg-white p-10 border-l-4 border-[#DC964E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">01</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Soluciones Modulares para Cada Industria
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Desde campamentos mineros hasta bodegas industriales. Diseño, ingeniería y fabricación con estándar canadiense adaptado a realidad chilena: altura, desierto, frío austral, zonas urbanas.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-3">Portafolio Completo:</p>
                  <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Campamentos y Dormitorios:</strong> 50-1000 personas, individuales/compartidos, recreación y comedores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Oficinas y Espacios de Trabajo:</strong> Administrativas, salas de reunión, control, capacitación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Baños y Camarines:</strong> 3-20 unidades, duchas, cumplimiento laboral</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Bodegas y Almacenamiento:</strong> 50-500 m², logística, distribución, herramientas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Módulos Especializados:</strong> Clínicas, salas de clase, talleres, laboratorios</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-3">Key Benefits:</p>
                  <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Diseño estructural, eléctrico, sanitario y HVAC integrado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Fabricación modular con control de calidad en planta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Instalación en <strong>3-90 días</strong> según complejidad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Certificación SEC y permisos gestionados llave en mano</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Documentación completa (as-builts, manuales O&M)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-[#DC964E] font-semibold mb-6">
                  → <strong>Lo que significa:</strong> No importa tu industria — aplicamos el mismo rigor técnico, la misma ingeniería seria y la misma postventa confiable.
                </p>
                <a href="/modular/soluciones-modulares" className="inline-block bg-[#DC964E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#BA6347] transition-colors">
                  Ver Todas las Soluciones Modulares →
                </a>
              </div>

              {/* Pillar 02: Arriendo y Venta Flexible */}
              <div className="bg-white p-10 border-l-4 border-[#DC964E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">02</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Arriendo o Compra: Tú Decides Cómo Operar
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  No todos los proyectos son iguales. Por eso ofrecemos flexibilidad: arriendo corto plazo (semanas/meses), arriendo largo plazo (años con mantención) o compra directa (asset ownership).
                </p>
                <div className="mb-6 space-y-4">
                  <div>
                    <p className="text-sm font-bold text-black mb-2">1. Arriendo Corto Plazo (Semanas/Meses)</p>
                    <ul className="space-y-1 text-sm text-slate-700 leading-relaxed pl-4">
                      <li><strong>Ideal para:</strong> Proyectos temporales, construcción, eventos, expansiones cortas</li>
                      <li><strong>Incluye:</strong> Entrega, instalación, mantención básica, remoción</li>
                      <li><strong>Beneficio:</strong> Cero CAPEX, flexibilidad total, full-service</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black mb-2">2. Arriendo Largo Plazo (Años)</p>
                    <ul className="space-y-1 text-sm text-slate-700 leading-relaxed pl-4">
                      <li><strong>Ideal para:</strong> Campamentos mineros, proyectos energía, operaciones industriales</li>
                      <li><strong>Incluye:</strong> Ingeniería, instalación, mantención preventiva + correctiva, modificaciones</li>
                      <li><strong>Beneficio:</strong> Costos predecibles, soporte continuo, upgrades incluidos</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black mb-2">3. Venta (Compra Directa)</p>
                    <ul className="space-y-1 text-sm text-slate-700 leading-relaxed pl-4">
                      <li><strong>Ideal para:</strong> Instalaciones permanentes, cuando se desea asset ownership</li>
                      <li><strong>Incluye:</strong> Ingeniería, fabricación, instalación, certificación, garantía, documentación</li>
                      <li><strong>Beneficio:</strong> Activo propio, customización total, valor largo plazo</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black mb-2">4. Ingeniería + Construcción (Llave en Mano)</p>
                    <ul className="space-y-1 text-sm text-slate-700 leading-relaxed pl-4">
                      <li><strong>Ideal para:</strong> Proyectos complejos, multi-edificio, diseño custom</li>
                      <li><strong>Incluye:</strong> Análisis de sitio, ingeniería completa, permisos, fabricación, montaje, certificación</li>
                      <li><strong>Beneficio:</strong> Single point of responsibility, compliance 100%, diseño a medida</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-[#DC964E] font-semibold mb-6">
                  → <strong>Lo que significa:</strong> Adaptamos el modelo de negocio a tu proyecto — no al revés.
                </p>
                <a href="/modular/arriendo-venta" className="inline-block bg-[#DC964E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#BA6347] transition-colors">
                  Ver Opciones de Arriendo y Venta →
                </a>
              </div>

              {/* Pillar 03: Ingeniería y Mantención */}
              <div className="bg-white p-10 border-l-4 border-[#DC964E] hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">03</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Ingeniería Seria + Mantención Confiable
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  No solo construimos — mantenemos.
                  <br /><br />
                  Aplicamos ingeniería con método canadiense, gestionamos certificación SEC completa y ofrecemos contratos de mantención para que nunca te quedes solo después de la instalación.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-3">1. Ingeniería con Método</p>
                  <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Estructural:</strong> Sísmica, viento, nieve, terreno extremo (desierto, altura)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Eléctrica:</strong> Power, backup, distribución, iluminación (certificación SEC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Sanitaria:</strong> Agua potable, aguas servidas, tratamiento, cumplimiento normativo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>HVAC:</strong> Climatización para desierto, altura, frío austral, zonas urbanas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Coordinación Modular:</strong> Fabricación en planta + montaje en sitio</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-3">2. Certificación y Cumplimiento</p>
                  <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span>Certificación SEC (instalaciones eléctricas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span>Permisos medioambientales (RCA, DIA según proyecto)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span>Permisos municipales y edificación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span>Certificados de recepción final</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span>Cumplimiento normativo sectorial (minería, salud, educación, laboral)</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-bold text-black mb-3">3. Contratos de Mantención</p>
                  <p className="text-sm text-slate-700 mb-3 italic">"No te dejamos solo después de la instalación."</p>
                  <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Preventivo Básico:</strong> Inspección mensual + respuesta emergencia &lt;8H (urbano)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Preventivo Premium:</strong> Inspección quincenal + respuesta &lt;4H (minería/energía)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC964E] flex-shrink-0">•</span>
                      <span><strong>Full Service:</strong> Preventivo + correctivo + gestión de repuestos + reportes de compliance</span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-700 mt-3"><strong>Tiempos de Respuesta:</strong></p>
                  <ul className="space-y-1 text-sm text-slate-700 leading-relaxed pl-4">
                    <li>Zonas urbanas (Santiago, Valparaíso, Concepción): <strong>&lt;2 horas</strong></li>
                    <li>Construcción y retail: <strong>&lt;8 horas</strong></li>
                    <li>Minería y energía remotas: <strong>&lt;4 horas</strong> (con técnico en faena)</li>
                  </ul>
                </div>
                <p className="text-sm text-[#DC964E] font-semibold mb-6">
                  → <strong>Lo que significa:</strong> Cuando dices "necesito expandir" o "algo falló" — hay alguien que responde, resuelve y documenta. <strong>No improvisamos. No desaparecemos.</strong>
                </p>
                <a href="/modular/ingenieria-mantencion" className="inline-block bg-[#DC964E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#BA6347] transition-colors">
                  Ver Ingeniería y Mantención →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Section 4: How We Work */}
        <section id="proceso" className="py-48 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                De análisis a operación continua: Acompañamiento completo.
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Una oficina temporal o un campamento para 500 personas.
                <br />
                <br />
                Aplicamos el mismo proceso estructurado sin importar el tamaño.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 relative">
              {/* Step 01 */}
              <div className="bg-white p-8 border-t-4 border-[#DC964E] shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-[#DC964E] mb-4">01</div>
                <h3 className="text-xl font-bold text-black mb-3">Análisis y Propuesta</h3>
                <p className="text-sm font-bold text-[#DC964E] mb-4">(3-7 días)</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Evaluación de necesidades (industria, uso, ubicación, timeline, presupuesto)</li>
                  <li>• Recomendación técnica (arriendo vs venta, tipo de módulo, configuración)</li>
                  <li>• Propuesta comercial con opciones y cronograma</li>
                  <li>• <strong>Sin costo, sin compromiso</strong></li>
                </ul>
              </div>

              {/* Step 02 */}
              <div className="bg-white p-8 border-t-4 border-[#DC964E] shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-[#DC964E] mb-4">02</div>
                <h3 className="text-xl font-bold text-black mb-3">Ingeniería y Permisos</h3>
                <p className="text-sm font-bold text-[#DC964E] mb-4">(10-30 días según complejidad)</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Diseño estructural, eléctrico, sanitario, HVAC</li>
                  <li>• Gestión de permisos (SEC, medioambientales, municipales)</li>
                  <li>• Coordinación con cliente, autoridades y proveedores</li>
                  <li>• Aprobación de planos y presupuesto final</li>
                </ul>
              </div>

              {/* Step 03 */}
              <div className="bg-white p-8 border-t-4 border-[#DC964E] shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-[#DC964E] mb-4">03</div>
                <h3 className="text-xl font-bold text-black mb-3">Fabricación y Logística</h3>
                <p className="text-sm font-bold text-[#DC964E] mb-4">(20-60 días según proyecto)</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Fabricación modular en planta con control de calidad</li>
                  <li>• Preparación de terreno en sitio (si aplica)</li>
                  <li>• Coordinación logística (transporte especial si es remoto)</li>
                  <li>• Inspección previa a despacho</li>
                </ul>
              </div>

              {/* Step 04 */}
              <div className="bg-white p-8 border-t-4 border-[#DC964E] shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-[#DC964E] mb-4">04</div>
                <h3 className="text-xl font-bold text-black mb-3">Instalación y Certificación</h3>
                <p className="text-sm font-bold text-[#DC964E] mb-4">(3-30 días según escala)</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Montaje en sitio con supervisión técnica continua</li>
                  <li>• Pruebas de sistemas (eléctrico, agua, HVAC, estructural)</li>
                  <li>• Certificación SEC y tramitación de recepción final</li>
                  <li>• Entrega de documentación (as-builts, manuales, certificados)</li>
                </ul>
              </div>

              {/* Step 05 */}
              <div className="bg-white p-8 border-t-4 border-[#DC964E] shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-[#DC964E] mb-4">05</div>
                <h3 className="text-xl font-bold text-black mb-3">Mantención y Soporte</h3>
                <p className="text-sm font-bold text-[#DC964E] mb-4">(Opcional, pero recomendado)</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Contrato de mantención preventiva + correctiva (si aplica)</li>
                  <li>• Soporte técnico 24/7 para emergencias</li>
                  <li>• Inspecciones programadas según nivel de servicio</li>
                  <li>• Modificaciones y expansiones con misma seriedad técnica</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Section 5: Use Cases */}
        <section id="casos-de-uso" className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Soluciones probadas en múltiples industrias.
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Cada proyecto es distinto. Misma seriedad técnica, mismo compromiso de postventa.
              </p>
            </div>

            <div className="space-y-12">
              {/* Use Case 1: Campamento Minero */}
              <div className="bg-white p-10 border border-slate-200 hover:border-[#DC964E] hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-black">Campamento Minero (400 personas, Atacama)</h3>
                  <div className="flex items-center gap-2">
                    <IndustrialIcon icon={Mountain} size={16} />
                    <span className="text-sm text-slate-500">Minería</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-2 text-sm text-slate-600 mb-6">
                  <div><strong>Cliente:</strong> Contratista EPCM para expansión minera</div>
                  <div><strong>Industria:</strong> Minería</div>
                  <div><strong>Timeline:</strong> 60 días hasta operación completa</div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-black mb-3">Desafío</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Campamento para 400 trabajadores en zona desértica (Atacama, 3200 msnm)</li>
                      <li>• Certificación SEC completa antes de ocupación</li>
                      <li>• Clima extremo (calor diurno +35°C, frío nocturno -5°C)</li>
                      <li>• Sin infraestructura de servicios (agua, electricidad, alcantarillado)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-3">Solución</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Campamento modular con 100 dormitorios (4 personas/unidad)</li>
                      <li>• Comedor industrial (capacidad 200 personas por turno)</li>
                      <li>• Oficinas administrativas (50 personas)</li>
                      <li>• Sala de recreación con TV, juegos, gimnasio</li>
                      <li>• Planta de tratamiento de aguas servidas autónoma</li>
                      <li>• Generación eléctrica con respaldo diésel</li>
                      <li>• Sistema HVAC para clima extremo (altura + desierto)</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-black mb-3">Resultado</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Operación en marcha en <strong>55 días</strong> (5 días antes del plazo)</li>
                    <li>• Certificación SEC aprobada sin observaciones</li>
                    <li>• Contrato de mantención integral por 24 meses (preventivo + correctivo)</li>
                    <li>• Cero incidentes de seguridad durante instalación y primeros 12 meses de operación</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#DC964E] pl-6 py-3 bg-slate-50">
                  <p className="text-slate-700 leading-relaxed">
                    "Cumplieron el plazo, la certificación salió a la primera y cuando algo falla (que es raro), responden en menos de 4 horas. Exactamente lo que necesitábamos."
                  </p>
                  <p className="text-sm text-slate-500 mt-2">— Cliente, Contratista EPCM</p>
                </div>
              </div>

              {/* Use Case 2: Oficinas Temporales Construcción */}
              <div className="bg-white p-10 border border-slate-200 hover:border-[#DC964E] hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-black">Oficinas Temporales Construcción (Santiago)</h3>
                  <div className="flex items-center gap-2">
                    <IndustrialIcon icon={Hammer} size={16} />
                    <span className="text-sm text-slate-500">Construcción</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-2 text-sm text-slate-600 mb-6">
                  <div><strong>Cliente:</strong> Constructora de edificios residenciales</div>
                  <div><strong>Industria:</strong> Construcción</div>
                  <div><strong>Timeline:</strong> Proyecto 18 meses</div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-black mb-3">Desafío</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Necesita oficinas + baños para 50 personas durante obra</li>
                      <li>• Presupuesto ajustado, no puede comprar</li>
                      <li>• Instalación en 10 días (obra ya empezó)</li>
                      <li>• Remoción al finalizar proyecto sin dejar rastro</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-3">Solución</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Arriendo corto plazo (18 meses)</li>
                      <li>• 3 módulos de oficinas (total 80 m²)</li>
                      <li>• 2 módulos de baños/camarines (12 unidades sanitarias)</li>
                      <li>• Instalación en <strong>7 días hábiles</strong></li>
                      <li>• Mantención básica incluida (inspección mensual)</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-black mb-3">Resultado</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Instalación completada antes del plazo</li>
                    <li>• Costos mensuales predecibles (sin sorpresas)</li>
                    <li>• Remoción al mes 18 en 2 días, terreno limpio</li>
                    <li>• Cliente contrató nuevamente para siguiente proyecto</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#DC964E] pl-6 py-3 bg-slate-50">
                  <p className="text-slate-700 leading-relaxed">
                    "Necesitábamos algo rápido y confiable. Lo tuvimos en una semana y funcionó perfecto los 18 meses. Cero dramas."
                  </p>
                  <p className="text-sm text-slate-500 mt-2">— Cliente, Constructora</p>
                </div>
              </div>

              {/* Use Case 3: Bodega Industrial */}
              <div className="bg-white p-10 border border-slate-200 hover:border-[#DC964E] hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-black">Bodega Industrial (Logística, Valparaíso)</h3>
                  <div className="flex items-center gap-2">
                    <IndustrialIcon icon={Factory} size={16} />
                    <span className="text-sm text-slate-500">Industrial</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-2 text-sm text-slate-600 mb-6">
                  <div><strong>Cliente:</strong> Empresa de logística y distribución</div>
                  <div><strong>Industria:</strong> Industrial</div>
                  <div><strong>Timeline:</strong> 30 días hasta operación</div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-black mb-3">Desafío</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Necesita expansión urgente de capacidad de almacenamiento</li>
                      <li>• Construcción tradicional tomaría 6-9 meses</li>
                      <li>• Requiere asset ownership (compra, no arriendo)</li>
                      <li>• Cumplimiento SEC y permisos municipales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-3">Solución</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Venta de bodega modular 300 m² (estructura metálica, techo aislado, portones industriales)</li>
                      <li>• Diseño con capacidad de expansión futura (módulos adicionales)</li>
                      <li>• Instalación eléctrica certificada SEC (iluminación LED industrial, enchufes industriales)</li>
                      <li>• Gestión de permisos municipales llave en mano</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-black mb-3">Resultado</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Bodega operativa en <strong>28 días</strong> (vs 6 meses construcción tradicional)</li>
                    <li>• Certificación SEC y recepción municipal sin observaciones</li>
                    <li>• Asset ownership con garantía 5 años</li>
                    <li>• Cliente expandió con 2 módulos adicionales al año siguiente (misma seriedad técnica)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#DC964E] pl-6 py-3 bg-slate-50">
                  <p className="text-slate-700 leading-relaxed">
                    "No podíamos esperar 6 meses. En menos de un mes teníamos la bodega funcionando con todos los papeles en orden. Y cuando quisimos expandir, fue igual de rápido."
                  </p>
                  <p className="text-sm text-slate-500 mt-2">— Cliente, Empresa de Logística</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Section 6: Trust Signals */}
        <section id="confianza" className="py-48 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] mb-6" style={{ letterSpacing: '-0.05em' }}>
                Confianza construida con norma y método.
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-300 leading-relaxed max-w-3xl mx-auto">
                No somos los más baratos. Somos los más serios.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="text-6xl font-black text-[#DC964E] mb-4">50+</div>
                <p className="text-base text-slate-300 leading-relaxed">
                  Proyectos completados en Chile (minería, construcción, energía, industrial)
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <div className="text-6xl font-black text-[#DC964E] mb-4">8</div>
                <p className="text-base text-slate-300 leading-relaxed">
                  Industrias servidas con el mismo rigor técnico y postventa
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <div className="text-6xl font-black text-[#DC964E] mb-4">100%</div>
                <p className="text-base text-slate-300 leading-relaxed">
                  Cumplimiento SEC y normativa vigente en todos los proyectos
                </p>
              </div>

              {/* Stat 4 */}
              <div className="text-center">
                <div className="text-6xl font-black text-[#DC964E] mb-4">24/7</div>
                <p className="text-base text-slate-300 leading-relaxed">
                  Soporte técnico disponible (emergencias resueltas, no "te llamamos mañana")
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zonas de Operación</h3>
                <p className="text-base leading-relaxed">
                  Arica a Punta Arenas. Experiencia comprobada en zonas extremas: desierto de Atacama, altura (hasta 4500 msnm), frío austral, zonas urbanas densas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Clientes Actuales</h3>
                <ul className="space-y-2 text-base">
                  <li>• <strong>Minería:</strong> Contratistas EPCM, operadores mineros (cobre, litio, oro)</li>
                  <li>• <strong>Construcción:</strong> Constructoras, contratistas generales, proyectos inmobiliarios</li>
                  <li>• <strong>Energía:</strong> Proyectos renovables (solar, eólico), oil & gas</li>
                  <li>• <strong>Industrial:</strong> Logística, manufactura, distribución, almacenamiento</li>
                  <li>• <strong>Retail, Salud, Educación, Agricultura:</strong> Proyectos específicos con misma seriedad técnica</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Section 7: Positioning */}
        <section id="posicionamiento" className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Hacemos que operar sea confiable.
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
                Y no solo con máquinas. Con norma. Con método. Con seguridad. Con trazabilidad.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-20 space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Globe Modular entiende que cada industria tiene sus propias exigencias — pero todas comparten una necesidad fundamental: <strong>confiabilidad operativa</strong>.
              </p>
              <p>
                No importa si necesitas un campamento minero para 500 personas o una oficina temporal para 10. Si es para construcción, energía, logística o salud.
              </p>
              <p className="text-2xl font-light text-black">
                La pregunta siempre es la misma:
              </p>
              <p className="text-3xl font-bold text-black">
                ¿Puedo confiar en que funcionará cuando lo necesite?
              </p>
              <p className="text-2xl font-bold text-[#DC964E]">
                Nuestra respuesta es siempre la misma: Sí. Porque no improvisamos.
              </p>
              <div className="border-t border-slate-200 pt-8 mt-8 space-y-4">
                <p>
                  Aplicamos <strong>ingeniería seria</strong> — estándar canadiense adaptado a realidad chilena (desierto, altura, frío, urbano).
                </p>
                <p>
                  Ofrecemos <strong>flexibilidad en terreno</strong> — cuando el plano no coincide con la realidad, respondemos con responsabilidad técnica, no con improvisación que te deja expuesto.
                </p>
                <p>
                  Entregamos <strong>postventa certificada</strong> — no te dejamos solo después de la instalación. Mantención, soporte 24/7, modificaciones certificadas.
                </p>
              </div>
              <p className="text-xl font-bold text-black pt-6">
                Confiabilidad no es un accidente. Es el resultado de aplicar método, cumplir norma y estar presente cuando más importa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Differentiator 1 */}
              <div className="bg-white p-8 border border-slate-200 hover:border-[#DC964E] hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Método Canadiense, Realidad Chilena</h3>
                <p className="text-base text-slate-700 leading-relaxed mb-6">
                  No copiamos y pegamos soluciones internacionales.
                  <br /><br />
                  Aplicamos estándar canadiense (CSA, NBC) adaptado a normativa chilena (SEC, NCh) y a la realidad del terreno: altura extrema en Atacama, frío austral en Magallanes, densidad urbana en Santiago.
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-sm font-bold text-[#DC964E]">Significa:</p>
                  <p className="text-sm text-slate-700">
                    Ingeniería que funciona en Chile — no en teoría, sino en terreno.
                  </p>
                </div>
              </div>

              {/* Differentiator 2 */}
              <div className="bg-white p-8 border border-slate-200 hover:border-[#DC964E] hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Multi-Industria, Mismo Rigor</h3>
                <p className="text-base text-slate-700 leading-relaxed mb-6">
                  Competidores se especializan en una industria.
                  <br /><br />
                  Nosotros aplicamos el mismo método técnico en minería, construcción, energía, industrial y más. Un gerente de construcción merece la misma seriedad técnica que un gerente minero.
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-sm font-bold text-[#DC964E]">Significa:</p>
                  <p className="text-sm text-slate-700">
                    No eres "proyecto secundario" porque no eres minería. Eres cliente con mismas exigencias de calidad.
                  </p>
                </div>
              </div>

              {/* Differentiator 3 */}
              <div className="bg-white p-8 border border-slate-200 hover:border-[#DC964E] hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Postventa Seria, No Marketing</h3>
                <p className="text-base text-slate-700 leading-relaxed mb-6">
                  <em>"No me deje sola cuando ya está armado el campamento."</em>
                  <br /><br />
                  Lo escuchamos.
                  <br /><br />
                  Por eso ofrecemos contratos de mantención preventiva + correctiva, soporte técnico 24/7 y modificaciones certificadas.
                  <br /><br />
                  <strong>No vendemos y desaparecemos.</strong>
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-sm font-bold text-[#DC964E]">Significa:</p>
                  <p className="text-sm text-slate-700">
                    Cuando necesitas expandir, modificar o resolver una emergencia — hay alguien que responde, no un buzón de voz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Section 8: Arriendo vs Venta */}
        <section id="arriendo-venta" className="py-48 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                ¿Arriendo o compra? Depende de tu proyecto.
              </h2>
            </div>

            <div className="bg-white border border-slate-200 overflow-hidden mb-12">
              <div className="grid md:grid-cols-2">
                <div className="bg-[#DC964E] text-white p-6">
                  <h3 className="text-2xl font-bold mb-4">Arriendo Mejor Cuando...</h3>
                </div>
                <div className="bg-[#DC964E] text-white p-6">
                  <h3 className="text-2xl font-bold mb-4">Venta Mejor Cuando...</h3>
                </div>
              </div>
              <div className="grid md:grid-cols-2">
                <div className="p-6 border-r border-slate-200">
                  <ul className="space-y-4 text-base text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Proyecto temporal (semanas/meses)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Presupuesto limitado (OPEX, no CAPEX)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Necesitas flexibilidad (devolver al terminar)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Quieres full-service (mantención incluida)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>No quieres gestionar permisos/certificación</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 text-base text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Instalación permanente (años)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Deseas asset ownership</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Quieres customización total</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Prefieres gestión propia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span>Tienes equipo para gestionar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-black mb-6">When in Doubt: Cotiza Ambas Opciones</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Hacemos análisis de TCO (Total Cost of Ownership) para ayudarte a decidir.
                <br /><br />
                A veces arriendo largo plazo cuesta más que comprar. Otras veces, arriendo es más inteligente.
                <br /><br />
                <strong>Te mostramos los números.</strong>
              </p>
              <a href="/contacto" className="inline-block bg-[#DC964E] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#BA6347] transition-colors">
                Cotiza Arriendo y Venta →
              </a>
            </div>
          </div>
        </section>

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Section 9: FAQ */}
        <section id="faq" className="py-48 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Preguntas frecuentes
              </h2>
            </div>

            <div className="space-y-8">
              {/* FAQ 1 */}
              <div className="border-b border-slate-200 pb-8">
                <h3 className="text-xl font-bold text-black mb-3">¿Qué industrias atienden?</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Minería, construcción, energía, industrial, retail, salud, educación y agricultura. Nuestra ingeniería y método se adaptan a distintos sectores — aplicamos el mismo rigor técnico sin importar la industria.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="border-b border-slate-200 pb-8">
                <h3 className="text-xl font-bold text-black mb-3">¿Cuál es la diferencia entre arriendo y venta?</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  <strong>Arriendo</strong> = no CAPEX, full-service (mantención incluida), flexibilidad (devuelves al terminar).
                  <br />
                  <strong>Venta</strong> = asset ownership, customización total, valor largo plazo.
                  <br /><br />
                  Depende de tu proyecto, presupuesto y timeline. Cotizamos ambas opciones para que decidas informado.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="border-b border-slate-200 pb-8">
                <h3 className="text-xl font-bold text-black mb-3">¿Cuánto tarda instalar un módulo?</h3>
                <div className="text-base text-slate-700 leading-relaxed space-y-2">
                  <p><strong>Oficinas simples:</strong> 3-7 días.</p>
                  <p><strong>Baños/camarines:</strong> 5-10 días.</p>
                  <p><strong>Bodegas:</strong> 15-30 días.</p>
                  <p><strong>Campamentos complejos:</strong> 60-90 días.</p>
                  <p className="pt-2">Depende de tamaño, complejidad, permisos y ubicación.</p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="border-b border-slate-200 pb-8">
                <h3 className="text-xl font-bold text-black mb-3">¿Incluyen mantención?</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  <strong>Opcional.</strong> Ofrecemos tres niveles:
                </p>
                <ul className="mt-3 space-y-2 text-base text-slate-700 pl-4">
                  <li>• <strong>Básico:</strong> Inspección mensual + emergencias &lt;8H (urbano)</li>
                  <li>• <strong>Premium:</strong> Inspección quincenal + emergencias &lt;4H (remoto)</li>
                  <li>• <strong>Full Service:</strong> Preventivo + correctivo + repuestos + compliance</li>
                </ul>
                <p className="mt-3 text-base text-slate-700">
                  En arriendo largo plazo, mantención básica suele incluirse.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="border-b border-slate-200 pb-8">
                <h3 className="text-xl font-bold text-black mb-3">¿Trabajan en todo Chile?</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Sí. Desde Arica hasta Punta Arenas. Experiencia comprobada en:
                </p>
                <ul className="mt-3 space-y-2 text-base text-slate-700 pl-4">
                  <li>• Desierto de Atacama (calor extremo, altura 4500 msnm)</li>
                  <li>• Zonas australes (frío, viento, nieve)</li>
                  <li>• Zonas urbanas densas (Santiago, Valparaíso, Concepción)</li>
                  <li>• Zonas remotas sin servicios (autonomía energética + tratamiento)</li>
                </ul>
              </div>

              {/* FAQ 6 */}
              <div className="border-b border-slate-200 pb-8">
                <h3 className="text-xl font-bold text-black mb-3">¿Qué certificaciones tienen?</h3>
                <div className="text-base text-slate-700 leading-relaxed space-y-2">
                  <p><strong>Certificación SEC</strong> para todas las instalaciones eléctricas.</p>
                  <p><strong>Permisos municipales</strong> de edificación y recepción final.</p>
                  <p><strong>Permisos medioambientales</strong> (RCA, DIA) según proyecto.</p>
                  <p><strong>Cumplimiento normativo sectorial</strong> (minería, salud, educación, laboral).</p>
                  <p className="pt-2">Gestionamos llave en mano — tú no tienes que perseguir papeles.</p>
                </div>
              </div>

              {/* FAQ 7 */}
              <div className="border-b border-slate-200 pb-8">
                <h3 className="text-xl font-bold text-black mb-3">¿Por qué "estándar canadiense"?</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Porque aplicamos método, norma y trazabilidad del sistema canadiense (CSA, NBC) adaptado a normativa chilena (SEC, NCh). No es marketing — es ingeniería con criterio en lugar de improvisación. Cada decisión técnica tiene respaldo documental.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="border-b border-slate-200 pb-8">
                <h3 className="text-xl font-bold text-black mb-3">¿Qué pasa si necesito expandir después?</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Diseñamos pensando en expansión futura. Si necesitas agregar módulos o modificar, hacemos ingeniería de modificación con la misma seriedad que el proyecto original — incluyendo certificaciones actualizadas. No improvisamos expansiones.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="pb-8">
                <h3 className="text-xl font-bold text-black mb-3">¿Cuál es su diferencia vs competidores?</h3>
                <div className="text-base text-slate-700 leading-relaxed space-y-3">
                  <p><strong>vs Low-cost:</strong> No somos los más baratos. Somos los más serios (ingeniería, certificación, postventa).</p>
                  <p><strong>vs Especializados solo minería:</strong> Aplicamos mismo rigor en todas las industrias (no eres "proyecto secundario").</p>
                  <p><strong>vs Venden y desaparecen:</strong> Ofrecemos mantención integral y soporte 24/7 (no te dejamos solo).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread - Vertical Connector */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Section 10: CTA */}
        <section id="contacto-cta" className="py-32 bg-gradient-to-r from-[#DC964E] via-[#BA6347] to-[#DC964E] text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] mb-6" style={{ letterSpacing: '-0.05em' }}>
              ¿Necesitas espacios modulares confiables?
            </h2>
            <p className="text-[clamp(18px,2vw,24px)] font-light leading-relaxed mb-12">
              Conversemos sobre tu proyecto. Sin costo, sin compromiso, con propuesta técnica seria.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6">Te ofrecemos:</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-lg mb-2">Evaluación técnica sin costo</p>
                    <p className="text-sm font-light">(visita a sitio incluida si estás en RM, Valparaíso, Coquimbo, Atacama, Antofagasta)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-lg mb-2">Propuesta en 10 días hábiles</p>
                    <p className="text-sm font-light">con opciones (arriendo vs venta), cronograma y pricing preliminar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-lg mb-2">Sin compromiso de contrato</p>
                    <p className="text-sm font-light">entendemos que necesitas evaluar opciones antes de decidir</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-lg mb-12 text-left">
              <h3 className="text-2xl font-bold mb-6">Qué necesitamos saber:</h3>
              <ul className="space-y-3 text-base">
                <li>• ¿Qué industria? (minería, construcción, energía, industrial, otro)</li>
                <li>• ¿Qué necesitas? (campamento, oficinas, baños, bodegas, otro)</li>
                <li>• ¿Cuántas personas o m²?</li>
                <li>• ¿Dónde? (ciudad/región/zona remota)</li>
                <li>• ¿Cuándo? (timeline del proyecto)</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href="/contacto" 
                className="inline-block bg-white text-[#DC964E] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all"
              >
                Solicitar Evaluación Técnica
              </a>
              <a 
                href="/contacto" 
                className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Cotizar Ahora
              </a>
            </div>

            <div className="border-t border-white/20 pt-10 grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-bold mb-4">Contacto</h4>
                <p className="text-base mb-2">
                  <strong>Email:</strong> modular@grupoglobe.cl
                </p>
                <p className="text-base mb-2">
                  <strong>Teléfono:</strong> +56 2 XXXX XXXX
                </p>
                <p className="text-base mb-2">
                  <strong>WhatsApp:</strong> +56 9 XXXX XXXX
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Ubicación</h4>
                <p className="text-base mb-2">
                  <strong>Oficinas:</strong> Santiago, Chile
                </p>
                <p className="text-base mb-2">
                  <strong>Operaciones:</strong> Antofagasta, Atacama, Coquimbo, Valparaíso, Región Metropolitana
                </p>
                <p className="text-base">
                  <strong>Horario:</strong> Lunes a Viernes, 08:30 - 18:00 | Emergencias 24/7
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Footer */}
        <footer className="bg-slate-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Logo and Tagline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#DC964E] mb-3">Globe Modular</h2>
              <p className="text-base text-slate-400">
                Una empresa de Grupo Globe. Hacemos que operar sea confiable.
              </p>
            </div>

            {/* Navigation Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
              {/* Column 1: Soluciones */}
              <div>
                <h3 className="text-sm font-bold text-[#DC964E] uppercase tracking-wider mb-4">Soluciones</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="/modular/soluciones/campamentos" className="hover:text-white transition-colors">Campamentos y Dormitorios</a></li>
                  <li><a href="/modular/soluciones/oficinas" className="hover:text-white transition-colors">Oficinas y Espacios de Trabajo</a></li>
                  <li><a href="/modular/soluciones/banos" className="hover:text-white transition-colors">Baños y Camarines</a></li>
                  <li><a href="/modular/soluciones/bodegas" className="hover:text-white transition-colors">Bodegas y Almacenamiento</a></li>
                  <li><a href="/modular/soluciones/especializados" className="hover:text-white transition-colors">Módulos Especializados</a></li>
                </ul>
              </div>

              {/* Column 2: Industrias */}
              <div>
                <h3 className="text-sm font-bold text-[#DC964E] uppercase tracking-wider mb-4">Industrias</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="/modular/industrias/mineria" className="hover:text-white transition-colors">Minería</a></li>
                  <li><a href="/modular/industrias/construccion" className="hover:text-white transition-colors">Construcción</a></li>
                  <li><a href="/modular/industrias/energia" className="hover:text-white transition-colors">Energía</a></li>
                  <li><a href="/modular/industrias/industrial" className="hover:text-white transition-colors">Industrial</a></li>
                  <li><a href="/modular/industrias/retail" className="hover:text-white transition-colors">Retail</a></li>
                  <li><a href="/modular/industrias/salud" className="hover:text-white transition-colors">Salud</a></li>
                  <li><a href="/modular/industrias/educacion" className="hover:text-white transition-colors">Educación</a></li>
                  <li><a href="/modular/industrias/agricultura" className="hover:text-white transition-colors">Agricultura</a></li>
                </ul>
              </div>

              {/* Column 3: Servicios */}
              <div>
                <h3 className="text-sm font-bold text-[#DC964E] uppercase tracking-wider mb-4">Servicios</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="/modular/servicios/arriendo-corto-plazo" className="hover:text-white transition-colors">Arriendo Corto Plazo</a></li>
                  <li><a href="/modular/servicios/arriendo-largo-plazo" className="hover:text-white transition-colors">Arriendo Largo Plazo</a></li>
                  <li><a href="/modular/servicios/venta" className="hover:text-white transition-colors">Venta</a></li>
                  <li><a href="/modular/servicios/ingenieria" className="hover:text-white transition-colors">Ingeniería + Construcción</a></li>
                  <li><a href="/modular/servicios/mantencion" className="hover:text-white transition-colors">Mantención Integral</a></li>
                </ul>
              </div>

              {/* Column 4: Grupo Globe */}
              <div>
                <h3 className="text-sm font-bold text-[#DC964E] uppercase tracking-wider mb-4">Grupo Globe</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
                  <li><a href="/power" className="hover:text-white transition-colors">Power</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="/empresas" className="hover:text-white transition-colors">Empresas</a></li>
                  <li><a href="/contacto" className="hover:text-white transition-colors">Contacto</a></li>
                </ul>
              </div>

              {/* Column 5: Contacto */}
              <div>
                <h3 className="text-sm font-bold text-[#DC964E] uppercase tracking-wider mb-4">Contacto</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li>modular@grupoglobe.cl</li>
                  <li>+56 2 XXXX XXXX</li>
                  <li>Santiago, Chile</li>
                </ul>
              </div>

              {/* Column 6: Legal */}
              <div>
                <h3 className="text-sm font-bold text-[#DC964E] uppercase tracking-wider mb-4">Legal</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                  <li><a href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                  <li><a href="/cookies" className="hover:text-white transition-colors">Política de Cookies</a></li>
                </ul>
              </div>
            </div>

            {/* Social Proof Bar */}
            <div className="border-t border-slate-800 pt-8 pb-8">
              <p className="text-sm text-slate-500 text-center leading-relaxed">
                Clientes actuales en minería (Antofagasta, Atacama), construcción (RM, Valparaíso), energía (Atacama solar), industrial (logística RM), retail, salud y educación.
              </p>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-sm text-slate-500">
                © 2026 Grupo Globe. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
