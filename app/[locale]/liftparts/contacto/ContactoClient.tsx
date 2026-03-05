'use client';

import { useState } from 'react';
import LiftPartsSubNav from '@/components/LiftPartsSubNav';

export default function ContactoClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-1/2 -translate-x-1/2 max-w-7xl mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl transition-all duration-500 w-[95%] mt-6" style={{ zIndex: 9999 }}>
          <div className="px-14 py-4 flex justify-between items-center w-full h-32">
            <a href="/liftparts" className="flex-shrink-0 py-2 bg-transparent flex items-center pl-12">
              <img
                src="/images/liftparts/logo-globe-lift-parts.png"
                alt="Globe Lift Parts"
                height={96}
                width="auto"
                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </a>

            <nav className="flex items-center gap-4 md:gap-6 pr-12">
              <a href="/liftparts" className="px-3 text-xs font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors duration-300">
                INICIO
              </a>
              <a 
                href="https://wa.me/56977974948?text=Hola%2C%20necesito%20información%20sobre%20repuestos%20para%20ascensores"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 backdrop-blur-sm border border-white/30 text-white px-6 py-2.5 text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-green-700 transition-all duration-300"
              >
                📱 WHATSAPP
              </a>
            </nav>
          </div>
        </header>

        {/* Sticky Sub-Navigation */}
        <LiftPartsSubNav />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-green-700 via-green-600 to-green-700">
          <div className="absolute inset-0 bg-black/10" />
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="text-9xl mb-8">📱</div>
            <h1 className="text-[clamp(48px,7vw,96px)] font-black leading-[1.05] text-white mb-12" style={{ letterSpacing: '-0.05em' }}>
              Contacto Rápido via WhatsApp
            </h1>
            
            <p className="text-[clamp(20px,2.5vw,28px)] font-light text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Respuesta en menos de 5 minutos
            </p>

            <a
              href="https://wa.me/56977974948?text=Hola%2C%20necesito%20información%20sobre%20repuestos%20para%20ascensores"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 px-16 py-6 text-2xl font-black uppercase rounded-xl hover:bg-green-50 transition-all duration-300 shadow-2xl"
            >
              📱 Abrir WhatsApp Ahora
            </a>

            <p className="text-white text-xl mt-8 font-bold">
              +56 9 7797 4948
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-black mb-8">
                Métodos de Contacto
              </h2>
              <p className="text-xl text-slate-600">
                WhatsApp es más rápido, pero también estamos disponibles via email y teléfono.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* WhatsApp - Primary */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-12 rounded-2xl text-white text-center shadow-2xl">
                <div className="text-7xl mb-6">📱</div>
                <h3 className="text-3xl font-bold mb-4">WhatsApp</h3>
                <p className="text-xl mb-6 text-white/90">Método recomendado</p>
                <p className="text-2xl font-black mb-8">+56 9 7797 4948</p>
                <a
                  href="https://wa.me/56977974948?text=Hola%2C%20necesito%20información%20sobre%20repuestos%20para%20ascensores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-green-700 px-8 py-4 font-bold rounded-lg hover:bg-green-50 transition-all duration-300"
                >
                  Abrir Chat
                </a>
                <p className="text-sm text-white/80 mt-6">
                  Respuesta en menos de 5 minutos • Lunes a Sábado
                </p>
              </div>

              {/* Email */}
              <div className="bg-slate-50 border-2 border-slate-200 p-12 rounded-2xl text-center hover:border-[#FCD074] transition-all duration-300">
                <div className="text-7xl mb-6">📧</div>
                <h3 className="text-3xl font-bold text-black mb-4">Email</h3>
                <p className="text-lg text-slate-600 mb-8">Para consultas detalladas</p>
                <a
                  href="mailto:liftparts@grupoglobe.com"
                  className="text-xl font-bold text-[#FCD074] hover:text-black transition-colors"
                >
                  liftparts@grupoglobe.com
                </a>
                <p className="text-sm text-slate-500 mt-6">
                  Respuesta en 24 horas hábiles
                </p>
              </div>

              {/* Office */}
              <div className="bg-slate-50 border-2 border-slate-200 p-12 rounded-2xl text-center hover:border-[#FCD074] transition-all duration-300">
                <div className="text-7xl mb-6">🏢</div>
                <h3 className="text-3xl font-bold text-black mb-4">Oficina</h3>
                <p className="text-lg text-slate-600 mb-6">Visita con cita previa</p>
                <p className="text-slate-700 mb-2 leading-relaxed">
                  <strong>Isadora Goyenechea 3520</strong><br/>
                  Oficina 300<br/>
                  Las Condes, Chile
                </p>
                <p className="text-sm text-slate-500 mt-6">
                  Lun-Vie: 8:00-18:00<br/>
                  Sábado: 9:00-13:00
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Upload Widget Placeholder */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white border-2 border-dashed border-slate-300 rounded-3xl p-16 text-center">
              <div className="text-8xl mb-8">📸</div>
              <h2 className="text-5xl font-black text-black mb-6">
                Sube Foto del Repuesto
              </h2>
              <p className="text-2xl text-slate-600 mb-12 max-w-2xl mx-auto">
                ¿No sabes el código o nombre exacto? Sube foto via WhatsApp y nuestro equipo experto lo identifica al instante.
              </p>

              <div className="bg-slate-50 rounded-xl p-12 mb-8">
                <p className="text-lg text-slate-700 mb-6">
                  <strong>Cómo funciona:</strong>
                </p>
                <ol className="text-left max-w-2xl mx-auto space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#FCD074]">1.</span>
                    <span>Toma foto clara del repuesto (placa con modelo/serie si es posible)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#FCD074]">2.</span>
                    <span>Envía por WhatsApp con breve descripción del ascensor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#FCD074]">3.</span>
                    <span>Nuestro equipo identifica el repuesto y cotiza en minutos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-[#FCD074]">4.</span>
                    <span>Recibes precio, disponibilidad y plazo de entrega</span>
                  </li>
                </ol>
              </div>

              <a
                href="https://wa.me/56977974948?text=Hola%2C%20te%20envío%20foto%20de%20un%20repuesto%20para%20identificación"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-12 py-5 text-xl font-bold uppercase rounded-lg hover:bg-green-700 transition-all duration-300"
              >
                📱 Enviar Foto via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Team Contact */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-black mb-8">
                Equipo de Globe Lift Parts
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-12 text-center">
                {/* Placeholder for team photo */}
                <div className="bg-slate-200 h-48 w-48 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <div className="text-6xl">👤</div>
                </div>

                <h3 className="text-4xl font-bold text-black mb-2">Simon Abramovicz</h3>
                <p className="text-xl text-slate-600 mb-8">Manager, Globe Lift Parts</p>

                <div className="space-y-4 mb-8">
                  <a
                    href="https://wa.me/56977974948"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-green-600 font-bold text-lg hover:text-green-700"
                  >
                    📱 +56 9 7797 4948
                  </a>
                  <a
                    href="mailto:liftparts@grupoglobe.com"
                    className="block text-[#FCD074] font-bold text-lg hover:text-black"
                  >
                    📧 liftparts@grupoglobe.com
                  </a>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  "Encontramos soluciones cuando otros se rinden. Si necesitas un repuesto o reparación, contáctame directamente."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-black mb-8">
                Ubicación
              </h2>
            </div>

            <div className="bg-slate-200 h-[500px] rounded-2xl flex items-center justify-center">
              <div className="text-center text-slate-500">
                <div className="text-8xl mb-4">📍</div>
                <p className="text-2xl font-bold mb-2">Isadora Goyenechea 3520, of 300</p>
                <p className="text-xl">Las Condes, Santiago, Chile</p>
                <p className="text-sm mt-4">[Mapa interactivo aquí]</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-slate-600 mb-4">
                <strong>Horario de Atención:</strong>
              </p>
              <p className="text-slate-600">
                Lunes a Viernes: 8:00 - 18:00<br/>
                Sábado: 9:00 - 13:00<br/>
                Domingo: Cerrado
              </p>
              <p className="text-sm text-slate-500 mt-4">
                *Visitas a oficina con cita previa via WhatsApp
              </p>
            </div>
          </div>
        </section>

        {/* Backup Contact Form */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-black mb-6">
                Formulario de Contacto
              </h2>
              <p className="text-xl text-slate-600">
                <strong>Prefiere WhatsApp para respuesta más rápida</strong>, pero también puedes usar este formulario.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-50 p-12 rounded-2xl border-2 border-slate-200">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-slate-300 rounded-lg focus:border-[#FCD074] focus:outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-6 py-4 border-2 border-slate-300 rounded-lg focus:border-[#FCD074] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 border-2 border-slate-300 rounded-lg focus:border-[#FCD074] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-slate-300 rounded-lg focus:border-[#FCD074] focus:outline-none"
                    placeholder="Describe el repuesto que necesitas o el componente que requiere reparación..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FCD074] text-black px-8 py-5 text-lg font-bold uppercase rounded-lg hover:bg-[#FCD074]/80 transition-all duration-300"
                >
                  Enviar Mensaje
                </button>

                <p className="text-center text-sm text-slate-500">
                  Respuesta en 24 horas hábiles. Para consultas urgentes, usa WhatsApp.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Final WhatsApp CTA */}
        <section className="py-32 bg-gradient-to-br from-green-600 to-green-700">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-black text-white mb-6">
              ¿Necesitas Respuesta Inmediata?
            </h2>
            <p className="text-2xl text-white/90 mb-12">
              WhatsApp es la forma más rápida de contactarnos.
            </p>
            <a
              href="https://wa.me/56977974948?text=Hola%2C%20necesito%20información%20urgente%20sobre%20repuestos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 px-12 py-5 text-xl font-black uppercase rounded-xl hover:bg-green-50 transition-all duration-300"
            >
              📱 Abrir WhatsApp
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white/60 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm">
              © 2026 Globe Lift Parts — Una empresa del Grupo Globe
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
