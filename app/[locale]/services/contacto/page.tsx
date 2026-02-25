"use client";

import { motion, type Transition } from "framer-motion";
import { useState } from "react";

const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

const contactMethods = [
  {
    title: "Teléfono",
    value: "+56 2 2345 6789",
    link: "tel:+56223456789",
    description: "Lunes a viernes, 8:30 - 18:00"
  },
  {
    title: "Email",
    value: "contacto@globeservices.cl",
    link: "mailto:contacto@globeservices.cl",
    description: "Te respondemos en menos de 24 horas"
  },
  {
    title: "Emergencias 24/7",
    value: "+56 9 8765 4321",
    link: "tel:+56987654321",
    description: "Solo para clientes con contrato activo"
  },
  {
    title: "Oficina Central",
    value: "Av. Providencia 1234, Of. 501",
    link: "https://maps.google.com/?q=Av.+Providencia+1234,+Santiago",
    description: "Santiago, Región Metropolitana"
  }
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "cotizacion",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setStatus("sent");
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "cotizacion",
          message: ""
        });
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
        {/* Hero Section */}
        <section style={{ paddingTop: '200px', paddingBottom: '80px' }}>
          <div className="container">
            <div className="grid-12">
              <div className="col-span-8 col-start-3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={spring}
                  style={{ textAlign: 'center' }}
                >
                  <div className="eyebrow" style={{ marginBottom: '24px' }}>
                    Contacto
                  </div>
                  <h1 style={{ marginBottom: '32px' }}>
                    Conversemos sobre<br/>
                    tu edificio.
                  </h1>
                  <p className="lead">
                    Cotización sin compromiso. Respuesta en menos de 24 horas. 
                    Sin letra chica.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding-sm">
          <div className="container">
            <div className="grid-12" style={{ gap: '24px' }}>
              {contactMethods.map((method, i) => (
                <motion.div
                  key={i}
                  className="col-span-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ ...spring, delay: i * 0.1 }}
                >
                  <a
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ 
                      display: 'block',
                      padding: '32px 24px',
                      background: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 4px 16px rgba(var(--shadow-indigo), 0.08)',
                      textDecoration: 'none',
                      color: 'inherit',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      border: '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(var(--shadow-orange), 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(var(--shadow-orange), 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(var(--shadow-indigo), 0.08)';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  >
                    <div style={{ 
                      fontSize: '13px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '8px',
                      color: 'var(--neutral-600)',
                      textAlign: 'center'
                    }}>
                      {method.title}
                    </div>
                    <div style={{ 
                      fontSize: '16px',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      marginBottom: '8px',
                      textAlign: 'center',
                      wordBreak: 'break-word'
                    }}>
                      {method.value}
                    </div>
                    <div style={{ 
                      fontSize: '13px',
                      color: 'var(--neutral-600)',
                      textAlign: 'center',
                      lineHeight: '1.5'
                    }}>
                      {method.description}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding">
          <div className="container">
            <div className="grid-12">
              <div className="col-span-8 col-start-3">
                <motion.div
                  className="card-luxury"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={spring}
                  style={{ 
                    background: 'linear-gradient(135deg, var(--warm-50) 0%, white 100%)',
                    padding: '64px'
                  }}
                >
                  <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{ marginBottom: '16px' }}>
                      Déjanos tus datos
                    </h2>
                    <p style={{ fontSize: '17px', color: 'var(--neutral-600)' }}>
                      Te contactamos en menos de 24 horas. Sin vueltas.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      {/* Name */}
                      <div>
                        <label style={{ 
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 600,
                          marginBottom: '8px',
                          color: 'var(--neutral-900)'
                        }}>
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            fontSize: '16px',
                            border: '2px solid var(--neutral-200)',
                            borderRadius: '8px',
                            background: 'white',
                            transition: 'border-color 0.2s ease',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                          onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                        />
                      </div>

                      {/* Email & Phone */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                          <label style={{ 
                            display: 'block',
                            fontSize: '14px',
                            fontWeight: 600,
                            marginBottom: '8px',
                            color: 'var(--neutral-900)'
                          }}>
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            style={{
                              width: '100%',
                              padding: '14px 16px',
                              fontSize: '16px',
                              border: '2px solid var(--neutral-200)',
                              borderRadius: '8px',
                              background: 'white',
                              transition: 'border-color 0.2s ease',
                              outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                          />
                        </div>
                        <div>
                          <label style={{ 
                            display: 'block',
                            fontSize: '14px',
                            fontWeight: 600,
                            marginBottom: '8px',
                            color: 'var(--neutral-900)'
                          }}>
                            Teléfono *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            style={{
                              width: '100%',
                              padding: '14px 16px',
                              fontSize: '16px',
                              border: '2px solid var(--neutral-200)',
                              borderRadius: '8px',
                              background: 'white',
                              transition: 'border-color 0.2s ease',
                              outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label style={{ 
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 600,
                          marginBottom: '8px',
                          color: 'var(--neutral-900)'
                        }}>
                          Edificio / Empresa
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            fontSize: '16px',
                            border: '2px solid var(--neutral-200)',
                            borderRadius: '8px',
                            background: 'white',
                            transition: 'border-color 0.2s ease',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                          onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label style={{ 
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 600,
                          marginBottom: '8px',
                          color: 'var(--neutral-900)'
                        }}>
                          ¿Qué necesitas? *
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            fontSize: '16px',
                            border: '2px solid var(--neutral-200)',
                            borderRadius: '8px',
                            background: 'white',
                            transition: 'border-color 0.2s ease',
                            outline: 'none',
                            cursor: 'pointer'
                          }}
                          onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                          onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                        >
                          <option value="cotizacion">Cotización de servicio</option>
                          <option value="emergencia">Emergencia / Reparación urgente</option>
                          <option value="modernizacion">Modernización de ascensor</option>
                          <option value="cambio">Cambio de empresa de mantenimiento</option>
                          <option value="consulta">Consulta general</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label style={{ 
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 600,
                          marginBottom: '8px',
                          color: 'var(--neutral-900)'
                        }}>
                          Cuéntanos más *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="¿Cuántos ascensores tienes? ¿Qué marca? ¿Cuál es tu situación actual?"
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            fontSize: '16px',
                            border: '2px solid var(--neutral-200)',
                            borderRadius: '8px',
                            background: 'white',
                            transition: 'border-color 0.2s ease',
                            outline: 'none',
                            fontFamily: 'Inter, sans-serif',
                            resize: 'vertical'
                          }}
                          onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                          onBlur={(e) => e.target.style.borderColor = 'var(--neutral-200)'}
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={status === "sending" || status === "sent"}
                        className="btn-primary"
                        style={{ 
                          width: '100%',
                          padding: '16px',
                          fontSize: '16px',
                          opacity: status === "sending" || status === "sent" ? 0.7 : 1
                        }}
                      >
                        {status === "idle" && "Enviar mensaje"}
                        {status === "sending" && "Enviando..."}
                        {status === "sent" && "Mensaje enviado"}
                        {status === "error" && "Error - Intenta de nuevo"}
                      </button>

                      {status === "sent" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          style={{
                            padding: '16px',
                            background: '#D1FAE5',
                            border: '2px solid #10B981',
                            borderRadius: '8px',
                            textAlign: 'center',
                            fontSize: '15px',
                            color: '#065F46',
                            fontWeight: 500
                          }}
                        >
                          ¡Gracias! Te contactaremos en menos de 24 horas.
                        </motion.div>
                      )}
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="section-padding-sm">
          <div className="container">
            <div className="grid-12">
              <div className="col-span-10 col-start-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={spring}
                  style={{
                    width: '100%',
                    height: '400px',
                    background: 'linear-gradient(135deg, var(--neutral-200) 0%, var(--neutral-100) 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: '0 8px 24px rgba(var(--shadow-indigo), 0.1)'
                  }}
                >
                  <div style={{ 
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--neutral-600)'
                  }}>
                    Av. Providencia 1234, Of. 501
                  </div>
                  <div style={{ 
                    fontSize: '15px',
                    color: 'var(--neutral-600)'
                  }}>
                    Santiago, Región Metropolitana
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Av.+Providencia+1234,+Santiago"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ marginTop: '16px' }}
                  >
                    Abrir en Google Maps
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
