'use client';

import { motion } from 'framer-motion';
import ModularHeader from '@/components/layout/ModularHeader';

export default function MineriaClient() {
  const otherIndustries = [
    { name: 'Construcción', icon: '🏗️', url: '/modular/industrias/construccion' },
    { name: 'Energía', icon: '⚡', url: '/modular/industrias/energia' },
    { name: 'Industrial', icon: '🏭', url: '/modular/industrias/industrial' },
    { name: 'Retail', icon: '🛍️', url: '/modular/industrias/retail' },
    { name: 'Salud', icon: '⚕️', url: '/modular/industrias/salud' },
    { name: 'Educación', icon: '🎓', url: '/modular/industrias/educacion' },
    { name: 'Agricultura', icon: '🌾', url: '/modular/industrias/agricultura' },
  ];

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
            <div className="text-6xl mb-8">⛏️</div>
            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Campamentos mineros que operan con método.
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#DC964E] mb-16 leading-relaxed max-w-3xl mx-auto">
              Desde 200 hasta 1000 personas. Zonas de altura, desierto y clima extremo. Ingeniería seria, certificación SEC completa y mantención integral.
            </p>

            {/* Industry-Specific Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">200-1000</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Personas por campamento
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">60-90 DÍAS</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Despliegue campamentos completos
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                <div className="text-4xl font-black text-white mb-2">4500 msnm</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                  Experiencia hasta altura extrema
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Pain Points Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Los desafíos de la minería. Nuestras soluciones.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Entendemos que en minería no hay margen para improvisación. Cada día de retraso cuesta millones.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Pain Point 1 */}
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-black mb-4">Retrasos en permisos y certificación</h3>
                <p className="text-sm text-slate-600 mb-6">
                  "Contratamos un proveedor que prometió 45 días. Al mes 3 seguían sin certificación SEC y la faena detenida."
                </p>
                <h4 className="text-sm font-bold text-[#DC964E] mb-3">Cómo lo resolvemos:</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC964E] flex-shrink-0">→</span>
                    <span>Gestión de permisos llave en mano (SEC, medioambientales, municipales)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC964E] flex-shrink-0">→</span>
                    <span>Ingeniería con trazabilidad completa (sin observaciones en inspecciones)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC964E] flex-shrink-0">→</span>
                    <span>Cronograma realista (sin promesas imposibles)</span>
                  </li>
                </ul>
              </div>

              {/* Pain Point 2 */}
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-black mb-4">"Nos dejaron solos después de instalar"</h3>
                <p className="text-sm text-slate-600 mb-6">
                  "Cuando falló el HVAC a los 6 meses, el proveedor no respondía. 400 trabajadores sin aire acondicionado en pleno desierto."
                </p>
                <h4 className="text-sm font-bold text-[#DC964E] mb-3">Cómo lo resolvemos:</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC964E] flex-shrink-0">→</span>
                    <span>Contratos de mantención preventiva + correctiva obligatorios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC964E] flex-shrink-0">→</span>
                    <span>Respuesta &lt;4 horas con técnico en faena (campamentos grandes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC964E] flex-shrink-0">→</span>
                    <span>Soporte 24/7 con protocolo de escalamiento claro</span>
                  </li>
                </ul>
              </div>

              {/* Pain Point 3 */}
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-black mb-4">Complejidad de clima extremo</h3>
                <p className="text-sm text-slate-600 mb-6">
                  "Instalaron módulos estándar sin considerar altura ni temperatura. Primer invierno: filtraciones, HVAC insuficiente, pérdidas millonarias."
                </p>
                <h4 className="text-sm font-bold text-[#DC964E] mb-3">Cómo lo resolvemos:</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC964E] flex-shrink-0">→</span>
                    <span>Ingeniería adaptada: desierto (+40°C día, -5°C noche), altura (hasta 4500 msnm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC964E] flex-shrink-0">→</span>
                    <span>HVAC dimensionado para clima extremo + filtración de polvo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC964E] flex-shrink-0">→</span>
                    <span>Estructura sísmica certificada, resistencia a viento 150 km/h</span>
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

        {/* Solutions Section */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Soluciones modulares para minería
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Desde campamentos completos hasta edificios auxiliares. Siempre con el mismo rigor técnico.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Solution 1 */}
              <div className="bg-white p-10 rounded-lg border border-slate-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Campamentos Modulares (200-1000 personas)</h3>
                <p className="text-slate-600 mb-6">
                  Campamentos completos con dormitorios, comedores, recreación, oficinas administrativas y servicios auxiliares.
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-black mb-3">Incluye:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Dormitorios individuales o compartidos (2-4 personas/unidad)</li>
                    <li>• Comedor industrial (capacidad 200-500 personas por turno)</li>
                    <li>• Cocina equipada con certificación sanitaria</li>
                    <li>• Salas de recreación (TV, juegos, gimnasio)</li>
                    <li>• Oficinas administrativas y salas de reunión</li>
                    <li>• Baños y camarines con agua caliente</li>
                    <li>• Planta de tratamiento autónoma (zonas sin alcantarillado)</li>
                    <li>• Generación eléctrica con respaldo diésel</li>
                    <li>• HVAC para clima extremo (desierto, altura, frío)</li>
                  </ul>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600"><strong>Despliegue:</strong> 60-90 días</p>
                  <p className="text-sm text-slate-600"><strong>Certificación:</strong> SEC, medioambientales, municipales</p>
                  <p className="text-sm text-slate-600"><strong>Mantención:</strong> Contratos preventivos + correctivos disponibles</p>
                </div>
                <a href="/modular/soluciones-modulares" className="inline-block mt-6 text-[#DC964E] font-semibold hover:underline">
                  Ver detalles técnicos →
                </a>
              </div>

              {/* Solution 2 */}
              <div className="bg-white p-10 rounded-lg border border-slate-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Oficinas y Edificios de Apoyo</h3>
                <p className="text-slate-600 mb-6">
                  Oficinas administrativas, salas de control, talleres de mantención y bodegas de repuestos.
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-black mb-3">Incluye:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Oficinas administrativas (20-200 m²)</li>
                    <li>• Salas de control y monitoreo 24/7</li>
                    <li>• Salas de reunión equipadas</li>
                    <li>• Talleres de mantención con herramientas</li>
                    <li>• Bodegas de repuestos (50-500 m²)</li>
                    <li>• Climatización industrial</li>
                    <li>• Conectividad (WiFi, telefonía, fibra óptica)</li>
                    <li>• Iluminación LED industrial</li>
                  </ul>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600"><strong>Despliegue:</strong> 15-30 días</p>
                  <p className="text-sm text-slate-600"><strong>Certificación:</strong> SEC, permisos municipales</p>
                  <p className="text-sm text-slate-600"><strong>Flexibilidad:</strong> Arriendo o compra, expansiones modulares</p>
                </div>
                <a href="/modular/soluciones-modulares" className="inline-block mt-6 text-[#DC964E] font-semibold hover:underline">
                  Ver detalles técnicos →
                </a>
              </div>

              {/* Solution 3 */}
              <div className="bg-white p-10 rounded-lg border border-slate-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Baños y Camarines Industriales</h3>
                <p className="text-slate-600 mb-6">
                  Instalaciones sanitarias de alta capacidad con cumplimiento de normativa laboral minera.
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-black mb-3">Incluye:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Baños modulares (10-50 unidades por módulo)</li>
                    <li>• Camarines con duchas de agua caliente</li>
                    <li>• Lockers individuales</li>
                    <li>• Ventilación forzada industrial</li>
                    <li>• Pisos antideslizantes certificados</li>
                    <li>• Cumplimiento DS 594 (higiene y seguridad)</li>
                    <li>• Sistemas de agua caliente (calefones eléctricos o gas)</li>
                  </ul>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600"><strong>Despliegue:</strong> 5-15 días</p>
                  <p className="text-sm text-slate-600"><strong>Capacidad:</strong> 50-500 personas por día</p>
                </div>
              </div>

              {/* Solution 4 */}
              <div className="bg-white p-10 rounded-lg border border-slate-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Servicios de Ingeniería y Mantención</h3>
                <p className="text-slate-600 mb-6">
                  Más allá de la construcción: ingeniería certificada y mantención integral para operación continua.
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-black mb-3">Servicios Disponibles:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Gestión llave en mano de permisos (SEC, medioambientales, municipales)</li>
                    <li>• Ingeniería estructural para terreno extremo</li>
                    <li>• Contratos de mantención preventiva + correctiva</li>
                    <li>• Soporte técnico 24/7 con respuesta &lt;4 horas</li>
                    <li>• Técnico residente (campamentos +500 personas)</li>
                    <li>• Modificaciones y expansiones certificadas</li>
                  </ul>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600"><strong>Disponibilidad:</strong> 24/7/365</p>
                  <p className="text-sm text-slate-600"><strong>Cobertura:</strong> Todo Chile, incluyendo zonas remotas</p>
                </div>
                <a href="/modular/ingenieria-mantencion" className="inline-block mt-6 text-[#DC964E] font-semibold hover:underline">
                  Ver ingeniería y mantención →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Case Study Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="bg-slate-50 p-12 rounded-lg border border-slate-200">
              <div className="text-center mb-12">
                <span className="text-sm font-bold uppercase tracking-wide text-[#DC964E]">Caso de Estudio</span>
                <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mt-4" style={{ letterSpacing: '-0.05em' }}>
                  Campamento Minero, 400 personas, Atacama 3200 msnm
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">Desafío</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• 60 días hasta operación completa</li>
                    <li>• Certificación SEC sin observaciones</li>
                    <li>• Clima extremo: +35°C día, -5°C noche</li>
                    <li>• Altura 3200 msnm (presión atmosférica reducida)</li>
                    <li>• Sin servicios básicos (agua, electricidad, alcantarillado)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">Solución</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Campamento modular 100 dormitorios (4 personas/unidad)</li>
                    <li>• Comedor 200 personas por turno + cocina industrial</li>
                    <li>• Oficinas 50 personas + sala recreación</li>
                    <li>• Planta tratamiento autónoma + generación eléctrica</li>
                    <li>• HVAC diseñado para altura + clima extremo</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">Resultado</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Operación en <strong>55 días</strong> (5 días antes del plazo)</li>
                    <li>• Certificación SEC aprobada sin observaciones</li>
                    <li>• Contrato mantención 24 meses (preventivo + correctivo)</li>
                    <li>• Cero incidentes seguridad primeros 12 meses</li>
                    <li>• Cliente contrató expansión para segundo campamento</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-8">
                <p className="text-slate-700 leading-relaxed italic">
                  "Cumplieron el plazo, la certificación salió a la primera y cuando algo falla (que es raro), responden en menos de 4 horas. Exactamente lo que necesitábamos."
                </p>
                <p className="text-sm text-slate-500 mt-2">— Gerente de Proyectos, Contratista EPCM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        {/* Other Industries Grid */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Explora otras industrias
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Aplicamos el mismo rigor técnico en múltiples industrias. No eres "proyecto secundario" porque no eres minería.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {otherIndustries.map((industry, idx) => (
                <a
                  key={idx}
                  href={industry.url}
                  className="bg-white p-6 rounded-lg border border-slate-200 hover:border-[#DC964E] hover:shadow-lg transition-all text-center"
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-bold text-black">{industry.name}</h3>
                </a>
              ))}
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
              ¿Necesitas un campamento minero confiable?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Evaluación técnica sin costo en tu faena. Propuesta técnica + comercial en 10 días hábiles con opciones de arriendo y venta.
            </p>

            <div className="mb-12 text-left max-w-2xl mx-auto">
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Evaluación técnica sin costo (visita a faena incluida)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Propuesta en 10 días hábiles con cronograma real (sin promesas imposibles)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-lg flex-shrink-0">→</span>
                  <span>Sin compromiso de contrato — evaluamos opciones primero</span>
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
