'use client';

import { motion } from 'framer-motion';
import ModularHeader from '@/components/layout/ModularHeader';
import IndustrialIcon from '@/components/ui/IndustrialIcon';
import { Mountain, Hammer, Zap, Factory, Store, Heart, GraduationCap, Wheat } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export default function ConstruccionClient() {
  const otherIndustries: { name: string; icon: LucideIcon; url: string }[] = [
    { name: 'Minería', icon: Mountain, url: '/modular/industrias/mineria' },
    { name: 'Energía', icon: Zap, url: '/modular/industrias/energia' },
    { name: 'Industrial', icon: Factory, url: '/modular/industrias/industrial' },
    { name: 'Retail', icon: Store, url: '/modular/industrias/retail' },
    { name: 'Salud', icon: Heart, url: '/modular/industrias/salud' },
    { name: 'Educación', icon: GraduationCap, url: '/modular/industrias/educacion' },
    { name: 'Agricultura', icon: Wheat, url: '/modular/industrias/agricultura' },
  ];

  return (
    <>
      <div className="bg-white">
        <ModularHeader />

        {/* Hero */}
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
            <div className="mb-8 flex justify-center">
              <IndustrialIcon icon={Hammer} size={48} />
            </div>
            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Oficinas de obra, baños y almacenamiento que cumplen.
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#DC964E] mb-16 leading-relaxed max-w-3xl mx-auto">
              Instalación en 7 días. Remoción sin rastro. Arriendo flexible por semanas o meses. Cumplimiento SEC y normativa laboral.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">3-7 DÍAS</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">Instalación rápida</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">Cumplimiento SEC + DS 594</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">18+ MESES</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">Arriendo típico por proyecto</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Pain Points */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Los desafíos de construcción. Nuestras soluciones.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-black mb-4">Necesitas operar YA, no en 6 meses</h3>
                <p className="text-sm text-slate-600 mb-6 italic">"El proyecto empezó y necesitamos oficinas para 50 personas esta semana. Construcción tradicional toma meses."</p>
                <h4 className="text-sm font-bold text-[#DC964E] mb-3">Cómo lo resolvemos:</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>→ Instalación en <strong>3-7 días</strong> (no 3 meses)</li>
                  <li>→ Arriendo por semanas/meses (no comprar)</li>
                  <li>→ Certificación SEC incluida (no gestionar permisos)</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-black mb-4">Presupuesto ajustado, sin CAPEX disponible</h3>
                <p className="text-sm text-slate-600 mb-6 italic">"No puedo comprar. Necesito arriendo con costos predecibles y remoción al finalizar."</p>
                <h4 className="text-sm font-bold text-[#DC964E] mb-3">Cómo lo resolvemos:</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>→ Arriendo todo incluido (entrega + instalación + remoción)</li>
                  <li>→ Tarifa semanal/mensual fija (sin sorpresas)</li>
                  <li>→ Devuelves cuando terminas (no activo inmovilizado)</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-black mb-4">Cumplimiento laboral y certificación</h3>
                <p className="text-sm text-slate-600 mb-6 italic">"Necesito baños y camarines certificados DS 594. Si no cumplo, la Inspección del Trabajo detiene la obra."</p>
                <h4 className="text-sm font-bold text-[#DC964E] mb-3">Cómo lo resolvemos:</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>→ Cumplimiento DS 594 (higiene y seguridad en el trabajo)</li>
                  <li>→ Certificación SEC eléctrica incluida</li>
                  <li>→ Baños con agua caliente, ventilación forzada, pisos antideslizantes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Solutions */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Soluciones modulares para construcción
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-lg border border-slate-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Oficinas de Obra (10-100 personas)</h3>
                <p className="text-slate-600 mb-6">Espacios administrativos temporales para gestión de proyectos de construcción.</p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-black mb-3">Incluye:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Escritorios, sillas, archivadores (opcional)</li>
                    <li>• Climatización (aire acondicionado + calefacción)</li>
                    <li>• Iluminación LED + conectividad (WiFi, enchufes)</li>
                    <li>• Instalación eléctrica certificada SEC</li>
                    <li>• Salas de reunión equipadas (proyector, pantalla)</li>
                  </ul>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600"><strong>Despliegue:</strong> 3-7 días</p>
                  <p className="text-sm text-slate-600"><strong>Arriendo típico:</strong> 6-24 meses</p>
                </div>
                <a href="/modular/soluciones-modulares" className="inline-block mt-6 text-[#DC964E] font-semibold hover:underline">
                  Ver detalles técnicos →
                </a>
              </div>

              <div className="bg-white p-10 rounded-lg border border-slate-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Baños y Camarines (3-20 unidades)</h3>
                <p className="text-slate-600 mb-6">Instalaciones sanitarias con cumplimiento DS 594 para trabajadores de obra.</p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-black mb-3">Incluye:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Baños modulares (WC + lavamanos)</li>
                    <li>• Camarines con duchas de agua caliente</li>
                    <li>• Lockers individuales para trabajadores</li>
                    <li>• Ventilación forzada industrial</li>
                    <li>• Pisos antideslizantes certificados</li>
                    <li>• Cumplimiento DS 594 (higiene y seguridad)</li>
                  </ul>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600"><strong>Despliegue:</strong> 5-7 días</p>
                  <p className="text-sm text-slate-600"><strong>Capacidad:</strong> 30-200 personas/día</p>
                </div>
              </div>

              <div className="bg-white p-10 rounded-lg border border-slate-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Bodegas y Almacenamiento (50-200 m²)</h3>
                <p className="text-slate-600 mb-6">Almacenamiento seguro para herramientas, materiales y equipos de construcción.</p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-black mb-3">Incluye:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Estructura acero galvanizado resistente</li>
                    <li>• Portones industriales (manuales o automáticos)</li>
                    <li>• Iluminación LED industrial</li>
                    <li>• Piso de hormigón o plataforma elevada</li>
                    <li>• Seguridad: cerraduras, alarma (opcional)</li>
                  </ul>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600"><strong>Despliegue:</strong> 7-15 días</p>
                  <p className="text-sm text-slate-600"><strong>Flexibilidad:</strong> Expansión modular disponible</p>
                </div>
              </div>

              <div className="bg-white p-10 rounded-lg border border-slate-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Comedores y Espacios Comunes</h3>
                <p className="text-slate-600 mb-6">Espacios para descanso y alimentación de trabajadores según normativa laboral.</p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-black mb-3">Incluye:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Mesas y sillas (capacidad 20-100 personas)</li>
                    <li>• Cocina equipada (microondas, hervidor, refrigerador)</li>
                    <li>• Agua potable certificada</li>
                    <li>• Climatización (verano/invierno)</li>
                    <li>• Cumplimiento normativa laboral (espacios mínimos)</li>
                  </ul>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600"><strong>Despliegue:</strong> 7-10 días</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Industries Grid */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Explora otras industrias
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {otherIndustries.map((industry, idx) => (
                <a
                  key={idx}
                  href={industry.url}
                  className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-[#DC964E] hover:shadow-lg transition-all text-center group"
                >
                  <div className="mb-3 flex justify-center">
                    <IndustrialIcon icon={industry.icon} size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-[#DC964E] transition-colors">{industry.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        <section className="py-32 bg-gradient-to-br from-[#DC964E] via-[#BA6347] to-[#DC964E] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              ¿Necesitas módulos para tu obra?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Instalación en 7 días. Arriendo flexible. Remoción al finalizar. Cotización en 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:modular@grupoglobe.cl" className="bg-white text-[#DC964E] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-slate-100 transition-all duration-300 rounded-md">
                Solicitar Cotización
              </a>
              <a href="/modular" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#DC964E] transition-all duration-300 rounded-md">
                Volver a Globe Modular
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
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
