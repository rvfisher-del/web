'use client';

export default function Geographic() {
  return (
    <section id="presencia" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Dos países. Oportunidades complementarias.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Canadá ofrece recursos naturales, estabilidad institucional y acceso a tecnología.
            Chile aporta capital humano, proximidad a mercados latinoamericanos y sectores en
            crecimiento. Construimos puentes entre ambos.
          </p>
        </div>

        {/* Geographic Split - Clean, Typography-First */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Canada */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="aspect-[4/3] relative">
              <img
                src="/images/geographic/canada-canadian-forest.jpg"
                alt="Bosques canadienses"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              {/* Typography-first, no emoji */}
              <div className="w-16 h-1 bg-white mb-4"></div>
              <h3 className="text-3xl font-bold mb-3 uppercase tracking-wide">Canadá</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                Base operacional con proyectos en minería, energía y educación médica. Raíces
                profundas en comunidades de British Columbia y Alberta.
              </p>
            </div>
          </div>

          {/* Chile */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="aspect-[4/3] relative">
              <img
                src="/images/geographic/chile-new.jpg"
                alt="Chile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              {/* Typography-first, no emoji */}
              <div className="w-16 h-1 bg-white mb-4"></div>
              <h3 className="text-3xl font-bold mb-3 uppercase tracking-wide">Chile</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                Hub latinoamericano con expertise en minería, construcción modular y servicios
                industriales. Presencia activa desde Santiago hasta regiones mineras del norte.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual flow indicator */}
      <div className="flex items-center justify-center py-16">
        <div className="w-32 h-px bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-[#FF8C42] mx-4"></div>
        <div className="w-32 h-px bg-gray-300"></div>
      </div>
    </section>
  );
}
