'use client';

export default function Values() {
  return (
    <section id="valores" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Lo que nos define
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Tres principios guían cada inversión, cada decisión, cada día.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Impacto Social */}
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FF8C42]">
            <h3 className="text-4xl font-black text-[#FF8C42] mb-4 tracking-tight">
              01
            </h3>
            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
              Impacto Social
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Generamos empleos de calidad y apoyamos comunidades donde operamos. Nuestro
              éxito se mide en las vidas que transformamos, no solo en los números que
              reportamos.
            </p>
          </div>

          {/* Responsabilidad Ambiental */}
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FF8C42]">
            <h3 className="text-4xl font-black text-[#FF8C42] mb-4 tracking-tight">
              02
            </h3>
            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
              Responsabilidad Ambiental
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Reducimos huella, invertimos en prácticas sostenibles, nos comprometemos con un
              futuro más limpio. Porque las próximas generaciones merecen un planeta habitable.
            </p>
          </div>

          {/* Transparencia & Gobernanza */}
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FF8C42]">
            <h3 className="text-4xl font-black text-[#FF8C42] mb-4 tracking-tight">
              03
            </h3>
            <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
              Transparencia & Gobernanza
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Governance claro, rendición de cuentas total, ética en cada acción. La confianza
              se gana con consistencia, no con promesas.
            </p>
          </div>
        </div>

        {/* B Corp Note */}
        <div className="text-center">
          <p className="text-base text-gray-500 italic max-w-3xl mx-auto">
            Varias de nuestras empresas avanzan hacia certificación B Corp—todas operan con
            esos valores en su ADN.
          </p>
        </div>
      </div>

      {/* Section separator */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </section>
  );
}
