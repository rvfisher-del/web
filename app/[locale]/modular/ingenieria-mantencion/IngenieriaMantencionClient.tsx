'use client';

import { motion } from 'framer-motion';
import ModularHeader from '@/components/layout/ModularHeader';

export default function IngenieriaMantencionClient() {
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
              Ingeniería seria + mantención confiable = Operación sin sorpresas.
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#DC964E] mb-16 leading-relaxed max-w-3xl mx-auto">
              No solo construimos — mantenemos. Aplicamos ingeniería con método canadiense, gestionamos certificación SEC completa y ofrecemos contratos de mantención para que nunca te quedes solo después de la instalación.
            </p>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Cumplimiento SEC certificado
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">&lt;4H</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Respuesta emergencias (minería/energía)
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">24/7</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Soporte técnico disponible
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Section 01: Ingeniería y Diseño */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">01</div>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                  Ingeniería y Diseño con Método
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Aplicamos estándar canadiense (CSA, NBC) adaptado a normativa chilena (SEC, NCh) y realidad del terreno: desierto, altura, frío austral, zonas urbanas densas.
                </p>
                <p className="text-lg text-[#DC964E] font-semibold mb-8">
                  "Ingeniería que funciona en Chile — no en teoría, sino en terreno."
                </p>
              </div>
              <div className="bg-slate-100 p-10 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-black mb-6">Disciplinas Integradas</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-black mb-2">Estructural</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Diseño sísmico (NCh 433, zona sísmica 2-3)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Resistencia a viento extremo (desierto, altura)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Carga de nieve (zonas australes, alta montaña)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Fundaciones adaptadas a terreno (roca, arena, arcilla)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black mb-2">Eléctrica</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Diseño según NCh 4/2003 (instalaciones de baja tensión)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Power distribution, backup generators, UPS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Iluminación LED industrial con control inteligente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Certificación SEC llave en mano (TE1, TE4, TE6)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black mb-2">Sanitaria</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Agua potable (red pública o planta propia + filtración)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Aguas servidas (alcantarillado o planta tratamiento autónoma)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Cumplimiento DS 594 (higiene y seguridad en el trabajo)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Agua caliente (calefones eléctricos o gas según disponibilidad)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black mb-2">HVAC</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Climatización extremo calor (desierto +40°C)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Climatización extremo frío (austral -15°C, altura -20°C)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Ventilación forzada con filtración de polvo (minería)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Sistemas VRF (eficiencia energética, zonas independientes)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black mb-2">Coordinación Modular</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Fabricación en planta con control de calidad ISO 9001</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Coordinación logística (transporte especial, grúas, accesos)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>Montaje en sitio con supervisión técnica continua</span>
                      </li>
                    </ul>
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

        {/* Section 02: Certificación y Cumplimiento */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="bg-white p-10 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-black mb-6">Gestión de Permisos Llave en Mano</h3>
                <div className="space-y-6 text-sm text-slate-700">
                  <div>
                    <h4 className="font-bold text-black mb-2">Certificación SEC (Superintendencia de Electricidad y Combustibles)</h4>
                    <p className="mb-2">Gestión completa para instalaciones eléctricas:</p>
                    <ul className="space-y-1 pl-4">
                      <li>• TE1 (Declaración de Instalación Eléctrica)</li>
                      <li>• TE4 (Certificado de Instalación Interior)</li>
                      <li>• TE6 (Certificado de Instalación de Servicios Auxiliares)</li>
                      <li>• Protocolos de prueba (continuidad, resistencia aislación, termografía)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">Permisos Medioambientales</h4>
                    <ul className="space-y-1 pl-4">
                      <li>• RCA (Resolución de Calificación Ambiental) — proyectos grandes</li>
                      <li>• DIA (Declaración de Impacto Ambiental) — proyectos medianos</li>
                      <li>• Permisos sectoriales (agua, residuos, emisiones)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">Permisos Municipales y Edificación</h4>
                    <ul className="space-y-1 pl-4">
                      <li>• Permiso de edificación (DOM)</li>
                      <li>• Certificado de recepción final</li>
                      <li>• Patente municipal (si aplica)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">Cumplimiento Sectorial</h4>
                    <ul className="space-y-1 pl-4">
                      <li>• <strong>Minería:</strong> Reglamento de seguridad minera (DS 132)</li>
                      <li>• <strong>Salud:</strong> Normativa MINSAL, bioseguridad</li>
                      <li>• <strong>Educación:</strong> Superintendencia de Educación</li>
                      <li>• <strong>Laboral:</strong> DS 594 (higiene y seguridad en el trabajo)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-6xl mb-6 text-[#DC964E] font-bold">02</div>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                  Certificación y Cumplimiento 100%
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Gestionamos todos los permisos y certificaciones llave en mano. Tú no tienes que perseguir papeles ni coordinar con autoridades.
                </p>
                <p className="text-lg text-[#DC964E] font-semibold mb-8">
                  "Cero multas, cero riesgos legales. Compliance 100% asegurado."
                </p>
                <div className="bg-slate-100 p-8 rounded-lg border border-slate-200">
                  <h3 className="text-sm font-bold text-black mb-4">Por Qué Importa</h3>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Evitas multas y detención de obra</strong> — Inspecciones aprobadas a la primera</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Reduces riesgos legales</strong> — Documentación completa y trazable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Aceleras timeline</strong> — No pierdes semanas esperando permisos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                      <span><strong>Protegés a tus trabajadores</strong> — Cumplimiento de seguridad y salud laboral</span>
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

        {/* Section 03: Contratos de Mantención */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6 text-[#DC964E] font-bold">03</div>
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                "No te dejamos solo después de la instalación."
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Ofrecemos contratos de mantención preventiva + correctiva para que nunca te quedes sin respuesta cuando algo falla.
              </p>
            </div>

            {/* What We Maintain */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">Qué Mantenemos</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h4 className="text-sm font-bold text-[#DC964E] mb-3 uppercase tracking-wide">Eléctrico</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Sistemas de poder y distribución</li>
                    <li>• Generadores de respaldo</li>
                    <li>• Tableros y protecciones</li>
                    <li>• Iluminación LED</li>
                    <li>• Termografía preventiva</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h4 className="text-sm font-bold text-[#DC964E] mb-3 uppercase tracking-wide">HVAC</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Aires acondicionados</li>
                    <li>• Sistemas de ventilación</li>
                    <li>• Filtros y calidad de aire</li>
                    <li>• Calefacción (radiadores, splits)</li>
                    <li>• Limpieza técnica de unidades</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h4 className="text-sm font-bold text-[#DC964E] mb-3 uppercase tracking-wide">Sanitario</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Sistemas de agua potable</li>
                    <li>• Desagües y alcantarillado</li>
                    <li>• Bombas y hidroneumáticos</li>
                    <li>• Plantas de tratamiento</li>
                    <li>• Calefones y calentadores</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h4 className="text-sm font-bold text-[#DC964E] mb-3 uppercase tracking-wide">Estructural & General</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Techos y sellos</li>
                    <li>• Puertas y ventanas</li>
                    <li>• Pisos y revestimientos</li>
                    <li>• Pintura y protección</li>
                    <li>• Limpieza técnica</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Levels */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-8 text-center">Niveles de Servicio</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Preventivo Básico */}
                <div className="bg-white p-8 border-l-4 border-[#DC964E] hover:shadow-xl transition-all">
                  <h4 className="text-xl font-bold text-black mb-4">Preventivo Básico</h4>
                  <p className="text-sm text-slate-600 mb-6">Para proyectos urbanos y construcción con disponibilidad estándar.</p>
                  <div className="mb-6">
                    <h5 className="text-sm font-bold text-black mb-2">Incluye:</h5>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Inspección mensual programada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Respuesta emergencias <strong>&lt;8 horas</strong> (zonas urbanas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Reporte técnico mensual</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Repuestos críticos incluidos</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-xs text-slate-500">Ideal para oficinas temporales, bodegas urbanas, retail.</p>
                </div>

                {/* Preventivo Premium */}
                <div className="bg-white p-8 border-l-4 border-[#DC964E] hover:shadow-xl transition-all">
                  <h4 className="text-xl font-bold text-black mb-4">Preventivo Premium</h4>
                  <p className="text-sm text-slate-600 mb-6">Para minería, energía y proyectos remotos con alta criticidad.</p>
                  <div className="mb-6">
                    <h5 className="text-sm font-bold text-black mb-2">Incluye:</h5>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Inspección quincenal programada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Respuesta emergencias <strong>&lt;4 horas</strong> (zonas remotas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Soporte técnico 24/7 con escalamiento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Técnico residente (opcional, para campamentos +300 personas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Reporte técnico semanal + mensual</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-xs text-slate-500">Ideal para campamentos mineros, proyectos energía, zonas extremas.</p>
                </div>

                {/* Full Service */}
                <div className="bg-white p-8 border-l-4 border-[#DC964E] hover:shadow-xl transition-all">
                  <h4 className="text-xl font-bold text-black mb-4">Full Service</h4>
                  <p className="text-sm text-slate-600 mb-6">Mantención integral + compliance continuo para operaciones críticas.</p>
                  <div className="mb-6">
                    <h5 className="text-sm font-bold text-black mb-2">Incluye TODO lo anterior +</h5>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Mantención correctiva incluida (sin costo adicional)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Gestión de repuestos y vida útil de componentes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Reportes de compliance para auditorías (ACHS, Seremi, SEC)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Ingeniería de modificaciones certificadas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">✓</span>
                        <span>Soporte 24/7/365 con SLA garantizado</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-xs text-slate-500">Ideal para operaciones permanentes, campamentos grandes (+500 personas).</p>
                </div>
              </div>
            </div>

            {/* Response Times */}
            <div className="mt-16 p-8 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-black mb-6 text-center">Tiempos de Respuesta Garantizados</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-black text-[#DC964E] mb-2">&lt;2H</div>
                  <p className="text-sm text-slate-700">Zonas urbanas<br />(Santiago, Valparaíso, Concepción)</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#DC964E] mb-2">&lt;8H</div>
                  <p className="text-sm text-slate-700">Construcción y retail<br />(según ubicación)</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#DC964E] mb-2">&lt;4H</div>
                  <p className="text-sm text-slate-700">Minería y energía remotas<br />(con técnico en faena)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Section 04: Post-Sale Support */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6 text-[#DC964E] font-bold">04</div>
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Soporte Post-Venta y Lifecycle Management
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Cuando dices "necesito expandir" o "algo falló" — hay alguien que responde, resuelve y documenta. No improvisamos. No desaparecemos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-black mb-6">Documentación Completa</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Al finalizar instalación, entregamos documentación técnica completa para operación y mantenimiento:
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>As-builts</strong> — Planos actualizados según montaje final</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Manuales O&M</strong> — Operación y mantención de sistemas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Certificados</strong> — SEC, recepción municipal, medioambientales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Protocolos de prueba</strong> — Eléctrico, HVAC, sanitario, estructural</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Garantías</strong> — Equipos, materiales, mano de obra</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-black mb-6">Soporte Técnico Continuo</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Disponible 24/7 para emergencias y consultas técnicas durante toda la vida útil del módulo:
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Línea directa 24/7</strong> — Respuesta inmediata para emergencias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Asistencia remota</strong> — Diagnóstico técnico por videollamada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Visitas técnicas</strong> — Según contrato de mantención o a solicitud</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Gestión de repuestos</strong> — Stock crítico + red de proveedores certificados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Capacitación</strong> — Para personal propio de mantención (opcional)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-black mb-6">Compliance Monitoring Continuo</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Aseguramos que tus módulos mantengan cumplimiento normativo durante toda su operación:
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Renovación certificaciones</strong> — SEC, permisos municipales (según vigencia)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Auditorías preventivas</strong> — Antes de inspecciones oficiales (ACHS, Seremi)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Actualización normativa</strong> — Cuando cambian reglamentos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Reportes para auditorías</strong> — Documentación lista para inspectores</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-black mb-6">Modificaciones y Expansiones</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Si necesitas modificar o expandir tu instalación, lo hacemos con la misma seriedad técnica:
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Ingeniería de modificación</strong> — Diseño certificado para cambios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Expansiones modulares</strong> — Agregar unidades manteniendo coherencia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Upgrades técnicos</strong> — HVAC, eléctrico, sanitario mejorados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Certificaciones actualizadas</strong> — SEC, permisos modificados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#DC964E] text-xl flex-shrink-0">→</span>
                    <span><strong>Cronograma sin detener operación</strong> — Trabajos programados por turnos</span>
                  </li>
                </ul>
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
              ¿Necesitas ingeniería seria o mantención confiable?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Conversemos sobre tu proyecto o instalación existente. Evaluación técnica sin costo, propuesta de mantención en 5 días hábiles.
            </p>

            <div className="mb-12 text-left max-w-2xl mx-auto">
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Evaluación técnica sin costo (visita en terreno incluida)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Propuesta de ingeniería o mantención en 5 días hábiles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Sin compromiso de contrato — decides después de revisar propuesta</span>
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
