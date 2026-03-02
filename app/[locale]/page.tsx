import { useTranslations } from 'next-intl';
import GlassPillHeader from './components/GlassPillHeader';
import CinematicHero from './components/CinematicHero';
import LuxuryPortfolio from './components/LuxuryPortfolio';
import ValuesCircle from './components/ValuesCircle';
import ScrollReveal from './components/ScrollReveal';
import FilmGrain from './components/FilmGrain';
import MassiveFooter from './components/MassiveFooter';

export default function Home() {
  const t = useTranslations();
  
  return (
    <>
      {/* Edge Prefetching for subdirectories */}
      <link rel="prefetch" href="/power/" />
      <link rel="prefetch" href="/modular/" />
      <link rel="prefetch" href="/servicios/" />
      
      {/* Film Grain Texture */}
      <FilmGrain />
      
      <div className="bg-white relative z-10">
        {/* Glass Pill Header */}
        <GlassPillHeader />

        {/* Cinematic Video Hero */}
        <CinematicHero />

        {/* Key Statistics - Premium Minimal */}
        <section className="pt-56 pb-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="grid md:grid-cols-4 gap-16 text-center">
                <div className="group">
                  <div className="text-[clamp(64px,8vw,96px)] font-black leading-none tracking-tighter text-black mb-4">
                    {t('metrics.companies.number')}
                  </div>
                  <div className="text-[13px] font-bold uppercase tracking-[0.2em] text-black/40 mb-3">
                    {t('metrics.companies.label')}
                  </div>
                  <div className="text-[15px] font-light text-slate-600 leading-relaxed">
                    {t('metrics.companies.description')}
                  </div>
                </div>
                <div className="group">
                  <div className="text-[clamp(64px,8vw,96px)] font-black leading-none tracking-tighter text-black mb-4">
                    {t('metrics.sectors.number')}
                  </div>
                  <div className="text-[13px] font-bold uppercase tracking-[0.2em] text-black/40 mb-3">
                    {t('metrics.sectors.label')}
                  </div>
                  <div className="text-[15px] font-light text-slate-600 leading-relaxed">
                    {t('metrics.sectors.description')}
                  </div>
                </div>
                <div className="group">
                  <div className="text-[clamp(64px,8vw,96px)] font-black leading-none tracking-tighter text-black mb-4">
                    {t('metrics.countries.number')}
                  </div>
                  <div className="text-[13px] font-bold uppercase tracking-[0.2em] text-black/40 mb-3">
                    {t('metrics.countries.label')}
                  </div>
                  <div className="text-[15px] font-light text-slate-600 leading-relaxed">
                    {t('metrics.countries.description')}
                  </div>
                </div>
                <div className="group">
                  <div className="text-[clamp(64px,8vw,96px)] font-black leading-none tracking-tighter text-black mb-4">
                    {t('metrics.experience.number')}
                  </div>
                  <div className="text-[13px] font-bold uppercase tracking-[0.2em] text-black/40 mb-3">
                    {t('metrics.experience.label')}
                  </div>
                  <div className="text-[15px] font-light text-slate-600 leading-relaxed">
                    {t('metrics.experience.description')}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* About - Investment Approach */}
        <section id="nosotros" className="py-48 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal className="text-center mb-20">
              <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">
                {t('about.label')}
              </div>
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-16" style={{ letterSpacing: '-0.05em' }}>
                {t('about.headline')}
              </h2>
              <div className="block w-full text-center mx-auto max-w-3xl py-12 px-6 relative z-10">
                <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 leading-relaxed">
                  {t('about.subheadline')}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-10 border-l-4 border-black hover:shadow-xl transition-all duration-300 text-center">
                  <div className="mt-48 mb-4 text-[14px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-6">
                    {t('about.principle1.number')}
                  </div>
                  <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-3">
                    {t('about.principle1.title')}
                  </h3>
                  <p className="text-[15px] font-light text-slate-600 leading-relaxed">
                    {t('about.principle1.description')}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white p-10 border-l-4 border-black hover:shadow-xl transition-all duration-300 text-center">
                  <div className="mt-48 mb-4 text-[14px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-6">
                    {t('about.principle2.number')}
                  </div>
                  <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-3">
                    {t('about.principle2.title')}
                  </h3>
                  <p className="text-[15px] font-light text-slate-600 leading-relaxed">
                    {t('about.principle2.description')}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-white p-10 border-l-4 border-black hover:shadow-xl transition-all duration-300 text-center">
                  <div className="mt-48 mb-4 text-[14px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-6">
                    {t('about.principle3.number')}
                  </div>
                  <h3 className="text-3xl md:text-[24px] font-bold tracking-tight text-black leading-tight mb-3">
                    {t('about.principle3.title')}
                  </h3>
                  <p className="text-[15px] font-light text-slate-600 leading-relaxed">
                    {t('about.principle3.description')}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Premium Portfolio Gallery */}
        <LuxuryPortfolio />

        {/* B-Corp Values Circle */}
        <ValuesCircle />

        {/* Strategic Themes - Minimal Treatment */}
        <section className="py-20 bg-black !text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
            {/* Theme 1: Energy Transition */}
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src="/images/hero/opening-image.png" 
                    alt="Energy Transition" 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  {/* GRADIENT SCRIM for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
                </div>
                <div className="w-full max-w-xl">
                  <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-6">
                    {t('themes.energy.label')}
                  </div>
                  <h2 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-6 whitespace-normal" style={{ letterSpacing: '-0.05em', fontWeight: 900, textShadow: '0 2px 10px rgba(0,0,0,0.5)', color: 'white' }}>
                    {t('themes.energy.headline')}
                  </h2>
                  <p className="text-[18px] font-light text-white/70 leading-relaxed mb-8 whitespace-normal">
                    {t('themes.energy.description')}
                  </p>
                  <a 
                    href="#empresas" 
                    className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {t('themes.energy.link')} <span>→</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Theme 2: Infrastructure */}
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 w-full max-w-xl">
                  <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-6">
                    {t('themes.modular.label')}
                  </div>
                  <h2 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-6 whitespace-normal" style={{ letterSpacing: '-0.05em', fontWeight: 900, textShadow: '0 2px 10px rgba(0,0,0,0.5)', color: 'white' }}>
                    {t('themes.modular.headline')}
                  </h2>
                  <p className="text-[18px] font-light text-white/70 leading-relaxed mb-8 whitespace-normal">
                    {t('themes.modular.description')}
                  </p>
                  <a 
                    href="#empresas" 
                    className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase text-white bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
                  >
                    GLOBE MODULAR <span className="text-lg">→</span>
                  </a>
                </div>
                <div className="relative aspect-video overflow-hidden order-1 lg:order-2">
                  <img 
                    src="/images/geographic/chile-new.jpg" 
                    alt="Modular Construction" 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  {/* GRADIENT SCRIM for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-bl from-black/70 via-black/40 to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            {/* Theme 3: Essential Services */}
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src="/images/geographic/canada-canadian-forest.jpg" 
                    alt="Essential Services" 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  {/* GRADIENT SCRIM for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
                </div>
                <div className="w-full max-w-xl">
                  <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-6">
                    {t('themes.services.label')}
                  </div>
                  <h2 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-white mb-6 whitespace-normal" style={{ letterSpacing: '-0.05em', fontWeight: 900, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                    {t('themes.services.headline')}
                  </h2>
                  <p className="text-[18px] font-light text-white/70 leading-relaxed mb-8 whitespace-normal">
                    {t('themes.services.description')}
                  </p>
                  <a 
                    href="#empresas" 
                    className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {t('themes.services.link')} <span>→</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Canadian Standard - Minimal */}
        <section id="estandar" className="py-48 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Image Side - ANCHORED with aspect-ratio */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src="/images/geographic/canada-canadian-forest.jpg" 
                    alt="Canadian Standards" 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
                </div>

                {/* Content Side */}
                <div className="space-y-8">
                  <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40">
                    {t('standards.label')}
                  </div>
                  <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1]" style={{ letterSpacing: '-0.05em' }}>
                    {t('standards.headline')}
                  </h2>
                  <p className="text-[20px] font-light text-white/80 leading-relaxed">
                    {t('standards.subheadline')}
                  </p>

                  <div className="space-y-6 pt-4">
                    <div className="border-l-4 border-white/30 pl-6">
                      <h4 className="text-[16px] font-bold tracking-wide uppercase text-white mb-2">
                        {t('standards.precision.title')}
                      </h4>
                      <p className="text-[15px] font-light text-white/70 leading-relaxed">
                        {t('standards.precision.description')}
                      </p>
                    </div>
                    <div className="border-l-4 border-white/30 pl-6">
                      <h4 className="text-[16px] font-bold tracking-wide uppercase text-white mb-2">
                        {t('standards.consistency.title')}
                      </h4>
                      <p className="text-[15px] font-light text-white/70 leading-relaxed">
                        {t('standards.consistency.description')}
                      </p>
                    </div>
                    <div className="border-l-4 border-white/30 pl-6">
                      <h4 className="text-[16px] font-bold tracking-wide uppercase text-white mb-2">
                        {t('standards.integrity.title')}
                      </h4>
                      <p className="text-[15px] font-light text-white/70 leading-relaxed">
                        {t('standards.integrity.description')}
                      </p>
                    </div>
                  </div>

                  <p className="text-[14px] font-light text-white/50 pt-4">
                    {t('standards.footer')}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Ecosystem - Minimal */}
        <section id="sectores" className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <ScrollReveal>
              <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">
                {t('ecosystem.label')}
              </div>
              <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-black mb-10" style={{ letterSpacing: '-0.05em' }}>
                {t('ecosystem.headline')}
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16">
                {t('ecosystem.subheadline')}
              </p>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-12">
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-10 border-l-4 border-black hover:shadow-xl transition-all duration-300">
                  <div className="mt-48 mb-4 text-[14px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-6">
                    {t('ecosystem.synergies.number')}
                  </div>
                  <h4 className="text-3xl md:text-[20px] font-bold mb-3 text-black leading-tight">
                    {t('ecosystem.synergies.title')}
                  </h4>
                  <p className="text-[15px] font-light text-slate-600 leading-relaxed">
                    {t('ecosystem.synergies.description')}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white p-10 border-l-4 border-black hover:shadow-xl transition-all duration-300">
                  <div className="mt-48 mb-4 text-[14px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-6">
                    {t('ecosystem.intelligence.number')}
                  </div>
                  <h4 className="text-3xl md:text-[20px] font-bold mb-3 text-black leading-tight">
                    {t('ecosystem.intelligence.title')}
                  </h4>
                  <p className="text-[15px] font-light text-slate-600 leading-relaxed">
                    {t('ecosystem.intelligence.description')}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-white p-10 border-l-4 border-black hover:shadow-xl transition-all duration-300">
                  <div className="mt-48 mb-4 text-[14px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-6">
                    {t('ecosystem.standards.number')}
                  </div>
                  <h4 className="text-3xl md:text-[20px] font-bold mb-3 text-black leading-tight">
                    {t('ecosystem.standards.title')}
                  </h4>
                  <p className="text-[15px] font-light text-slate-600 leading-relaxed">
                    {t('ecosystem.standards.description')}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA - Minimal */}
        <section id="contacto" className="py-48 bg-black !text-white text-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <h2 className="!text-white text-[clamp(40px,6vw,72px)] font-black leading-[1.1] mb-12" style={{ letterSpacing: '-0.05em' }}>
                {t('cta.headline')}
              </h2>
              <p className="text-[clamp(18px,2vw,24px)] font-light text-white/70 mb-8 leading-relaxed">
                {t('cta.subheadline')}
              </p>
              
              {/* Audience Breakdown */}
              <div className="max-w-3xl mx-auto mb-14 space-y-4 text-left">
                <p className="text-[16px] font-light text-white/80 leading-relaxed">
                  <strong className="font-semibold text-white">Para fundadores:</strong> {t('cta.founders')}
                </p>
                <p className="text-[16px] font-light text-white/80 leading-relaxed">
                  <strong className="font-semibold text-white">Para inversionistas:</strong> {t('cta.investors')}
                </p>
                <p className="text-[16px] font-light text-white/80 leading-relaxed">
                  <strong className="font-semibold text-white">Para talento técnico:</strong> {t('cta.talent')}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="#" 
                  className="bg-white text-black px-12 py-5 text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-white/90 transition-all duration-300"
                >
                  {t('cta.ctaPrimary')}
                </a>
                <a 
                  href="#" 
                  className="bg-transparent border-2 border-white text-white px-12 py-5 text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                >
                  {t('cta.ctaSecondary')}
                </a>
                <a 
                  href="#" 
                  className="bg-transparent border-2 border-white text-white px-12 py-5 text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                >
                  {t('cta.ctaTertiary')}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Massive Industrial Footer */}
        <MassiveFooter />
      </div>
    </>
  );
}
