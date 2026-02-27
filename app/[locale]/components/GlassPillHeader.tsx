'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function GlassPillHeader() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] rounded-full border border-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 ${
        isScrolled 
          ? 'w-[85%] max-w-5xl bg-white/10' 
          : 'w-[95%] max-w-6xl bg-white/5'
      }`}
    >
      <div className="px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/logos/logo-grupo-globe.png"
            alt="Grupo Globe"
            className="h-12 w-auto brightness-0 invert opacity-90 transition-all duration-300"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#empresas"
            onClick={(e) => smoothScroll(e, '#empresas')}
            className="text-[12px] font-bold tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors duration-300"
          >
            {t('navigation.companies')}
          </a>
          <a
            href="#nosotros"
            onClick={(e) => smoothScroll(e, '#nosotros')}
            className="text-[12px] font-bold tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors duration-300"
          >
            {t('navigation.about')}
          </a>
          <a
            href="#valores"
            onClick={(e) => smoothScroll(e, '#valores')}
            className="text-[12px] font-bold tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors duration-300"
          >
            Valores
          </a>
          <LanguageSwitcher />
          <a
            href="#contacto"
            onClick={(e) => smoothScroll(e, '#contacto')}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase rounded-full hover:bg-white/30 transition-all duration-300"
          >
            {t('navigation.contact')}
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
