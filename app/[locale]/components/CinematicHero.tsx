'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function CinematicHero() {
  const t = useTranslations();
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden py-40">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
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
            <source src="https://uglt1ui3grpqnmsq.public.blob.vercel-storage.com/hero-loop-1772222272733.mp4" type="video/mp4" />
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
      <div className="relative z-10 h-full flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Industrial Left-Aligned Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            {/* Dominant Title - The Volume */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-tighter mb-0"
              style={{ 
                fontSize: 'clamp(3rem, 8vw, 9rem)',
                letterSpacing: '-0.05em',
                lineHeight: '0.9',
                textShadow: '0 10px 30px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.2)',
                fontFamily: "'Inter', -apple-system, sans-serif"
              }}
            >
              <span className="text-white">{t('hero.headline')}</span>
            </motion.h1>

            {/* Branded Badge/Tagline - Smaller, Subtle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-light uppercase text-slate-400/80 mt-6"
              style={{ 
                fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                letterSpacing: '0.15em',
                lineHeight: '1.6'
              }}
            >
              {t('hero.label')}
            </motion.p>

            {/* Vertical Tracing Line - The Bridge */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 ml-0"
              style={{ transformOrigin: 'top' }}
            >
              <div className="w-px h-32 bg-white/10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
