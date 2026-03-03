'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="relative bg-slate-950 !text-white py-32 overflow-hidden">
      {/* Giant 'G' Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="text-[80vw] font-black text-white/[0.02] leading-none"
          style={{ letterSpacing: '-0.05em' }}
        >
          G
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Empresas */}
          <div>
            <h4 className="text-[13px] font-black tracking-[0.2em] uppercase text-white mb-8">
              {t('footer.portfolioTitle')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/power/" 
                  className="text-[15px] font-light text-white/60 hover:text-[#3A5B1E] transition-colors duration-300"
                >
                  Globe Power
                </a>
              </li>
              <li>
                <a 
                  href="/modular/" 
                  className="text-[15px] font-light text-white/60 hover:text-[#2563EB] transition-colors duration-300"
                >
                  Globe Modular
                </a>
              </li>
              <li>
                <a 
                  href="/servicios/" 
                  className="text-[15px] font-light text-white/60 hover:text-[#FF8C42] transition-colors duration-300"
                >
                  Globe Services
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[15px] font-light text-white/60 hover:text-[#DC2626] transition-colors duration-300"
                >
                  Globe Flota y Equipos
                </a>
              </li>
              <li>
                <a 
                  href="https://globe-lift-parts.vercel.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-light text-white/60 hover:text-[#7C3AED] transition-colors duration-300"
                >
                  Globe Lift Parts
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[15px] font-light text-white/60 hover:text-[#0891B2] transition-colors duration-300"
                >
                  Globe Academy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Presencia Regional */}
          <div>
            <h4 className="text-[13px] font-black tracking-[0.2em] uppercase text-white mb-8">
              Presencia Regional
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="text-[15px] font-light text-white/60">
                  <div className="font-semibold text-white/80 mb-1">Canadá</div>
                  <div className="text-[14px]">Sede corporativa</div>
                </div>
              </li>
              <li>
                <div className="text-[15px] font-light text-white/60">
                  <div className="font-semibold text-white/80 mb-1">Chile</div>
                  <div className="text-[14px]">Operaciones regionales</div>
                </div>
              </li>
              <li>
                <div className="text-[15px] font-light text-white/60">
                  <div className="font-semibold text-white/80 mb-1">América Latina</div>
                  <div className="text-[14px]">Expansión en curso</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-[13px] font-black tracking-[0.2em] uppercase text-white mb-8">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#estandar" 
                  className="text-[15px] font-light text-white/60 hover:text-white transition-colors duration-300"
                >
                  Precisión Canadiense
                </a>
              </li>
              <li>
                <a 
                  href="#estandar" 
                  className="text-[15px] font-light text-white/60 hover:text-white transition-colors duration-300"
                >
                  Consistencia Operacional
                </a>
              </li>
              <li>
                <a 
                  href="#estandar" 
                  className="text-[15px] font-light text-white/60 hover:text-white transition-colors duration-300"
                >
                  Integridad Comercial
                </a>
              </li>
              <li>
                <a 
                  href="#nosotros" 
                  className="text-[15px] font-light text-white/60 hover:text-white transition-colors duration-300"
                >
                  Certificación B-Corp
                </a>
              </li>
              <li>
                <a 
                  href="#nosotros" 
                  className="text-[15px] font-light text-white/60 hover:text-white transition-colors duration-300"
                >
                  Impacto Social
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h4 className="text-[13px] font-black tracking-[0.2em] uppercase text-white mb-8">
              {t('footer.connectTitle')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contact@grupogl obe.com" 
                  className="text-[15px] font-light text-white/60 hover:text-white transition-colors duration-300"
                >
                  contact@grupogl obe.com
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[15px] font-light text-white/60 hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[15px] font-light text-white/60 hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="#contacto" 
                  className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 mt-4"
                >
                  Contáctanos <span>→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <img 
                src="/brand/logo-official.png" 
                alt="Grupo Globe" 
                className="h-12 w-auto brightness-0 invert opacity-60" 
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-[18px] font-black uppercase tracking-[0.2em] text-white/80 mb-2">
                EL ESTÁNDAR CANADIENSE
              </p>
              <p className="text-[13px] text-white/40">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
          
          {/* High-End Monospace Signature */}
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p 
              className="text-[11px] text-white/30 tracking-[0.1em]"
              style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
            >
              BUILT BY GRUPO GLOBE · ENGINEERED WITH PRECISION
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
