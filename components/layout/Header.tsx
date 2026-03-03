'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Header() {
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
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ zIndex: 9999 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 max-w-6xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 ${
          isScrolled 
            ? 'w-[85%]' 
            : 'w-[90%]'
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

        {/* Navigation - Always Visible */}
        <nav className="flex items-center gap-6 md:gap-10 pr-12">
          <Link
            href="/"
            className="px-4 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300"
          >
            INICIO
          </Link>
          <a
            href="#empresas"
            onClick={(e) => smoothScroll(e, '#empresas')}
            className="px-4 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300"
          >
            EMPRESAS
          </a>
          <a
            href="#contacto"
            onClick={(e) => smoothScroll(e, '#contacto')}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 md:px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white/30 transition-all duration-300"
          >
            CONTACTO
          </a>
        </nav>
      </div>
    </motion.header>

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
