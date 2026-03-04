'use client';

import ModularHeader from '@/components/layout/ModularHeader';
import IndustrialIcon from '@/components/ui/IndustrialIcon';
import { Mountain } from 'lucide-react';

export default function MineriaClient() {
  return (
    <>
      <ModularHeader />
      <div className="min-h-screen bg-white pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="flex items-center gap-4 mb-8">
            <IndustrialIcon icon={Mountain} size={32} />
            <h1 className="text-5xl font-black text-black">Soluciones para Minería</h1>
          </div>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Campamentos modulares para minería (200-1000 personas), oficinas de proyecto, talleres de mantención, 
            comedores industriales y espacios de recreación.
          </p>
          
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong className="text-[#DC964E]">Experiencia comprobada:</strong> Atacama, Antofagasta, Coquimbo — 
              zonas de altura, desierto y clima extremo.
            </p>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-black mb-8">Soluciones típicas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 border border-slate-200 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Campamentos</h3>
                <p className="text-slate-700">Con dormitorios individuales/compartidos, comedores y áreas de recreación</p>
              </div>
              <div className="bg-white p-6 border border-slate-200 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Oficinas</h3>
                <p className="text-slate-700">Administrativas y salas de control para operaciones mineras</p>
              </div>
              <div className="bg-white p-6 border border-slate-200 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Comedores</h3>
                <p className="text-slate-700">Industriales y espacios de recreación para personal</p>
              </div>
              <div className="bg-white p-6 border border-slate-200 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-3">Talleres</h3>
                <p className="text-slate-700">De mantención y bodegas para equipamiento</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="/contacto" 
              className="inline-block bg-[#DC964E] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#BA6347] transition-colors"
            >
              Solicitar Evaluación Técnica →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
