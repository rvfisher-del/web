import Image from "next/image";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations();
  
  return (
    <div className="bg-white">
      {/* Minimalist Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/8">
        <div className="max-w-[1400px] mx-auto px-10 py-5 flex justify-between items-center">
          <div className="logo">
            <Image
              src="/images/logos/logo-grupo-globe.png"
              alt="Grupo Globe"
              width={480}
              height={240}
              className="h-60 w-auto transition-all duration-300"
            />
          </div>
          <nav className="hidden md:flex gap-12 items-center">
            <a href="#nosotros" className="text-[13px] font-semibold tracking-[0.15em] uppercase text-black hover:text-[#FF8C42] transition-colors">
              {t('navigation.about')}
            </a>
            <a href="#empresas" className="text-[13px] font-semibold tracking-[0.15em] uppercase text-black hover:text-[#FF8C42] transition-colors">
              {t('navigation.companies')}
            </a>
            <a href="#sectores" className="text-[13px] font-semibold tracking-[0.15em] uppercase text-black hover:text-[#FF8C42] transition-colors">
              {t('navigation.sectors')}
            </a>
            <a href="#estandar" className="text-[13px] font-semibold tracking-[0.15em] uppercase text-black hover:text-[#FF8C42] transition-colors">
              {t('navigation.standards')}
            </a>
            <a href="#work" className="text-[13px] font-semibold tracking-[0.15em] uppercase text-black hover:text-[#FF8C42] transition-colors">
              {t('navigation.workWithUs')}
            </a>
            <a href="#partner" className="text-[13px] font-semibold tracking-[0.15em] uppercase text-black hover:text-[#FF8C42] transition-colors">
              {t('navigation.partnerWithUs')}
            </a>
            <LanguageSwitcher />
            <a href="#contacto" className="bg-black text-white px-8 py-3 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-[#FF8C42] transition-all duration-300">
              {t('navigation.contact')}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Brookfield-style bold statement */}
      <section className="relative min-h-screen flex items-center justify-center px-8 py-40 pt-32 bg-gradient-to-br from-white via-[#F5F5F5] to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-6">
            {t('hero.label')}
          </div>
          <h1 className="text-[clamp(48px,8vw,96px)] leading-[1.05] font-black tracking-[-0.03em] mb-12 text-black">
            {t('hero.headline')}
          </h1>
          <p className="text-[clamp(18px,2.2vw,24px)] font-light text-[#6B6B6B] mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subheadline')}
          </p>
          <p className="text-[16px] font-semibold text-[#1a1a1a] uppercase tracking-[0.15em] mb-12">
            {t('hero.tagline')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#empresas" className="bg-[#FF8C42] text-white px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-[#FF6B35] transition-all duration-300">
              {t('hero.ctaPrimary')}
            </a>
            <a href="#nosotros" className="bg-white border-2 border-black text-black px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-all duration-300">
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 scroll-indicator opacity-40">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#6B6B6B]">{t('hero.scroll')}</span>
          <svg className="w-6 h-6 text-[#6B6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Key Statistics - Brookfield-style metrics */}
      <section className="py-24 px-10 bg-white border-t border-b border-black/8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <div className="text-[clamp(56px,8vw,80px)] font-black leading-none tracking-[-0.03em] text-[#FF8C42] mb-3 group-hover:scale-105 transition-transform duration-300">
                {t('metrics.companies.number')}
              </div>
              <div className="text-[15px] font-bold uppercase tracking-[0.15em] text-black mb-2">
                {t('metrics.companies.label')}
              </div>
              <div className="text-[14px] font-light text-[#6B6B6B] leading-relaxed">
                {t('metrics.companies.description')}
              </div>
            </div>
            <div className="group">
              <div className="text-[clamp(56px,8vw,80px)] font-black leading-none tracking-[-0.03em] text-[#FF8C42] mb-3 group-hover:scale-105 transition-transform duration-300">
                {t('metrics.sectors.number')}
              </div>
              <div className="text-[15px] font-bold uppercase tracking-[0.15em] text-black mb-2">
                {t('metrics.sectors.label')}
              </div>
              <div className="text-[14px] font-light text-[#6B6B6B] leading-relaxed">
                {t('metrics.sectors.description')}
              </div>
            </div>
            <div className="group">
              <div className="text-[clamp(56px,8vw,80px)] font-black leading-none tracking-[-0.03em] text-[#FF8C42] mb-3 group-hover:scale-105 transition-transform duration-300">
                {t('metrics.countries.number')}
              </div>
              <div className="text-[15px] font-bold uppercase tracking-[0.15em] text-black mb-2">
                {t('metrics.countries.label')}
              </div>
              <div className="text-[14px] font-light text-[#6B6B6B] leading-relaxed">
                {t('metrics.countries.description')}
              </div>
            </div>
            <div className="group">
              <div className="text-[clamp(56px,8vw,80px)] font-black leading-none tracking-[-0.03em] text-[#FF8C42] mb-3 group-hover:scale-105 transition-transform duration-300">
                {t('metrics.experience.number')}
              </div>
              <div className="text-[15px] font-bold uppercase tracking-[0.15em] text-black mb-2">
                {t('metrics.experience.label')}
              </div>
              <div className="text-[14px] font-light text-[#6B6B6B] leading-relaxed">
                {t('metrics.experience.description')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About - Investment Approach */}
      <section id="nosotros" className="py-32 px-10 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-8 text-center">
            {t('about.label')}
          </div>
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-10 text-center">
            {t('about.headline')}
          </h2>
          <p className="text-[clamp(18px,2vw,22px)] font-light text-[#1a1a1a] max-w-4xl mx-auto leading-relaxed text-center mb-16">
            {t('about.subheadline')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border-l-4 border-[#FF8C42] hover:shadow-xl transition-all duration-300">
              <div className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#FF8C42] mb-4">
                {t('about.principle1.number')}
              </div>
              <h3 className="text-[22px] font-bold tracking-[-0.01em] mb-3 text-black">
                {t('about.principle1.title')}
              </h3>
              <p className="text-[15px] font-light text-[#6B6B6B] leading-relaxed">
                {t('about.principle1.description')}
              </p>
            </div>
            <div className="bg-white p-10 border-l-4 border-[#FF8C42] hover:shadow-xl transition-all duration-300">
              <div className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#FF8C42] mb-4">
                {t('about.principle2.number')}
              </div>
              <h3 className="text-[22px] font-bold tracking-[-0.01em] mb-3 text-black">
                {t('about.principle2.title')}
              </h3>
              <p className="text-[15px] font-light text-[#6B6B6B] leading-relaxed">
                {t('about.principle2.description')}
              </p>
            </div>
            <div className="bg-white p-10 border-l-4 border-[#FF8C42] hover:shadow-xl transition-all duration-300">
              <div className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#FF8C42] mb-4">
                {t('about.principle3.number')}
              </div>
              <h3 className="text-[22px] font-bold tracking-[-0.01em] mb-3 text-black">
                {t('about.principle3.title')}
              </h3>
              <p className="text-[15px] font-light text-[#6B6B6B] leading-relaxed">
                {t('about.principle3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Themes - Brookfield "Built for What's Next" style */}
      <section className="py-32 px-10 bg-white">
        <div className="max-w-[1400px] mx-auto space-y-32">
          {/* Theme 1: Energy Transition */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] overflow-hidden warm-glow order-2 lg:order-1">
              <Image
                src="/images/hero/opening-image.png"
                alt="Energy Transition"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-6">
                {t('themes.energy.label')}
              </div>
              <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-6">
                {t('themes.energy.headline')}
              </h2>
              <p className="text-[18px] font-light text-[#6B6B6B] leading-relaxed mb-8">
                {t('themes.energy.description')}
              </p>
              <a href="#empresas" className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] uppercase text-black hover:text-[#FF8C42] transition-colors group">
                {t('themes.energy.link')} <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Theme 2: Infrastructure */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-6">
                {t('themes.modular.label')}
              </div>
              <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-6">
                {t('themes.modular.headline')}
              </h2>
              <p className="text-[18px] font-light text-[#6B6B6B] leading-relaxed mb-8">
                {t('themes.modular.description')}
              </p>
              <a href="#empresas" className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] uppercase text-black hover:text-[#FF8C42] transition-colors group">
                {t('themes.modular.link')} <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            <div className="relative h-[600px] overflow-hidden warm-glow">
              <Image
                src="/images/geographic/chile-new.jpg"
                alt="Modular Construction"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-black/40 to-transparent" />
            </div>
          </div>

          {/* Theme 3: Essential Services */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] overflow-hidden warm-glow order-2 lg:order-1">
              <Image
                src="/images/geographic/canada-canadian-forest.jpg"
                alt="Essential Services"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-6">
                {t('themes.services.label')}
              </div>
              <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-6">
                {t('themes.services.headline')}
              </h2>
              <p className="text-[18px] font-light text-[#6B6B6B] leading-relaxed mb-8">
                {t('themes.services.description')}
              </p>
              <a href="#empresas" className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] uppercase text-black hover:text-[#FF8C42] transition-colors group">
                {t('themes.services.link')} <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Standard - Premium Section */}
      <section id="estandar" className="relative py-40 px-10 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/geographic/canada-canadian-forest.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-8">
            {t('standards.label')}
          </div>
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-12">
            {t('standards.headline')}
          </h2>
          <p className="text-[clamp(18px,2vw,22px)] font-light text-white/80 max-w-3xl mx-auto leading-relaxed mb-20">
            {t('standards.subheadline')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h4 className="text-[18px] font-bold tracking-[0.1em] uppercase text-[#FF8C42] mb-4">
                {t('standards.precision.title')}
              </h4>
              <p className="text-[15px] font-light text-white/70 leading-relaxed">
                {t('standards.precision.description')}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h4 className="text-[18px] font-bold tracking-[0.1em] uppercase text-[#FF8C42] mb-4">
                {t('standards.consistency.title')}
              </h4>
              <p className="text-[15px] font-light text-white/70 leading-relaxed">
                {t('standards.consistency.description')}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h4 className="text-[18px] font-bold tracking-[0.1em] uppercase text-[#FF8C42] mb-4">
                {t('standards.integrity.title')}
              </h4>
              <p className="text-[15px] font-light text-white/70 leading-relaxed">
                {t('standards.integrity.description')}
              </p>
            </div>
          </div>

          <p className="text-[16px] font-light text-white/60 italic">
            {t('standards.footer')}
          </p>
        </div>
      </section>

      {/* Portfolio - Brookfield "Who We Serve" style */}
      <section id="empresas" className="py-40 px-10 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-8">
            {t('portfolio.label')}
          </div>
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-10">
            {t('portfolio.headline')}
          </h2>
          <p className="text-[clamp(18px,2vw,22px)] font-light text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
            {t('portfolio.subheadline')}
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">
          {[
            { logo: "logo-globe-power.png", name: "Globe Power", key: "power", url: "#" },
            { 
              logo: "logo-globe-modular.png", 
              name: "Globe Modular", 
              key: "modular", 
              url: "http://localhost:3000" // DEV: localhost:3000 | PROD: https://modular.grupoGlobe.com
            },
            { logo: "logo-globe-services.png", name: "Globe Services", key: "services", url: "/services" },
            { logo: "logo-globe-flota.png", name: "Globe Flota y Equipos", key: "flota", url: "#" },
            { logo: "logo-globe-lift-parts.png", name: "Globe Lift Parts", key: "liftparts", url: "#" },
            { logo: "logo-globe-academy.png", name: "Globe Academy", key: "academy", url: "#" }
          ].map((company, i) => (
            <div key={i} className="group bg-white border border-[#F5F5F5] hover:border-[#FF8C42] p-12 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-start justify-between mb-6">
                <Image
                  src={`/images/logos/${company.logo}`}
                  alt={company.name}
                  width={140}
                  height={50}
                  className="h-[40px] w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF8C42] bg-[#FF8C42]/10 px-3 py-1.5">
                  {t(`portfolio.companies.${company.key}.sector`)}
                </div>
              </div>
              <h3 className="text-[18px] font-bold tracking-[-0.01em] mb-2 text-black">
                {t(`portfolio.companies.${company.key}.tagline`)}
              </h3>
              <p className="text-[15px] font-light text-[#6B6B6B] leading-relaxed mb-6">
                {t(`portfolio.companies.${company.key}.description`)}
              </p>
              <a 
                href={company.url} 
                target={company.url.startsWith('http') ? '_blank' : undefined}
                rel={company.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] uppercase text-black hover:text-[#FF8C42] transition-colors group"
              >
                {t('portfolio.learnMore')} <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem - Brookfield-style - FIXED ICONS! */}
      <section id="sectores" className="py-32 px-10 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-8">
            {t('ecosystem.label')}
          </div>
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-10">
            {t('ecosystem.headline')}
          </h2>
          <p className="text-[clamp(18px,2vw,22px)] font-light text-[#1a1a1a] max-w-4xl mx-auto leading-relaxed mb-16">
            {t('ecosystem.subheadline')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* FIXED: Replaced emoji icons with typography-first approach using numbers */}
            <div className="bg-white p-10 border-l-4 border-[#FF8C42] hover:shadow-xl transition-all duration-300">
              <div className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#FF8C42] mb-4">
                {t('ecosystem.synergies.number')}
              </div>
              <h4 className="text-[18px] font-bold mb-3 text-black">
                {t('ecosystem.synergies.title')}
              </h4>
              <p className="text-[15px] font-light text-[#6B6B6B] leading-relaxed">
                {t('ecosystem.synergies.description')}
              </p>
            </div>
            <div className="bg-white p-10 border-l-4 border-[#FF8C42] hover:shadow-xl transition-all duration-300">
              <div className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#FF8C42] mb-4">
                {t('ecosystem.intelligence.number')}
              </div>
              <h4 className="text-[18px] font-bold mb-3 text-black">
                {t('ecosystem.intelligence.title')}
              </h4>
              <p className="text-[15px] font-light text-[#6B6B6B] leading-relaxed">
                {t('ecosystem.intelligence.description')}
              </p>
            </div>
            <div className="bg-white p-10 border-l-4 border-[#FF8C42] hover:shadow-xl transition-all duration-300">
              <div className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#FF8C42] mb-4">
                {t('ecosystem.standards.number')}
              </div>
              <h4 className="text-[18px] font-bold mb-3 text-black">
                {t('ecosystem.standards.title')}
              </h4>
              <p className="text-[15px] font-light text-[#6B6B6B] leading-relaxed">
                {t('ecosystem.standards.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Brookfield style */}
      <section id="contacto" className="py-40 px-10 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-12">
            {t('cta.headline')}
          </h2>
          <p className="text-[clamp(18px,2vw,22px)] font-light text-white/70 mb-14 leading-relaxed">
            {t('cta.subheadline')}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="bg-[#FF8C42] text-white px-12 py-5 text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-[#FF6B35] transition-all duration-300 inline-block">
              {t('cta.ctaPrimary')}
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-12 py-5 text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300 inline-block">
              {t('cta.ctaSecondary')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Sophisticated */}
      <footer className="bg-[#1a1a1a] text-white py-20 px-10 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <Image
                src="/images/logos/logo-grupo-globe.png"
                alt="Grupo Globe"
                width={120}
                height={60}
                className="h-15 w-auto mb-6 brightness-0 invert opacity-80"
              />
              <p className="text-sm font-light text-white/60 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="text-[13px] font-extrabold tracking-[0.15em] uppercase text-white mb-6">
                {t('footer.portfolioTitle')}
              </h4>
              <ul className="space-y-3">
                {["Globe Power", "Globe Modular", "Globe Services", "Globe Flota", "Globe Lift Parts", "Globe Academy"].map((company) => (
                  <li key={company}>
                    <a href="#" className="text-sm font-light text-white/60 hover:text-[#FF8C42] transition-colors">{company}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-extrabold tracking-[0.15em] uppercase text-white mb-6">
                {t('footer.companyTitle')}
              </h4>
              <ul className="space-y-3">
                {['about', 'approach', 'standards', 'careers', 'contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-light text-white/60 hover:text-[#FF8C42] transition-colors">
                      {t(`footer.companyLinks.${item}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-extrabold tracking-[0.15em] uppercase text-white mb-6">
                {t('footer.connectTitle')}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contact@grupogl obe.com" className="text-sm font-light text-white/60 hover:text-[#FF8C42] transition-colors">contact@grupogl obe.com</a>
                </li>
                <li>
                  <a href="#" className="text-sm font-light text-white/60 hover:text-[#FF8C42] transition-colors">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
            <p className="text-[13px] text-white/40">
              {t('footer.copyright')}
            </p>
            <p className="text-[13px] font-semibold text-white/60 uppercase tracking-[0.15em]">
              {t('footer.tagline')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
