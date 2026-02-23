'use client';

export default function Sectors() {
  const sectors = [
    {
      title: 'Energía',
      description:
        'Energía confiable para operaciones críticas en minería e industria. Cuando la producción no puede detenerse, nuestros sistemas siguen funcionando.',
    },
    {
      title: 'Minería',
      description:
        'De repuestos críticos a gestión de flotas: mantenemos operaciones en marcha. Cuando el downtime cuesta millones, la confiabilidad lo es todo.',
    },
    {
      title: 'Real Estate',
      description:
        'Construcción modular que reduce tiempos y costos sin sacrificar calidad. El futuro de la construcción es eficiente y sostenible.',
    },
    {
      title: 'Salud',
      description:
        'Mantenemos infraestructura crítica en clínicas y hospitales: sistemas eléctricos, generadores, ascensores, HVAC. También construimos instalaciones médicas temporales y permanentes con soluciones modulares.',
    },
    {
      title: 'Industrial',
      description:
        'Donde se resuelve con criterio y técnica. Equipos reales, tiempos concretos y compromiso serio. Servicio digno, sin adornos ni excusas.',
    },
  ];

  return (
    <section id="sectores" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Cinco sectores estratégicos. Seis empresas. Una lógica compartida.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Desde energía industrial hasta educación médica, nuestras empresas tocan sectores
            esenciales para Canadá y Chile.
          </p>
        </div>

        {/* Sectors Grid - Typography First, No Icons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-lg p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FF8C42] overflow-hidden"
            >
              {/* Subtle gradient accent */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-[#FF8C42] to-[#FF7420] group-hover:h-full transition-all duration-500"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {sector.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{sector.description}</p>
              </div>
            </div>
          ))}

          {/* CTA Tile - Clean & Professional */}
          <div className="bg-gradient-to-br from-[#FF8C42] to-[#FF7420] rounded-lg p-8 text-white flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                ¿Resuelves un problema que importa?
              </h3>
              <p className="mb-6 text-lg leading-relaxed opacity-95">Queremos conocerte.</p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center text-white font-semibold text-lg group/link"
            >
              <span className="border-b-2 border-white/50 group-hover/link:border-white transition-all">
                Contáctanos
              </span>
              <svg
                className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Minimal SVG */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <svg
          className="w-6 h-6 text-gray-400 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
