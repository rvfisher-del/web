'use client';

import { useState, useEffect } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companiesDropdownOpen, setCompaniesDropdownOpen] = useState(false);
  const [powerSubmenuOpen, setPowerSubmenuOpen] = useState(false);
  const [powerPrefetched, setPowerPrefetched] = useState(false);

  // Prefetch /power route when hovering over Globe Power link
  const prefetchPower = () => {
    if (!powerPrefetched && typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = '/power/';
      document.head.appendChild(link);
      setPowerPrefetched(true);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/logos/logo-grupo-globe.png"
              alt="Grupo Globe"
              className="h-10 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#nosotros"
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? 'text-gray-700 hover:text-[#FF8C42]'
                  : 'text-white hover:text-[#FF8C42]'
              }`}
            >
              Nosotros
            </a>
            <a
              href="#sectores"
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? 'text-gray-700 hover:text-[#FF8C42]'
                  : 'text-white hover:text-[#FF8C42]'
              }`}
            >
              Sectores
            </a>
            <a
              href="/servicios"
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? 'text-gray-700 hover:text-[#FF8C42]'
                  : 'text-white hover:text-[#FF8C42]'
              }`}
            >
              Servicios
            </a>

            {/* Companies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompaniesDropdownOpen(true)}
              onMouseLeave={() => setCompaniesDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-gray-700 hover:text-[#FF8C42]'
                    : 'text-white hover:text-[#FF8C42]'
                }`}
              >
                Empresas ▾
              </button>
              {companiesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                  onMouseEnter={() => setCompaniesDropdownOpen(true)}
                  onMouseLeave={() => setCompaniesDropdownOpen(false)}
                >
                  {/* Globe Power with submenu */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => setPowerSubmenuOpen(true)}
                    onMouseLeave={() => setPowerSubmenuOpen(false)}
                  >
                    <a
                      href="/power/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8C42] transition-colors"
                      onClick={() => setCompaniesDropdownOpen(false)}
                      onMouseEnter={prefetchPower}
                    >
                      Globe Power →
                    </a>
                    
                    {powerSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                        onMouseEnter={() => setPowerSubmenuOpen(true)}
                        onMouseLeave={() => setPowerSubmenuOpen(false)}
                      >
                        <a
                          href="/power/subdistribucion-remarcacion"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8C42] transition-colors"
                          onClick={() => { setCompaniesDropdownOpen(false); setPowerSubmenuOpen(false); }}
                        >
                          Subdistribución y Remarcación
                        </a>
                        <a
                          href="/power/eficiencia-energetica"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8C42] transition-colors"
                          onClick={() => { setCompaniesDropdownOpen(false); setPowerSubmenuOpen(false); }}
                        >
                          Eficiencia Energética
                        </a>
                        <a
                          href="/power/software-reporteria"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8C42] transition-colors"
                          onClick={() => { setCompaniesDropdownOpen(false); setPowerSubmenuOpen(false); }}
                        >
                          Software y Reportería
                        </a>
                        <a
                          href="/power/mantenimiento-electrico"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8C42] transition-colors"
                          onClick={() => { setCompaniesDropdownOpen(false); setPowerSubmenuOpen(false); }}
                        >
                          Mantenimiento Eléctrico
                        </a>
                      </div>
                    )}
                  </div>
                  <a
                    href="#globe-flota"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8C42] transition-colors"
                    onClick={() => setCompaniesDropdownOpen(false)}
                  >
                    Globe Flota y Equipos
                  </a>
                  <a
                    href="#globe-modular"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8C42] transition-colors"
                    onClick={() => setCompaniesDropdownOpen(false)}
                  >
                    Globe Modular
                  </a>
                  <a
                    href="#globe-academy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8C42] transition-colors"
                    onClick={() => setCompaniesDropdownOpen(false)}
                  >
                    Globe Academy
                  </a>
                  <a
                    href="/servicios"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8C42] transition-colors"
                    onClick={() => setCompaniesDropdownOpen(false)}
                  >
                    Globe Services
                  </a>
                  <a
                    href="#globe-lift-parts"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8C42] transition-colors"
                    onClick={() => setCompaniesDropdownOpen(false)}
                  >
                    Globe Lift Parts
                  </a>
                </div>
              )}
            </div>

            <a
              href="#valores"
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? 'text-gray-700 hover:text-[#FF8C42]'
                  : 'text-white hover:text-[#FF8C42]'
              }`}
            >
              Valores
            </a>
            <a
              href="#contacto"
              className="px-6 py-2.5 bg-gradient-to-r from-[#FF8C42] to-[#FF7420] text-white text-sm font-semibold rounded-md hover:shadow-lg transition-all duration-200"
            >
              Contacto
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-3 px-4">
              <a
                href="#nosotros"
                className="text-sm font-medium text-gray-700 hover:text-[#FF8C42]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#sectores"
                className="text-sm font-medium text-gray-700 hover:text-[#FF8C42]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sectores
              </a>
              <a
                href="/servicios"
                className="text-sm font-medium text-gray-700 hover:text-[#FF8C42]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#valores"
                className="text-sm font-medium text-gray-700 hover:text-[#FF8C42]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Valores
              </a>
              <a
                href="#contacto"
                className="px-6 py-2.5 bg-gradient-to-r from-[#FF8C42] to-[#FF7420] text-white text-sm font-semibold rounded-md text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
