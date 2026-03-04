'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ModularHeader() {
  const pathname = usePathname();
  const [isSolucionesOpen, setIsSolucionesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolucionesOpen, setIsMobileSolucionesOpen] = useState(false);

  // Determine home link based on current path
  const getHomeLink = () => {
    if (pathname.includes('/modular')) return '/modular';
    return '/'; // default to root
  };

  const homeLink = getHomeLink();

  // Handle INICIO click to prevent reload when already on division home
  const handleInicioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === homeLink) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const solucionLinks = [
    {
      title: 'Minería',
      href: '/modular/industrias/mineria',
      description: 'Campamentos y oficinas mineras'
    },
    {
      title: 'Construcción',
      href: '/modular/industrias/construccion',
      description: 'Oficinas temporales y bodegas'
    },
    {
      title: 'Energía',
      href: '/modular/industrias/energia',
      description: 'Campamentos renovables'
    },
    {
      title: 'Industrial',
      href: '/modular/industrias/industrial',
      description: 'Bodegas y logística'
    },
    {
      title: 'Retail',
      href: '/modular/industrias/retail',
      description: 'Tiendas temporales'
    },
    {
      title: 'Salud',
      href: '/modular/industrias/salud',
      description: 'Clínicas modulares'
    },
    {
      title: 'Educación',
      href: '/modular/industrias/educacion',
      description: 'Salas de clase'
    },
    {
      title: 'Agricultura',
      href: '/modular/industrias/agricultura',
      description: 'Alojamiento temporero'
    }
  ];

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 max-w-7xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 w-[95%]" style={{ zIndex: 9999 }}>
        <div className="px-14 py-4 flex justify-between items-center w-full h-32">
          {/* Modular Logo */}
          <Link href="/" className="flex-shrink-0 py-2 bg-transparent flex items-center pl-12">
            <img
              src="/images/logos/modular-logo-clean.png"
              alt="Globe Modular"
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

            {/* SOLUCIONES Dropdown (Desktop) */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolucionesOpen(true)}
              onMouseLeave={() => setIsSolucionesOpen(false)}
            >
              <Link
                href="/modular/soluciones-modulares"
                className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300 flex items-center gap-1"
              >
                SOLUCIONES
                <svg 
                  className={`w-3 h-3 transition-transform duration-300 ${isSolucionesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Desktop Dropdown */}
              <AnimatePresence>
                {isSolucionesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl overflow-hidden grid grid-cols-2 gap-px"
                  >
                    {solucionLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-3 text-white hover:bg-white/5 transition-all duration-300 border-l-0 hover:border-l-[5px] border-[#DC964E] group"
                      >
                        <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                          {link.title}
                        </div>
                        <div className="text-[9px] text-white/60 group-hover:text-white/80 transition-colors">
                          {link.description}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/modular/arriendo-venta"
              className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300"
            >
              ARRIENDO Y VENTA
            </Link>

            <Link
              href="/modular/ingenieria-mantencion"
              className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300"
            >
              INGENIERÍA
            </Link>

            <a
              href="#contacto"
              className="bg-[#DC964E]/80 backdrop-blur-sm border border-white/30 text-white px-4 md:px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#DC964E] transition-all duration-300"
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
      </header>

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

                {/* SOLUCIONES Accordion (Mobile) */}
                <div>
                  <button
                    onClick={() => setIsMobileSolucionesOpen(!isMobileSolucionesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white/5 rounded-md transition-colors"
                  >
                    SOLUCIONES
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isMobileSolucionesOpen ? 'rotate-45' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isMobileSolucionesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 mt-2 space-y-2">
                          {solucionLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-all border-l-0 hover:border-l-[5px] border-[#DC964E]"
                            >
                              <div className="mb-1">{link.title}</div>
                              <div className="text-[9px] text-white/60 normal-case tracking-normal font-normal">
                                {link.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/modular/arriendo-venta"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  ARRIENDO Y VENTA
                </Link>

                <Link
                  href="/modular/ingenieria-mantencion"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  INGENIERÍA
                </Link>

                <a
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-xs font-bold tracking-[0.2em] uppercase text-white bg-[#DC964E]/20 hover:bg-[#DC964E]/30 rounded-md transition-colors text-center"
                >
                  CONTACTO
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
