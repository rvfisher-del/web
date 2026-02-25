export default function Home() {
  return (
    <div className="bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/8 transition-shadow duration-300">
        <div className="max-w-[1400px] mx-auto px-10 py-5 flex justify-between items-center">
          <div className="logo">
            <img
              src="/images/logos/logo-grupo-globe.png"
              alt="Grupo Globe"
              className="h-20 w-auto transition-all duration-300"
            />
          </div>
          <nav className="hidden md:flex gap-12 items-center">
            <a href="#nosotros" className="text-[13px] font-semibold tracking-[0.15em] uppercase text-black hover:text-[#FF8C42] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[#FF8C42] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Nosotros
            </a>
            <a href="#empresas" className="text-[13px] font-semibold tracking-[0.15em] uppercase text-black hover:text-[#FF8C42] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[#FF8C42] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Empresas
            </a>
            <a href="#sectores" className="text-[13px] font-semibold tracking-[0.15em] uppercase text-black hover:text-[#FF8C42] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[#FF8C42] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Sectores
            </a>
            <a href="#estandar" className="text-[13px] font-semibold tracking-[0.15em] uppercase text-black hover:text-[#FF8C42] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[#FF8C42] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Estándar
            </a>
            <a href="#contacto" className="bg-black text-white px-8 py-3 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-[#FF8C42] transition-all duration-300 hover:-translate-y-0.5">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 py-40 pt-32 bg-gradient-to-br from-white via-neutral-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-6">
            GRUPO GLOBE
          </div>
          <h1 className="text-[clamp(48px,8vw,96px)] leading-[1.05] font-black tracking-[-0.03em] mb-12 text-black">
            Building enduring value<br/>
            across critical industries
          </h1>
          <p className="text-[clamp(18px,2.2vw,24px)] font-light text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A Canadian-based holding company applying rigorous operational standards 
            to energy, mining, real estate, healthcare, and industrial services across 
            North and South America.
          </p>
          <p className="text-base font-semibold text-neutral-900 uppercase tracking-[0.15em] mb-12">
            El estándar canadiense. No la excepción.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#empresas" className="bg-[#FF8C42] text-white px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-[#FF6B35] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,140,66,0.4)]">
              Our Companies
            </a>
            <a href="#nosotros" className="bg-white border-2 border-black text-black px-10 py-4 text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1">
              Learn More
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator with Tailwind animation */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 animate-bounce">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-600">Scroll</span>
          <svg className="w-6 h-6 text-neutral-600" style={{ objectFit: "cover", width: "100%", height: "100%" }}="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-24 px-10 bg-white border-t border-b border-black/8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <div className="text-[clamp(56px,8vw,80px)] font-black leading-none tracking-[-0.03em] text-[#FF8C42] mb-3 group-hover:scale-110 transition-transform duration-300">6</div>
              <div className="text-[15px] font-bold uppercase tracking-[0.15em] text-black mb-2">Empresas</div>
              <div className="text-sm font-light text-neutral-600 leading-relaxed">Portfolio operando</div>
            </div>
            <div className="group">
              <div className="text-[clamp(56px,8vw,80px)] font-black leading-none tracking-[-0.03em] text-[#FF8C42] mb-3 group-hover:scale-110 transition-transform duration-300">5</div>
              <div className="text-[15px] font-bold uppercase tracking-[0.15em] text-black mb-2">Sectores</div>
              <div className="text-sm font-light text-neutral-600 leading-relaxed">Industrias estratégicas</div>
            </div>
            <div className="group">
              <div className="text-[clamp(56px,8vw,80px)] font-black leading-none tracking-[-0.03em] text-[#FF8C42] mb-3 group-hover:scale-110 transition-transform duration-300">2</div>
              <div className="text-[15px] font-bold uppercase tracking-[0.15em] text-black mb-2">Países</div>
              <div className="text-sm font-light text-neutral-600 leading-relaxed">Canadá y Chile</div>
            </div>
            <div className="group">
              <div className="text-[clamp(56px,8vw,80px)] font-black leading-none tracking-[-0.03em] text-[#FF8C42] mb-3 group-hover:scale-110 transition-transform duration-300">20+</div>
              <div className="text-[15px] font-bold uppercase tracking-[0.15em] text-black mb-2">Años</div>
              <div className="text-sm font-light text-neutral-600 leading-relaxed">Experiencia operacional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="nosotros" className="py-32 px-10 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-8 text-center">
            NUESTRA FILOSOFÍA
          </div>
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-10 text-center">
            We fall in love with problems,<br/>not solutions
          </h2>
          <p className="text-[clamp(18px,2vw,22px)] font-light text-neutral-900 max-w-4xl mx-auto leading-relaxed text-center mb-16">
            Rather than seeking companies to acquire, we identify critical challenges in essential 
            industries—then build or partner with the operations that can solve them with precision 
            and consistency.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border-l-4 border-[#FF8C42] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-sm font-bold tracking-[0.2em] uppercase text-[#FF8C42] mb-4">01</div>
              <h3 className="text-[22px] font-bold tracking-[-0.01em] mb-3 text-black">Operational Rigor</h3>
              <p className="text-[15px] font-light text-neutral-600 leading-relaxed">
                Canadian standards applied across our portfolio: documented processes, complete 
                traceability, zero improvisation.
              </p>
            </div>
            <div className="bg-white p-10 border-l-4 border-[#FF8C42] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-sm font-bold tracking-[0.2em] uppercase text-[#FF8C42] mb-4">02</div>
              <h3 className="text-[22px] font-bold tracking-[-0.01em] mb-3 text-black">Industry Expertise</h3>
              <p className="text-[15px] font-light text-neutral-600 leading-relaxed">
                Deep operational experience in each sector, with hands-on management and 
                sector-specific technical knowledge.
              </p>
            </div>
            <div className="bg-white p-10 border-l-4 border-[#FF8C42] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-sm font-bold tracking-[0.2em] uppercase text-[#FF8C42] mb-4">03</div>
              <h3 className="text-[22px] font-bold tracking-[-0.01em] mb-3 text-black">Enduring Value</h3>
              <p className="text-[15px] font-light text-neutral-600 leading-relaxed">
                Building businesses for the long term, with sustainable practices and 
                measurable impact on communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Themes */}
      <section className="py-32 px-10 bg-white">
        <div className="max-w-[1400px] mx-auto space-y-32">
          {/* Theme 1: Energy */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] overflow-hidden order-2 lg:order-1 group">
              <img
                src="/images/hero/opening-image.png"
                alt="Energy Transition"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Warm orange glow overlay - Pure Tailwind */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/35 via-orange-400/20 to-transparent mix-blend-screen pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-6">
                ENERGÍA
              </div>
              <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-6">
                Powering Critical Operations
              </h2>
              <p className="text-lg font-light text-neutral-600 leading-relaxed mb-8">
                When production can't stop, our energy systems keep running. Reliable power 
                for mining operations, industrial facilities, and remote sites across North and 
                South America.
              </p>
              <a href="#empresas" className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] uppercase text-black hover:text-[#FF8C42] transition-all duration-300 group">
                Globe Power <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* Theme 2: Construction */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-6">
                CONSTRUCCIÓN MODULAR
              </div>
              <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-6">
                Redefining Construction Speed
              </h2>
              <p className="text-lg font-light text-neutral-600 leading-relaxed mb-8">
                Industrial infrastructure delivered in days, not months. Certified modular solutions 
                that reduce timelines by 60% without compromising on quality or safety standards.
              </p>
              <a href="#empresas" className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] uppercase text-black hover:text-[#FF8C42] transition-all duration-300 group">
                Globe Modular <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
            <div className="relative h-[600px] overflow-hidden group">
              <img
                src="/images/geographic/chile-new.jpg"
                alt="Modular Construction"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/35 via-orange-400/20 to-transparent mix-blend-screen pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-bl from-black/40 to-transparent" />
            </div>
          </div>

          {/* Theme 3: Services */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] overflow-hidden order-2 lg:order-1 group">
              <img
                src="/images/geographic/canada-canadian-forest.jpg"
                alt="Essential Services"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/35 via-orange-400/20 to-transparent mix-blend-screen pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-6">
                SERVICIOS CRÍTICOS
              </div>
              <h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-6">
                When Downtime Isn't an Option
              </h2>
              <p className="text-lg font-light text-neutral-600 leading-relaxed mb-8">
                From hospital infrastructure to mining equipment, we maintain critical systems 
                that can't fail. Preventive maintenance, rapid response, complete reliability.
              </p>
              <a href="#empresas" className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] uppercase text-black hover:text-[#FF8C42] transition-all duration-300 group">
                Globe Services <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Standard - Premium Dark Section */}
      <section id="estandar" className="relative py-40 px-10 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/images/geographic/canada-canadian-forest.jpg"
            alt="Background"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-8">
            CANADIAN STANDARDS
          </div>
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-12">
            The quiet discipline<br/>of doing things right
          </h2>
          <p className="text-[clamp(18px,2vw,22px)] font-light text-white/80 max-w-3xl mx-auto leading-relaxed mb-20">
            Canadian standards aren't about marketing—they're about operational rigor, 
            complete documentation, and the discipline to maintain excellence even when 
            no one is watching.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <h4 className="text-lg font-bold tracking-[0.1em] uppercase text-[#FF8C42] mb-4">Precision</h4>
              <p className="text-[15px] font-light text-white/70 leading-relaxed">
                Measurable results, documented processes, complete traceability from planning to execution.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <h4 className="text-lg font-bold tracking-[0.1em] uppercase text-[#FF8C42] mb-4">Consistency</h4>
              <p className="text-[15px] font-light text-white/70 leading-relaxed">
                The same high standard applied across every project, every site, every interaction.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <h4 className="text-lg font-bold tracking-[0.1em] uppercase text-[#FF8C42] mb-4">Integrity</h4>
              <p className="text-[15px] font-light text-white/70 leading-relaxed">
                Doing what we promised, when we promised it, to the standard we committed to.
              </p>
            </div>
          </div>

          <p className="text-base font-light text-white/60 italic">
            This is the standard that defines every Globe company. Not the exception—the expectation.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="empresas" className="py-40 px-10 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-8">
            NUESTRO PORTAFOLIO
          </div>
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-10">
            Six companies.<br/>One standard.
          </h2>
          <p className="text-[clamp(18px,2vw,22px)] font-light text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Each company operates independently with deep sector expertise, while benefiting from 
            shared operational standards and cross-portfolio synergies.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">
          {[
            { 
              logo: "logo-globe-power.png", 
              name: "Globe Power", 
              sector: "Energy",
              tagline: "Reliable power for critical operations",
              desc: "Industrial energy systems for mining, remote sites, and facilities that can't afford downtime."
            },
            { 
              logo: "logo-globe-modular.png", 
              name: "Globe Modular", 
              sector: "Construction",
              tagline: "Industrial infrastructure in days, not months",
              desc: "Certified modular construction reducing project timelines by 60% while meeting Canadian building codes."
            },
            { 
              logo: "logo-globe-services.png", 
              name: "Globe Services", 
              sector: "Maintenance",
              tagline: "Critical systems maintenance",
              desc: "Preventive and emergency maintenance for hospitals, industrial facilities, and mining operations."
            },
            { 
              logo: "logo-globe-flota.png", 
              name: "Globe Flota y Equipos", 
              sector: "Mining",
              tagline: "Fleet management expertise",
              desc: "Mining equipment management and optimization for operations across Chile."
            },
            { 
              logo: "logo-globe-lift-parts.png", 
              name: "Globe Lift Parts", 
              sector: "Mining",
              tagline: "Critical mining components",
              desc: "Immediate availability of essential parts for mining operations when every hour counts."
            },
            { 
              logo: "logo-globe-academy.png", 
              name: "Globe Academy", 
              sector: "Healthcare",
              tagline: "Medical education excellence",
              desc: "Healthcare training programs meeting international certification standards."
            }
          ].map((company, i) => (
            <div key={i} className="group bg-white border border-neutral-200 hover:border-[#FF8C42] p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <img
                  src={`/images/logos/${company.logo}`}
                  alt={company.name}
                  className="h-10 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#FF8C42] bg-[#FF8C42]/10 px-3 py-1.5">
                  {company.sector}
                </div>
              </div>
              <h3 className="text-lg font-bold tracking-[-0.01em] mb-2 text-black">{company.tagline}</h3>
              <p className="text-[15px] font-light text-neutral-600 leading-relaxed mb-6">{company.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] uppercase text-black hover:text-[#FF8C42] transition-all duration-300 group/link">
                Learn More <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem */}
      <section id="sectores" className="py-32 px-10 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#FF8C42] mb-8">
            THE GLOBE ECOSYSTEM
          </div>
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-black mb-10">
            Stronger together
          </h2>
          <p className="text-[clamp(18px,2vw,22px)] font-light text-neutral-900 max-w-4xl mx-auto leading-relaxed mb-16">
            Each Globe company benefits from being part of a larger network—shared operational 
            expertise, cross-sector insights, and collective intelligence that enables us to identify 
            and act on opportunities others can't see.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🔗</div>
              <h4 className="text-lg font-bold mb-3 text-black">Cross-Sector Synergies</h4>
              <p className="text-[15px] font-light text-neutral-600 leading-relaxed">
                Globe Power provides energy for Globe Modular construction sites. Globe Services 
                maintains equipment for Globe Flota operations.
              </p>
            </div>
            <div className="bg-white p-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-lg font-bold mb-3 text-black">Shared Intelligence</h4>
              <p className="text-[15px] font-light text-neutral-600 leading-relaxed">
                Operational insights and market intelligence flow across companies, enabling faster 
                decision-making and better outcomes.
              </p>
            </div>
            <div className="bg-white p-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-lg font-bold mb-3 text-black">Unified Standards</h4>
              <p className="text-[15px] font-light text-neutral-600 leading-relaxed">
                Canadian operational standards applied consistently across all companies, ensuring 
                quality and reliability at every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-40 px-10 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-12">
            Partner with companies<br/>
            that solve real problems
          </h2>
          <p className="text-[clamp(18px,2vw,22px)] font-light text-white/70 mb-14 leading-relaxed">
            Whether you're an entrepreneur building a business that transforms its sector, 
            an investor seeking enduring value, or talent looking to work where decisions matter—
            we want to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="bg-[#FF8C42] text-white px-12 py-5 text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-[#FF6B35] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,140,66,0.4)] transition-all duration-300 inline-block">
              Get in Touch
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-12 py-5 text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 inline-block">
              Career Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-20 px-10 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <img
                src="/images/logos/logo-grupo-globe.png"
                alt="Grupo Globe"
                className="h-15 w-auto mb-6 brightness-0 invert opacity-80"
              />
              <p className="text-sm font-light text-white/60 leading-relaxed">
                Building enduring value across critical industries with Canadian operational standards.
              </p>
            </div>
            <div>
              <h4 className="text-[13px] font-extrabold tracking-[0.15em] uppercase text-white mb-6">Portfolio</h4>
              <ul className="space-y-3">
                {["Globe Power", "Globe Modular", "Globe Services", "Globe Flota", "Globe Lift Parts", "Globe Academy"].map((company) => (
                  <li key={company}>
                    <a href="#" className="text-sm font-light text-white/60 hover:text-[#FF8C42] hover:pl-1 transition-all duration-300">{company}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-extrabold tracking-[0.15em] uppercase text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {["About Us", "Our Approach", "Canadian Standards", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-light text-white/60 hover:text-[#FF8C42] hover:pl-1 transition-all duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-extrabold tracking-[0.15em] uppercase text-white mb-6">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contact@grupogl obe.com" className="text-sm font-light text-white/60 hover:text-[#FF8C42] hover:pl-1 transition-all duration-300">contact@grupogl obe.com</a>
                </li>
                <li>
                  <a href="#" className="text-sm font-light text-white/60 hover:text-[#FF8C42] hover:pl-1 transition-all duration-300">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
            <p className="text-[13px] text-white/40">
              © 2026 Grupo Globe. All rights reserved.
            </p>
            <p className="text-[13px] font-semibold text-white/60 uppercase tracking-[0.15em]">
              El estándar. No la excepción.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
