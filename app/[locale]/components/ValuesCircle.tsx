'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ValuesCircle() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      id="valores"
      ref={sectionRef}
      className="relative py-48 bg-white overflow-hidden"
    >
      {/* Maximum Breathing Room */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Rotating Circle */}
        <motion.div
          style={{ rotate }}
          className="relative mx-auto mb-24 w-[300px] h-[300px]"
        >
          {/* Circle SVG */}
          <svg
            className="w-full h-full"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="150"
              cy="150"
              r="140"
              stroke="currentColor"
              strokeWidth="1"
              className="text-black/20"
              fill="none"
            />
            <circle
              cx="150"
              cy="150"
              r="120"
              stroke="currentColor"
              strokeWidth="1"
              className="text-black/10"
              fill="none"
            />
            <circle
              cx="150"
              cy="150"
              r="100"
              stroke="currentColor"
              strokeWidth="1"
              className="text-black/5"
              fill="none"
            />
          </svg>

          {/* Center Text (counter-rotate to stay upright) */}
          <motion.div
            style={{ rotate: useTransform(rotate, (r) => -r) }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-[80px] font-black text-black leading-none tracking-tighter">
                360°
              </div>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/40 mt-2">
                Visión Completa
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(32px,5vw,56px)] font-black leading-[1.2] tracking-tighter text-black mb-8"
        >
          Construyendo valor duradero
          <br />
          en industrias críticas
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18px] font-light text-black/60 leading-relaxed max-w-2xl mx-auto"
        >
          No perseguimos ganancias de corto plazo. Construimos empresas que trascienden ciclos económicos, 
          con prácticas sustentables e impacto medible en las comunidades donde operamos.
        </motion.p>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16"
        >
          <div>
            <div className="text-[14px] font-bold tracking-[0.2em] uppercase text-black/40 mb-4">
              01
            </div>
            <h3 className="text-[20px] font-bold tracking-tight text-black mb-3">
              Rigor Operacional
            </h3>
            <p className="text-[15px] font-light text-black/60 leading-relaxed">
              Estándares canadienses aplicados en todo nuestro portafolio: procesos documentados, 
              trazabilidad completa, cero improvisación.
            </p>
          </div>

          <div>
            <div className="text-[14px] font-bold tracking-[0.2em] uppercase text-black/40 mb-4">
              02
            </div>
            <h3 className="text-[20px] font-bold tracking-tight text-black mb-3">
              Experiencia Industrial
            </h3>
            <p className="text-[15px] font-light text-black/60 leading-relaxed">
              Profunda experiencia operacional en cada sector, con gestión práctica y conocimiento 
              técnico específico del sector.
            </p>
          </div>

          <div>
            <div className="text-[14px] font-bold tracking-[0.2em] uppercase text-black/40 mb-4">
              03
            </div>
            <h3 className="text-[20px] font-bold tracking-tight text-black mb-3">
              Valor Duradero
            </h3>
            <p className="text-[15px] font-light text-black/60 leading-relaxed">
              Construyendo negocios para el largo plazo, con prácticas sustentables e impacto 
              medible en las comunidades.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
