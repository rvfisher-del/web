'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/opening-image.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-24 pb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight animate-fade-in">
          Un grupo. Seis soluciones. Una misma lógica.
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-1">
          Desde Canadá, traemos algo más que capital: traemos el estándar de quien hace las
          cosas bien, incluso cuando nadie está mirando. Invertimos en empresas que resuelven
          problemas críticos en energía, minería, real estate, salud e industria—con la
          precisión, el silencio y el respeto que define el estándar canadiense.
        </p>

        <p className="text-xl md:text-2xl font-bold text-white mb-8 opacity-0 animate-fade-in-delay-2">
          El estándar. No la excepción.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-delay-3">
          <a
            href="#portafolio"
            className="px-8 py-3.5 bg-gradient-to-r from-[#FF8C42] to-[#FF7420] text-white font-semibold rounded-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Conoce Nuestras Empresas
          </a>
          <a
            href="#canadian-standards"
            className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-md border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
          >
            Qué Significa Canadian Standards
          </a>
        </div>
      </div>
    </section>
  );
}
