'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LiftPartsSubNav() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past hero (approx 800px)
      setIsSticky(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Catálogo', href: '/liftparts/catalogo' },
    { label: 'Laboratorio', href: '/liftparts/laboratorio' },
    { label: 'Marcas', href: '/liftparts/marcas' },
    { label: 'Contacto', href: '/liftparts/contacto' },
    { label: 'Nosotros', href: '/liftparts/nosotros' },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div
      className={`fixed left-0 right-0 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 z-[9998] ${
        isSticky ? 'top-40 opacity-100' : 'top-0 opacity-0 pointer-events-none'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-slate-600 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-slate-600 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-slate-600 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Desktop horizontal navigation */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-bold tracking-wider uppercase transition-colors duration-300 relative group ${
                isActive(item.href)
                  ? 'text-[#FCD074]'
                  : 'text-slate-600 hover:text-[#FCD074]'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#FCD074] transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
          <a
            href="https://wa.me/56977974948?text=Hola%2C%20necesito%20información%20sobre%20repuestos%20para%20ascensores"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-2 text-xs font-bold tracking-wider uppercase rounded-full hover:bg-green-700 transition-all duration-300"
          >
            📱 WhatsApp
          </a>
        </div>

        {/* Mobile slide-out menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`md:hidden fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-6 space-y-6">
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end text-slate-600 hover:text-slate-900"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile nav items */}
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-bold tracking-wider uppercase transition-colors duration-300 py-2 border-b border-slate-200 ${
                  isActive(item.href)
                    ? 'text-[#FCD074]'
                    : 'text-slate-600 hover:text-[#FCD074]'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* WhatsApp button */}
            <a
              href="https://wa.me/56977974948?text=Hola%2C%20necesito%20información%20sobre%20repuestos%20para%20ascensores"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-green-600 text-white px-6 py-3 text-sm font-bold tracking-wider uppercase rounded-full hover:bg-green-700 transition-all duration-300 text-center"
            >
              📱 WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
