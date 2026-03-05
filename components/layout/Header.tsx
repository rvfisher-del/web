'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine home link based on current path
  const getHomeLink = () => {
    if (pathname.includes('/servicios')) return '/servicios';
    if (pathname.includes('/power')) return '/power';
    return '/'; // default to root
  };

  const homeLink = getHomeLink();

  // Detect current division
  const isServiciosRoute = pathname?.startsWith('/servicios');
  const isPowerRoute = pathname?.startsWith('/power');
  const isModularRoute = pathname?.startsWith('/modular');
  const isHomePage = pathname === '/' || pathname === '/es' || pathname === '/en';

  // Handle INICIO click to prevent reload when already on division home
  const handleInicioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === homeLink) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const serviciosLinks = [
    {
      title: 'Modernización de Ascensores',
      href: '/servicios/modernizacion-ascensores',
      description: 'Retrofits técnicos y estéticos'
    },
    {
      title: 'Certificación 20.297',
      href: '/servicios/certificacion-normativa-20297',
      description: 'Cumplimiento normativo SEC'
    },
    {
      title: 'Mantenimiento Preventivo',
      href: '/servicios/mantenimiento-preventivo-ascensores',
      description: 'Soporte 24/7 y respuesta <2H'
    }
  ];

  const powerLinks = [
    {
      title: 'Subdistribución y Remarcación',
      href: '/power/subdistribucion-remarcacion',
      description: 'Transparencia total en medición'
    },
    {
      title: 'Eficiencia Energética',
      href: '/power/eficiencia-energetica',
      description: 'ISO 50001 y reducción 15%'
    },
    {
      title: 'Software y Reportería',
      href: '/power/software-reporteria',
      description: 'Power Digital en tiempo real'
    },
    {
      title: 'Mantenimiento Eléctrico',
      href: '/power/mantenimiento-electrico',
      description: 'Mantenimiento 4.0 predictivo'
    },
    {
      title: 'Generator Maintenance and Repairs',
      href: '/power/generator-maintenance',
      description: 'Generadores y reparaciones industriales'
    }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-50 left-1/2 -translate-x-1/2 max-w-7xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 ${
          isScrolled 
            ? 'w-[90%] mt-6' 
            : 'w-[95%] mt-6'
        }`}
      >
      <div className="px-14 py-4 flex justify-between items-center w-full h-32">
        {/* Logo - Clickable Home Button */}
        <Link href="/" className="flex-shrink-0 py-2 bg-transparent flex items-center pl-12">
          <img
            src="/images/logos/logo.png"
            alt="Grupo Globe"
            height={96}
            width="auto"
            className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 md:gap-6 pr-12">
          <a
            href={homeLink}
            onClick={handleInicioClick}
            className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300"
          >
            INICIO
          </a>

          <Link
            href="/power"
            className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300"
          >
            POWER
          </Link>

          {/* SERVICIOS Dropdown (Desktop) - Only in /servicios */}
          {isServiciosRoute && (
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/servicios"
                className={`px-3 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-1 ${
                  isServiciosRoute ? 'text-[#BA6347]' : 'text-white hover:text-white/80'
                }`}
              >
                SERVICIOS
                <svg 
                  className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl overflow-hidden"
                  >
                    {serviciosLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-6 py-4 text-white hover:bg-white/5 transition-all duration-300 border-l-0 hover:border-l-[5px] border-[#BA6347] group"
                      >
                        <div className="text-xs font-bold tracking-[0.15em] uppercase mb-1">
                          {link.title}
                        </div>
                        <div className="text-[10px] text-white/60 group-hover:text-white/80 transition-colors">
                          {link.description}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* SERVICIOS Dropdown (Desktop) - Only in /power */}
          {isPowerRoute && (
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/power"
                className={`px-3 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-1 ${
                  isPowerRoute ? 'text-[#3A5B1E]' : 'text-white hover:text-white/80'
                }`}
              >
                SERVICIOS
                <svg 
                  className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl overflow-hidden"
                  >
                    {powerLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-6 py-4 text-white hover:bg-white/5 transition-all duration-300 border-l-0 hover:border-l-[5px] border-[#3A5B1E] group"
                      >
                        <div className="text-xs font-bold tracking-[0.15em] uppercase mb-1">
                          {link.title}
                        </div>
                        <div className="text-[10px] text-white/60 group-hover:text-white/80 transition-colors">
                          {link.description}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <Link
            href="/servicios"
            className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300"
          >
            SERVICIOS
          </Link>

          <Link
            href="/modular"
            className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300"
          >
            MODULAR
          </Link>

          <a
            href="#contacto"
            onClick={(e) => smoothScroll(e, '#contacto')}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 md:px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white/30 transition-all duration-300"
          >
            CONTACTO
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden pr-12 text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </motion.header>

    {/* Mobile Menu Drawer */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-slate-950 border-l border-white/10 shadow-2xl z-[9999] lg:hidden overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-white/80 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="px-6 space-y-2">
              <a
                href={homeLink}
                onClick={(e) => {
                  handleInicioClick(e);
                  setIsMobileMenuOpen(false);
                }}
                className="block px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white/5 rounded-md transition-colors"
              >
                INICIO
              </a>

              <Link
                href="/power"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white/5 rounded-md transition-colors"
              >
                POWER
              </Link>

              {/* SERVICIOS Accordion (Mobile) - Only in /servicios */}
              {isServiciosRoute && (
                <div className="border-b border-white/10">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white/5 transition-colors"
                  >
                    SERVICIOS
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white/5"
                      >
                        {serviciosLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                            className="block px-10 py-3 text-[11px] font-semibold text-white/80 hover:text-white hover:bg-white/5 transition-all border-l-0 hover:border-l-4 border-[#BA6347]"
                          >
                            <div className="uppercase tracking-wide mb-0.5">{link.title}</div>
                            <div className="text-[9px] text-white/50">{link.description}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* SERVICIOS Accordion (Mobile) - Only in /power */}
              {isPowerRoute && (
                <div className="border-b border-white/10">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white/5 transition-colors"
                  >
                    SERVICIOS
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white/5"
                      >
                        {powerLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                            className="block px-10 py-3 text-[11px] font-semibold text-white/80 hover:text-white hover:bg-white/5 transition-all border-l-0 hover:border-l-4 border-[#3A5B1E]"
                          >
                            <div className="uppercase tracking-wide mb-0.5">{link.title}</div>
                            <div className="text-[9px] text-white/50">{link.description}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              <Link
                href="/servicios"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white/5 rounded-md transition-colors"
              >
                SERVICIOS
              </Link>

              <Link
                href="/modular"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white/5 rounded-md transition-colors"
              >
                MODULAR
              </Link>

              <a
                href="#contacto"
                onClick={(e) => {
                  smoothScroll(e, '#contacto');
                  setIsMobileMenuOpen(false);
                }}
                className="block px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase text-white bg-[#BA6347]/20 hover:bg-[#BA6347]/30 rounded-md transition-colors text-center"
              >
                CONTACTO
              </a>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>

    {/* Anchor Line - Header to Hero */}
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-24 left-1/2 -translate-x-1/2 z-40"
      style={{ transformOrigin: 'top' }}
    >
      <div className="w-px h-40 bg-white/20" />
    </motion.div>
    </>
  );
}
