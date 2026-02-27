'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function WebbyHero() {
  const t = useTranslations();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Cinematic Background with Ken Burns Effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/opening-image.png')",
          }}
        />
        {/* Vantablack Overlay with radial gradient */}
        <div 
          className="absolute inset-0 backdrop-blur-[2px]" 
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(2, 6, 23, 0.8) 100%)'
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-8"
          >
            {t('hero.label')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl lg:text-9xl font-black tracking-tighter text-white leading-none mb-12"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
          >
            EL ESTÁNDAR<br />CANADIENSE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-3xl font-light text-white/90 mb-4"
          >
            No la excepción.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16"
          >
            <a
              href="#empresas"
              className="inline-block bg-white text-black px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white/90 transition-all duration-300"
            >
              {t('hero.ctaPrimary')}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-px h-16 bg-white/30" />
      </motion.div>
    </section>
  );
}
