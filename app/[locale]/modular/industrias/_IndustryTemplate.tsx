// Industry Page Template - Copy and customize for each industry
'use client';

import { motion } from 'framer-motion';
import ModularHeader from '@/components/layout/ModularHeader';

interface IndustryPageProps {
  industry: {
    name: string;
    icon: string;
    slug: string;
    hero: {
      headline: string;
      subhead: string;
      stats: Array<{ value: string; label: string }>;
    };
    painPoints: Array<{
      title: string;
      quote: string;
      solutions: string[];
    }>;
    solutions: Array<{
      title: string;
      description: string;
      includes: string[];
      specs: Record<string, string>;
    }>;
    caseStudy?: {
      title: string;
      challenge: string[];
      solution: string[];
      result: string[];
      testimonial: string;
      author: string;
    };
  };
}

export default function IndustryPageTemplate({ industry }: IndustryPageProps) {
  const otherIndustries = [
    { name: 'Minería', icon: '⛏️', url: '/modular/industrias/mineria' },
    { name: 'Construcción', icon: '🏗️', url: '/modular/industrias/construccion' },
    { name: 'Energía', icon: '⚡', url: '/modular/industrias/energia' },
    { name: 'Industrial', icon: '🏭', url: '/modular/industrias/industrial' },
    { name: 'Retail', icon: '🛍️', url: '/modular/industrias/retail' },
    { name: 'Salud', icon: '⚕️', url: '/modular/industrias/salud' },
    { name: 'Educación', icon: '🎓', url: '/modular/industrias/educacion' },
    { name: 'Agricultura', icon: '🌾', url: '/modular/industrias/agricultura' },
  ].filter(ind => ind.name !== industry.name);

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
            <div className="text-6xl mb-8">{industry.icon}</div>
            <h1 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              {industry.hero.headline}
            </h1>
            
            <p className="text-[clamp(18px,2vw,24px)] font-light text-[#DC964E] mb-16 leading-relaxed max-w-3xl mx-auto">
              {industry.hero.subhead}
            </p>

            {/* Industry-Specific Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {industry.hero.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#DC964E] px-8 py-10 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#DC964E]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Los desafíos de {industry.name.toLowerCase()}. Nuestras soluciones.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {industry.painPoints.map((pain, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                  <h3 className="text-xl font-bold text-black mb-4">{pain.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 italic">"{pain.quote}"</p>
                  <h4 className="text-sm font-bold text-[#DC964E] mb-3">Cómo lo resolvemos:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {pain.solutions.map((sol, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#DC964E] flex-shrink-0">→</span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Soluciones modulares para {industry.name.toLowerCase()}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {industry.solutions.map((solution, idx) => (
                <div key={idx} className="bg-white p-10 rounded-lg border border-slate-200 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold text-black mb-4">{solution.title}</h3>
                  <p className="text-slate-600 mb-6">{solution.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-black mb-3">Incluye:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {solution.includes.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  {solution.specs && (
                    <div className="border-t border-slate-200 pt-6">
                      {Object.entries(solution.specs).map(([key, value], i) => (
                        <p key={i} className="text-sm text-slate-600">
                          <strong>{key}:</strong> {value}
                        </p>
                      ))}
                    </div>
                  )}
                  <a href="/modular/soluciones-modulares" className="inline-block mt-6 text-[#DC964E] font-semibold hover:underline">
                    Ver detalles técnicos →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        {industry.caseStudy && (
          <>
            <div className="relative w-full h-24">
              <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
            </div>

            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-slate-50 p-12 rounded-lg border border-slate-200">
                  <div className="text-center mb-12">
                    <span className="text-sm font-bold uppercase tracking-wide text-[#DC964E]">Caso de Estudio</span>
                    <h2 className="text-[clamp(32px,4vw,48px)] font-black text-black mt-4" style={{ letterSpacing: '-0.05em' }}>
                      {industry.caseStudy.title}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-black mb-4">Desafío</h3>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {industry.caseStudy.challenge.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black mb-4">Solución</h3>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {industry.caseStudy.solution.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black mb-4">Resultado</h3>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {industry.caseStudy.result.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-slate-300 pt-8">
                    <p className="text-slate-700 leading-relaxed italic">
                      "{industry.caseStudy.testimonial}"
                    </p>
                    <p className="text-sm text-slate-500 mt-2">— {industry.caseStudy.author}</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Other Industries Grid */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(40px,6vw,64px)] font-black text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Explora otras industrias
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {otherIndustries.map((ind, idx) => (
                <a
                  key={idx}
                  href={ind.url}
                  className="bg-white p-6 rounded-lg border border-slate-200 hover:border-[#DC964E] hover:shadow-lg transition-all text-center"
                >
                  <div className="text-4xl mb-3">{ind.icon}</div>
                  <h3 className="text-lg font-bold text-black">{ind.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#DC964E]/30" />
        </div>

        <section className="py-32 bg-gradient-to-br from-[#DC964E] via-[#BA6347] to-[#DC964E] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              ¿Necesitas soluciones modulares para {industry.name.toLowerCase()}?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Evaluación técnica sin costo. Propuesta técnica + comercial en 10 días hábiles.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:modular@grupoglobe.cl" className="bg-white text-[#DC964E] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-slate-100 transition-all duration-300 rounded-md">
                Solicitar Evaluación
              </a>
              <a href="/modular" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#DC964E] transition-all duration-300 rounded-md">
                Volver a Globe Modular
              </a>
            </div>
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
