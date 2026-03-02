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
      <div className="w-screen flex flex-col items-center justify-center text-center py-24">
        
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

        {/* NEW Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8 mx-auto"
        >
          VISIÓN 360° DEL VALOR
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(32px,5vw,56px)] font-black leading-[1.2] tracking-tighter text-black mb-8 mx-auto max-w-3xl"
        >
          De la energía que alimenta la mina, hasta el mantenimiento que mantiene los equipos operando
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18px] font-light text-black/60 leading-relaxed max-w-2xl mx-auto mb-8 mt-10"
        >
          No perseguimos ganancias de un trimestre. Construimos empresas que operan décadas—con impacto medible en empleo, seguridad y comunidades.
        </motion.p>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[20px] font-bold text-black mx-auto"
        >
          Las industrias críticas no tienen días libres. Nosotros tampoco.
        </motion.p>
      </div>
    </section>
  );
}
