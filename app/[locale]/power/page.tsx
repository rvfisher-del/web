import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Globe Power | Energía Industrial Confiable',
  description: 'Eficiencia y continuidad eléctrica de grado minero. Sistemas de energía para operaciones críticas donde el tiempo perdido cuesta millones.',
};

export default function PowerPage() {
  return (
    <>
      <div className="bg-white">
        {/* Global Header */}
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#BF2F38] mb-4 block">
                Globe Power
              </span>
            </div>
            
            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-8" style={{ letterSpacing: '-0.05em' }}>
              Hacemos visible lo que otros esconden.
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#BF2F38] mb-12 leading-relaxed max-w-3xl mx-auto">
              Eficiencia y Continuidad Eléctrica de Grado Minero.
            </p>

            {/* Downtime Manifesto - Centered */}
            <div className="max-w-3xl mx-auto text-center mt-16">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">El Costo del Tiempo Perdido</h3>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <div className="border-l-4 border-[#BF2F38] pl-6 text-left">
                    <p className="font-semibold text-white mb-2">Minería</p>
                    <p>Costo de downtime: <span className="text-[#BF2F38] font-bold">$50,000 - $200,000 USD/hora</span></p>
                  </div>
                  <div className="border-l-4 border-[#BF2F38] pl-6 text-left">
                    <p className="font-semibold text-white mb-2">Retail</p>
                    <p>Uptime necesario: <span className="text-[#BF2F38] font-bold">&gt;99.5%</span> en operaciones retail</p>
                  </div>
                  <div className="border-l-4 border-[#BF2F38] pl-6 text-left">
                    <p className="font-semibold text-white mb-2">Real Estate</p>
                    <p>Ahorro típico: <span className="text-[#BF2F38] font-bold">15-30%</span> en costos energéticos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Big Three - 01, 02, 03 Grid */}
        <section className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
                ARQUITECTURA COMPLETA
              </span>
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Tres Pilares.<br/>Una Solución Completa.
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed max-w-3xl mx-auto">
                No vendemos energía por separado. Ofrecemos arquitectura energética completa para operaciones críticas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* 01 - Suministro */}
              <div className="bg-white p-10 border-l-4 border-black hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#BF2F38] font-bold">01</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Suministro
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Subdistribución eléctrica exclusiva. Media y baja tensión. Respaldo automático ante fallas de red.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BF2F38] text-xl flex-shrink-0">✓</span>
                    <span>Subestaciones propias</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BF2F38] text-xl flex-shrink-0">✓</span>
                    <span>Infraestructura redundante</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BF2F38] text-xl flex-shrink-0">✓</span>
                    <span>Mantenimiento preventivo incluido</span>
                  </li>
                </ul>
              </div>

              {/* 02 - Eficiencia */}
              <div className="bg-white p-10 border-l-4 border-black hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#BF2F38] font-bold">02</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Eficiencia
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Auditorías energéticas, corrección de factor de potencia, optimización de demanda y reducción de costos operativos.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BF2F38] text-xl flex-shrink-0">✓</span>
                    <span>Análisis de consumo real</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BF2F38] text-xl flex-shrink-0">✓</span>
                    <span>Identificación de pérdidas</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BF2F38] text-xl flex-shrink-0">✓</span>
                    <span>Plan de optimización a medida</span>
                  </li>
                </ul>
              </div>

              {/* 03 - Analítica */}
              <div className="bg-white p-10 border-l-4 border-black hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-6 text-[#BF2F38] font-bold">03</div>
                <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-4">
                  Analítica
                </h3>
                <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-6">
                  Monitoreo en tiempo real, dashboards visuales, alertas automáticas y reportes ejecutivos con métricas verificables.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BF2F38] text-xl flex-shrink-0">✓</span>
                    <span>Dashboard 24/7</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BF2F38] text-xl flex-shrink-0">✓</span>
                    <span>Alertas predictivas</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#BF2F38] text-xl flex-shrink-0">✓</span>
                    <span>Reporting mensual transparente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-slate-950 to-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              ¿Tu operación necesita energía confiable?
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12">
              Conversemos sobre cómo Globe Power puede ser tu socio energético de largo plazo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contacto" className="bg-[#BF2F38] text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#9a2529] transition-all duration-300 rounded-md">
                Solicitar Consulta
              </a>
              <a href="mailto:power@grupoGlobe.com" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-md">
                Contactar Ahora
              </a>
            </div>
            <p className="text-slate-400 mt-8">
              Email: <a href="mailto:power@grupoGlobe.com" className="text-white hover:underline">power@grupoGlobe.com</a> | Manager: Alvaro Portilla
            </p>
          </div>
        </section>

        {/* Global Footer */}
        <Footer />
      </div>
    </>
  );
}
