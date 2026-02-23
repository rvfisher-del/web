'use client';

export default function CanadianStandards() {
  return (
    <section id="canadian-standards" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            ¿Por qué Canadá?
          </h2>
          <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed">
            Porque Canadá no grita. Construye con silencio, precisión y respeto.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
            Desde el norte no viene solo el frío. Viene la cultura de hacer bien las cosas,
            incluso cuando nadie está mirando. Es el estándar invisible que Globe vuelve
            visible.
          </p>

          {/* Three Standards - Typography First */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Sobriedad */}
            <div className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FF8C42]">
              <div className="w-12 h-1 bg-gradient-to-r from-[#FF8C42] to-[#FF7420] mb-6 group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Sobriedad
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sin promesas exageradas, sin marketing inflado. Solo capacidad técnica
                comprobable y resultados medibles.
              </p>
            </div>

            {/* Eficiencia */}
            <div className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FF8C42]">
              <div className="w-12 h-1 bg-gradient-to-r from-[#FF8C42] to-[#FF7420] mb-6 group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Eficiencia
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimizamos procesos, acortamos tiempos, reducimos costos—sin sacrificar
                calidad ni estándar.
              </p>
            </div>

            {/* Rigor Técnico */}
            <div className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FF8C42]">
              <div className="w-12 h-1 bg-gradient-to-r from-[#FF8C42] to-[#FF7420] mb-6 group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                Rigor Técnico
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hacemos las cosas bien, incluso cuando nadie está mirando. Documentación
                completa, trazabilidad total, cero improvisación.
              </p>
            </div>
          </div>

          {/* Footer Statement */}
          <div className="text-center bg-gradient-to-r from-[#FF8C42] to-[#FF7420] rounded-lg p-8 text-white">
            <p className="text-lg md:text-xl font-semibold leading-relaxed">
              <strong>Canadian Standards: compromiso operativo, no frase de marketing.</strong>
            </p>
            <p className="text-base mt-3 opacity-95">
              Es la ética y rigurosidad de una cultura reconocida globalmente. El estándar, no
              la excepción.
            </p>
          </div>
        </div>
      </div>

      {/* Section separator */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </section>
  );
}
