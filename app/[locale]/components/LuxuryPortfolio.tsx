'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const companies = [
  {
    logo: "logo-globe-power.png",
    name: "Globe Power",
    key: "power",
    url: "/power/",
    brandColor: "#3A5B1E",
  },
  {
    logo: "logo-globe-modular.png",
    name: "Globe Modular",
    key: "modular",
    url: "/modular/",
    brandColor: "#2563EB",
  },
  {
    logo: "logo-globe-services.png",
    name: "Globe Services",
    key: "services",
    url: "/servicios/",
    brandColor: "#FF8C42",
  },
  {
    logo: "logo-globe-flota.png",
    name: "Globe Flota y Equipos",
    key: "flota",
    url: "#",
    brandColor: "#DC2626",
  },
  {
    logo: "logo-globe-lift-parts.png",
    name: "Globe Lift Parts",
    key: "liftparts",
    url: "https://globe-lift-parts.vercel.app",
    brandColor: "#7C3AED",
  },
  {
    logo: "logo-globe-academy.png",
    name: "Globe Academy",
    key: "academy",
    url: "#",
    brandColor: "#0891B2",
  },
];

export default function LuxuryPortfolio() {
  const t = useTranslations();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="empresas" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-8">
            {t('portfolio.label')}
          </div>
          <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-[1.1] text-white mb-10" style={{ letterSpacing: '-0.05em' }}>
            {t('portfolio.headline')}
          </h2>
          <p className="text-[clamp(18px,2vw,24px)] font-light text-white/60 max-w-3xl mx-auto leading-relaxed">
            {t('portfolio.subheadline')}
          </p>
        </motion.div>
      </div>

      {/* Zero-Gap Gallery Grid with Monochrome-to-Color */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                delay: i * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-[400px] overflow-hidden"
              style={{
                backgroundColor: hoveredIndex === i ? company.brandColor : '#0a0a0a',
                opacity: hoveredIndex === null ? 1 : hoveredIndex === i ? 1 : 0.4,
                borderWidth: '1px',
                borderColor: hoveredIndex === i ? company.brandColor : 'rgba(255,255,255,0.05)',
                zIndex: hoveredIndex === i ? 10 : 1,
                transform: hoveredIndex === i ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredIndex === i ? '0 20px 50px rgba(0,0,0,0.3)' : 'none',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center">
                {/* Logo - Monochrome to Color Discovery */}
                <div className="mb-8 transition-all duration-500">
                  <img
                    src={`/images/logos/${company.logo}`}
                    alt={company.name}
                    className="h-16 w-auto object-contain transition-all duration-500"
                    style={{
                      filter: hoveredIndex === i 
                        ? 'none' 
                        : 'grayscale(1) brightness(0.8)',
                      opacity: hoveredIndex === i ? 1 : 0.5,
                      transitionDuration: '500ms',
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                </div>

                {/* Sector Badge */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    {t(`portfolio.companies.${company.key}.sector`)}
                  </span>
                </div>

                {/* Tagline */}
                <h3 className="text-[20px] font-bold tracking-tight text-white mb-4">
                  {t(`portfolio.companies.${company.key}.tagline`)}
                </h3>

                {/* Description */}
                <p className="text-[14px] font-light text-white/70 leading-relaxed mb-8 max-w-xs">
                  {t(`portfolio.companies.${company.key}.description`)}
                </p>

                {/* CTA */}
                {company.url !== '#' && (
                  <a
                    href={company.url}
                    target={company.url.startsWith('http') ? '_blank' : undefined}
                    rel={company.url.startsWith('http') ? 'noopener noreferrer' : 'prefetch'}
                    className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {t('portfolio.learnMore')}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                )}
                {company.url === '#' && (
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/40">
                    Próximamente
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
