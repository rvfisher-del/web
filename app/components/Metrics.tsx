'use client';

export default function Metrics() {
  const metrics = [
    {
      number: '2',
      label: 'Países',
      sublabel: '(Canadá y Chile)',
    },
    {
      number: '5',
      label: 'Sectores Estratégicos',
      sublabel: '(Energía, Minería, Real Estate, Medical, Industrial)',
    },
    {
      number: '6+',
      label: 'Empresas en el Portafolio',
      sublabel: '',
    },
    {
      number: 'XXX+',
      label: 'Empleos Generados',
      sublabel: '',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Grupo Globe en Números
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FF8C42] group"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#FF8C42] mb-3 group-hover:scale-110 transition-transform duration-300">
                {metric.number}
              </div>
              <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">
                {metric.label}
              </div>
              {metric.sublabel && (
                <div className="text-xs text-gray-500">{metric.sublabel}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final flow indicator */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </section>
  );
}
