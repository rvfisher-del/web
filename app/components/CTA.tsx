'use client';

export default function CTA() {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          ¿Resuelves un problema que importa?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
          Ya seas emprendedor con una empresa que transforma su sector, inversionista buscando
          impacto real, o talento que quiere trabajar donde las decisiones importan—queremos
          conocerte.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@grupogl obe.com"
            className="px-8 py-4 bg-gradient-to-r from-[#FF8C42] to-[#FF7420] text-white text-lg font-semibold rounded-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Cuéntanos tu historia
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-md border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Ver oportunidades
          </a>
        </div>
      </div>
    </section>
  );
}
