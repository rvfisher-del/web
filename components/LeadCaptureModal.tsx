'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  downloadTitle: string;
  ctaText?: string;
}

export default function LeadCaptureModal({
  isOpen,
  onClose,
  title,
  downloadTitle,
  ctaText = 'Descargar Recurso',
}: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    buildingCompany: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send lead data to ventas@grupoglobe.cl
    const emailBody = `
Nueva solicitud de ${downloadTitle}

Nombre: ${formData.name}
Email: ${formData.email}
Edificio/Empresa: ${formData.buildingCompany}

Recurso solicitado: ${downloadTitle}
Página: ${title}
    `.trim();

    // In production, integrate with your email service
    // For now, using mailto (replace with API call)
    const mailtoLink = `mailto:ventas@grupoglobe.cl?subject=Lead: ${downloadTitle}&body=${encodeURIComponent(emailBody)}`;
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Log to console for now (replace with actual logging)
      console.log('Lead captured:', formData);
      
      // Optional: trigger mailto
      // window.location.href = mailtoLink;
      
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', buildingCompany: '' });
      }, 2000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg shadow-2xl z-[10001] p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitSuccess ? (
              <>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{downloadTitle}</h3>
                  <p className="text-sm text-slate-600">
                    Complete el formulario para descargar el recurso gratuito.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BA6347] focus:border-transparent"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BA6347] focus:border-transparent"
                      placeholder="juan@empresa.cl"
                    />
                  </div>

                  <div>
                    <label htmlFor="buildingCompany" className="block text-sm font-semibold text-slate-700 mb-1">
                      Edificio / Empresa *
                    </label>
                    <input
                      type="text"
                      id="buildingCompany"
                      required
                      value={formData.buildingCompany}
                      onChange={(e) => setFormData({ ...formData, buildingCompany: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BA6347] focus:border-transparent"
                      placeholder="Edificio Las Condes"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#BA6347] text-white px-8 py-4 text-sm font-bold tracking-[0.15em] uppercase rounded-md hover:bg-[#A8563C] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'ENVIANDO...' : ctaText}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Al descargar, acepta que Globe Services contacte con información relevante.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">¡Listo!</h3>
                <p className="text-slate-600">
                  Recibirá el recurso en su correo en los próximos minutos.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
