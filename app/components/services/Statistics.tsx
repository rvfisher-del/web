"use client";

import { motion, type Transition } from "framer-motion";

const stats = [
  { 
    number: "300+", 
    label: "Edificios", 
    caption: "Cada uno con su propio administrador dedicado. Nunca te perdemos de vista." 
  },
  { 
    number: "700+", 
    label: "Ascensores", 
    caption: "Funcionando sin sorpresas todos los días. Porque sabemos que tu edificio no puede esperar." 
  },
  { 
    number: "8", 
    label: "Marcas", 
    caption: "Thyssenkrupp, Otis, Schindler, Kone. Las conocemos todas. Ninguna marca es un misterio para nosotros." 
  },
  { 
    number: "15+", 
    label: "Años", 
    caption: "De experiencia promedio en nuestro equipo técnico. No improvisamos, sabemos." 
  }
];

const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

export function Statistics() {
  return (
    <section className="section-padding-sm">
      <div className="container">
        <div className="stats-horizontal">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...spring, delay: i * 0.1 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-caption">{stat.caption}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
