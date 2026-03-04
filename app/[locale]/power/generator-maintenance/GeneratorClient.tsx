'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function GeneratorClient() {
  const pathname = usePathname();

  const getHomeLink = () => {
    if (pathname.includes('/servicios')) return '/servicios';
    if (pathname.includes('/power')) return '/power';
    return '/';
  };

  const homeLink = getHomeLink();

  const handleInicioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === homeLink) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-white">
        {/* Glass Pill Header */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 max-w-7xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 w-[95%]" style={{ zIndex: 9999 }}>
          <div className="px-14 py-4 flex justify-between items-center w-full h-32">
            <a href="/" className="flex-shrink-0 py-2 bg-transparent flex items-center pl-12">
              <img
                src="/images/logos/power-logo-clean.png"
                alt="Globe Power - Gestión Energética Corporativa Chile"
                height={96}
                width="auto"
                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </a>

            <nav className="flex items-center gap-4 md:gap-6 pr-12">
              <a href={homeLink} onClick={handleInicioClick} className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300">
                INICIO
              </a>
              <a href="#contacto" className="bg-[#3A5B1E]/80 backdrop-blur-sm border border-white/30 text-white px-4 md:px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#3A5B1E] transition-all duration-300">
                CONTACTO
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[#3A5B1E]/10" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Back Link */}
            <div className="mb-8">
              <a href="/power" className="inline-flex items-center gap-2 text-[#91A56E] hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-bold tracking-wider uppercase">Volver a Globe Power</span>
              </a>
            </div>

            <div className="text-center">
              <h1 className="text-[clamp(40px,5vw,72px)] font-black leading-[1.1] text-white mb-8" style={{ letterSpacing: '-0.05em' }}>
                Generator Maintenance and Repairs: Uninterrupted power when you need it most
              </h1>
              
              <p className="text-[clamp(20px,2vw,28px)] font-light text-[#91A56E] mb-12 leading-relaxed max-w-4xl mx-auto">
                Industrial power generation you can count on
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">24/7</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Emergency Support</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">&lt;4H</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Response Time</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 border-t-2 border-t-[#3A5B1E] px-6 py-8 rounded-lg">
                  <div className="text-4xl font-black text-white mb-2">100%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#91A56E]">Uptime Target</div>
                </div>
              </div>

              <a href="#contacto" className="bg-[#3A5B1E] text-white px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#2d4617] transition-all duration-300 rounded-md inline-block">
                Request Service Quote
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <svg className="w-8 h-8 text-white animate-bounce" style={{ animationDuration: '2000ms' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 1: The Problem */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Power failures cost operations thousands per hour
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Backup power systems are critical — but only if they work when you need them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="bg-red-50 p-10 border-l-4 border-red-600">
                <div className="text-6xl font-bold text-red-600 mb-6">✗</div>
                <h3 className="text-2xl font-bold text-black mb-6">Reactive Generator Management</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>Generator fails during power outage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>Emergency repairs cost 3x standard pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>Operational downtime damages reputation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl flex-shrink-0">✗</span>
                    <span>No visibility into generator health</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#3A5B1E]/5 p-10 border-l-4 border-[#3A5B1E]">
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">✓</div>
                <h3 className="text-2xl font-bold text-[#3A5B1E] mb-6">Proactive Generator Care</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Scheduled preventive maintenance prevents failures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>24/7 monitoring with automatic alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Load testing ensures readiness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#3A5B1E] text-xl flex-shrink-0">✓</span>
                    <span>Guaranteed &lt;4H emergency response</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 2: Services */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8F8B84] mb-4 block">
                COMPREHENSIVE GENERATOR SERVICES
              </span>
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Installation, maintenance, and emergency repairs
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">01</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Generator Installation
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Professional sizing, installation, and commissioning of industrial generators. Load calculation, fuel systems, automatic transfer switches.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Site assessment and load analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Diesel, gas, and hybrid systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Full commissioning and testing</span>
                  </div>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">02</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Preventive Maintenance
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Scheduled inspections, oil changes, filter replacements, battery testing, and load bank testing to ensure generator readiness.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Monthly/quarterly service contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Load bank testing under full load</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Detailed inspection reports</span>
                  </div>
                </div>
              </motion.div>

              {/* Service 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-10 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-bold text-[#3A5B1E] mb-6">03</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Emergency Repairs
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  24/7 emergency repair service with certified technicians. Rapid diagnosis, parts inventory, and on-site or workshop repairs.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>&lt;4H response time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>OEM and aftermarket parts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#3A5B1E]">•</span>
                    <span>Generator rental during repairs</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 3: Equipment Coverage */}
        <section className="py-32 bg-gradient-to-br from-[#3A5B1E] to-[#2d4617] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
                Full coverage for all generator types and sizes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-white mb-3">•</div>
                <h3 className="font-bold text-lg mb-2">Diesel Generators</h3>
                <p className="text-sm text-white/80">10 kW to 2500 kW industrial units</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-white mb-3">•</div>
                <h3 className="font-bold text-lg mb-2">Natural Gas Generators</h3>
                <p className="text-sm text-white/80">Continuous and standby power</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-white mb-3">•</div>
                <h3 className="font-bold text-lg mb-2">Automatic Transfer Switches</h3>
                <p className="text-sm text-white/80">ATS installation and testing</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-white mb-3">•</div>
                <h3 className="font-bold text-lg mb-2">UPS Systems</h3>
                <p className="text-sm text-white/80">Uninterruptible power supplies</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-white mb-3">•</div>
                <h3 className="font-bold text-lg mb-2">Hybrid Systems</h3>
                <p className="text-sm text-white/80">Solar + generator integration</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <div className="text-4xl font-bold text-white mb-3">•</div>
                <h3 className="font-bold text-lg mb-2">Remote Monitoring</h3>
                <p className="text-sm text-white/80">24/7 telemetry and alerts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Section 4: Results */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-black mb-6" style={{ letterSpacing: '-0.05em' }}>
                Reliable power when it matters most
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-8 bg-slate-50 rounded-lg">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">100%</div>
                <div className="text-sm uppercase tracking-wider text-slate-600 mb-4">Start Reliability</div>
                <p className="text-xs text-slate-500">Guaranteed generator start during power outages</p>
              </div>

              <div className="text-center p-8 bg-slate-50 rounded-lg">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">&lt;4H</div>
                <div className="text-sm uppercase tracking-wider text-slate-600 mb-4">Emergency Response</div>
                <p className="text-xs text-slate-500">Technician on-site within 4 hours anywhere in Chile</p>
              </div>

              <div className="text-center p-8 bg-slate-50 rounded-lg">
                <div className="text-5xl font-black text-[#3A5B1E] mb-3">24/7</div>
                <div className="text-sm uppercase tracking-wider text-slate-600 mb-4">Support Availability</div>
                <p className="text-xs text-slate-500">Round-the-clock monitoring and support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ghost Thread */}
        <div className="relative w-full h-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#3A5B1E]/30" />
        </div>

        {/* Related Spokes */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-black mb-4">Related Services</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/power/mantenimiento-electrico" className="bg-white p-6 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3 text-[#3A5B1E] font-bold">01</div>
                <h4 className="font-bold text-black mb-2">Electrical Maintenance</h4>
                <p className="text-sm text-slate-600">Predictive maintenance 4.0</p>
              </a>
              <a href="/power/eficiencia-energetica" className="bg-white p-6 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3 text-[#3A5B1E] font-bold">02</div>
                <h4 className="font-bold text-black mb-2">Energy Efficiency</h4>
                <p className="text-sm text-slate-600">Reduce consumption 15%</p>
              </a>
              <a href="/power/software-reporteria" className="bg-white p-6 border-l-4 border-[#3A5B1E] hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3 text-[#3A5B1E] font-bold">03</div>
                <h4 className="font-bold text-black mb-2">Software & Reporting</h4>
                <p className="text-sm text-slate-600">Real-time telemetry</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="py-32 bg-gradient-to-br from-[#3A5B1E] via-[#2d4617] to-[#3A5B1E] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[clamp(40px,6vw,64px)] font-black leading-[1.1] mb-8" style={{ letterSpacing: '-0.05em' }}>
              Never lose power again
            </h2>
            <p className="text-xl text-[#91A56E] leading-relaxed mb-12">
              Free consultation. We'll assess your backup power needs and provide a customized maintenance plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="mailto:aportilla@globepower.cl" className="bg-white text-[#3A5B1E] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#91A56E] hover:text-white transition-all duration-300 rounded-md">
                Request Service Quote
              </a>
              <a href="mailto:aportilla@globepower.cl" className="bg-transparent border-2 border-white text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#3A5B1E] transition-all duration-300 rounded-md">
                Schedule Generator Inspection
              </a>
            </div>
            
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/80 mb-4">Contact:</p>
              <p className="text-lg font-bold text-white mb-2">Álvaro Portilla - General Manager Globe Power</p>
              <p className="text-white/80">
                <a href="mailto:aportilla@globepower.cl" className="hover:text-white transition-colors">aportilla@globepower.cl</a> | 
                <a href="tel:+56957809131" className="hover:text-white transition-colors ml-2">+56 9 5780 9131</a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <img
                  src="/images/logos/power-logo-clean.png"
                  alt="Globe Power"
                  className="h-[60px] w-auto mb-4 opacity-80"
                />
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8F8B84] font-bold mt-4">
                  A Grupo Globe company.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#91A56E]">Services</h4>
                <ul className="space-y-2">
                  <li><a href="/power/subdistribucion-remarcacion" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Submetering</a></li>
                  <li><a href="/power/eficiencia-energetica" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Energy Efficiency</a></li>
                  <li><a href="/power/software-reporteria" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Software & Reporting</a></li>
                  <li><a href="/power/mantenimiento-electrico" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Maintenance</a></li>
                  <li><a href="/power/generator-maintenance" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Generators</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#91A56E]">Grupo Globe</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Home</a></li>
                  <li><a href="/power" className="text-[#8F8B84] hover:text-white transition-colors text-sm">Globe Power</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-[#91A56E]">Contact</h4>
                <ul className="space-y-2">
                  <li><a href="mailto:aportilla@globepower.cl" className="text-[#8F8B84] hover:text-white transition-colors text-sm">aportilla@globepower.cl</a></li>
                  <li><a href="tel:+56957809131" className="text-[#8F8B84] hover:text-white transition-colors text-sm">+56 9 5780 9131</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-[#8F8B84] text-center">
                © 2026 Grupo Globe. Corporate energy management in Chile.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
