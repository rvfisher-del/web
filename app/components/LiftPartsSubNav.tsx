'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LiftPartsSubNav() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past hero (approx 800px)
      setIsSticky(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
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
      </nav>
    </div>
  );
}
