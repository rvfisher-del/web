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
        
        {/* LAYER 1: Deep Scrim - Global darkening */}
        <div className="absolute inset-0 bg-slate-950/50" />
        
        {/* LAYER 2: Deep Scrim - Bottom-heavy gradient nest */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(2, 6, 23, 0.8) 0%, transparent 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* TEXT-BOX GLASSMORPHISM - The Shield */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-8"
            >
              GRUPO GLOBE
            </motion.div>

            {/* HARDENED CANADIAN POWER HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl lg:text-8xl font-black mb-6"
              style={{ 
                letterSpacing: '-0.06em',
                lineHeight: '0.9',
                textShadow: '0 10px 30px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.2)',
                fontFamily: "'Inter', -apple-system, sans-serif"
              }}
            >
              <span className="text-white">EL ESTÁNDAR</span>
              <br />
              <span className="text-red-600">CANADIENSE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl lg:text-4xl font-light text-slate-300"
              style={{ 
                letterSpacing: '0.05em',
                lineHeight: '1.6'
              }}
            >
              No la excepción.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-20"
            >
              <a
                href="#empresas"
                className="inline-block bg-red-600 text-white px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-red-700 transition-all duration-300 rounded-sm shadow-[0_0_40px_rgba(220,38,38,0.3)]"
              >
                Descubrir Empresas
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Industrial Connector - Hero to Empresas */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'top' }}
      >
        <div className="w-px h-64 bg-white/20" />
      </motion.div>

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
