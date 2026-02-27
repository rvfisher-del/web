'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function CinematicHero() {
  const t = useTranslations();
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero/opening-image.png"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: videoLoaded ? 1 : 0 }}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
          >
            <source src="https://uglt1ui3grpqnmsq.public.blob.vercel-storage.com/hero-loop.mp4" type="video/mp4" />
          </video>
        ) : (
          // Fallback to image if video not available
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero/opening-image.png')",
            }}
          />
        )}
        
        {/* Dark Veil Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.8))'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-8"
          >
            GRUPO GLOBE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl lg:text-9xl font-black text-white leading-none mb-12 drop-shadow-2xl"
            style={{ letterSpacing: '-0.05em' }}
          >
            EL ESTÁNDAR<br />CANADIENSE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl lg:text-4xl font-light text-white/90 mb-4 drop-shadow-xl"
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
              className="inline-block bg-white text-black px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-white/90 transition-all duration-300 rounded-sm"
            >
              Descubrir Empresas
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
