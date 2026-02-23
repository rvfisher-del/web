'use client';

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Nos enamoramos de los problemas, no de las soluciones
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            No buscamos empresas. Buscamos problemas que necesitan solución—y luego
            encontramos o construimos las empresas que pueden resolverlos. Porque Canadian
            Standards no es una frase de marketing. Es un compromiso operativo. Es lo que
            convierte a Globe en un sistema confiable, riguroso y constante.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Three Pillars */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wide">
              Tres Pilares que Nos Definen
            </h3>

            {/* Pillar 1 */}
            <div className="mb-10 group">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-1 h-16 bg-gradient-to-b from-[#FF8C42] to-[#FF7420] rounded-full group-hover:h-20 transition-all duration-300" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Unificar</h4>
                  <p className="text-base font-semibold text-gray-800 mb-2">
                    Seis negocios distintos, una narrativa común
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Globe no es un portafolio disperso. Es un sistema integrado de confianza
                    técnica bajo el estándar canadiense. Cada empresa opera con autonomía,
                    pero comparte valores, rigor y método.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="mb-10 group">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-1 h-16 bg-gradient-to-b from-[#FF8C42] to-[#FF7420] rounded-full group-hover:h-20 transition-all duration-300" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Capitalizar</h4>
                  <p className="text-base font-semibold text-gray-800 mb-2">
                    Convertimos confianza ganada en reputación y crecimiento
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Nuestras empresas tienen décadas de experiencia técnica, pero no siempre
                    la reputación que merecen. Globe amplifica su expertise, profesionaliza
                    su presencia, y abre mercados—transformando capacidad técnica en
                    diferenciación comercial.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-1 h-16 bg-gradient-to-b from-[#FF8C42] to-[#FF7420] rounded-full group-hover:h-20 transition-all duration-300" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Resolver</h4>
                  <p className="text-base font-semibold text-gray-800 mb-2">
                    Problemas críticos requieren partners serios
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    No vendemos promesas. Entregamos continuidad, trazabilidad, eficiencia
                    real. Cuando la operación no puede detenerse, cuando el margen de error
                    es cero, cuando se necesita rápido pero sin improvisar—Globe responde.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-50 rounded-lg p-8 text-center border-2 border-gray-100 hover:border-[#FF8C42] transition-colors duration-300">
                <div className="text-5xl font-bold text-[#FF8C42] mb-2">2</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Países
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center border-2 border-gray-100 hover:border-[#FF8C42] transition-colors duration-300">
                <div className="text-5xl font-bold text-[#FF8C42] mb-2">5</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Sectores
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center border-2 border-gray-100 hover:border-[#FF8C42] transition-colors duration-300">
                <div className="text-5xl font-bold text-[#FF8C42] mb-2">6</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Empresas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section separator */}
      <div className="flex items-center justify-center py-12">
        <div className="w-32 h-px bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-[#FF8C42] mx-4"></div>
        <div className="w-32 h-px bg-gray-300"></div>
      </div>
    </section>
  );
}
