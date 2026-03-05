'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import LiftPartsSubNav from '@/components/LiftPartsSubNav';

export default function CatalogoClient() {
  const pathname = usePathname();
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const brands = [
    'Schindler', 'Otis', 'ThyssenKrupp', 'Kone', 'Mitsubishi', 
    'Fujitec', 'Hyundai', 'Otros'
  ];

  const categories = [
    'Motores', 'Cables', 'Botones', 'Puertas', 'Sensores', 
    'Controles', 'Poleas', 'Guías', 'Otros'
  ];

  const sampleParts = [
    {
      id: '001',
      name: 'Motor de Tracción',
      brand: 'Schindler',
      category: 'Motores',
      code: 'SCH-MT-3000',
      description: 'Motor de tracción para ascensores Schindler 3000 series',
      image: '/images/liftparts/placeholder-motor.jpg',
    },
    {
      id: '002',
      name: 'Cable de Acero',
      brand: 'Otis',
      category: 'Cables',
      code: 'OTS-CB-8MM',
      description: 'Cable de acero 8mm para sistemas Otis Gen2',
      image: '/images/liftparts/placeholder-cable.jpg',
    },
    {
      id: '003',
      name: 'Panel de Control',
      brand: 'Kone',
      category: 'Controles',
      code: 'KON-PC-MONO',
      description: 'Panel de control digital MonoSpace',
      image: '/images/liftparts/placeholder-control.jpg',
    },
  ];

  const getWhatsAppLink = (partName: string, partCode: string) => {
    const message = `Hola, necesito información sobre ${partName} - Ref: ${partCode}`;
    return `https://wa.me/56977974948?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Header (same as hub page) */}
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
        <section className="relative min-h-[60vh] flex items-center justify-center pt-48 pb-24 px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[#FCD074]/5" />
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-[clamp(48px,6vw,88px)] font-black leading-[1.05] text-white mb-8" style={{ letterSpacing: '-0.05em' }}>
              Catálogo de Repuestos
            </h1>
            
            <p className="text-[clamp(20px,2.5vw,28px)] font-light text-[#FCD074] mb-8 leading-relaxed max-w-3xl mx-auto">
              Todas las Marcas. Todas las Piezas.
            </p>

            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Catálogo de referencia completo. Envía foto del repuesto via WhatsApp para cotización rápida y consulta de disponibilidad.
            </p>
          </div>
        </section>

        {/* Search and Filter Bar */}
        <section className="py-12 bg-slate-50 sticky top-40 z-50 shadow-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Search */}
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Buscar repuesto por nombre o código..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-slate-300 rounded-lg focus:border-[#FCD074] focus:outline-none text-lg"
                />
              </div>

              {/* Brand Filter */}
              <div>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-slate-300 rounded-lg focus:border-[#FCD074] focus:outline-none text-lg"
                >
                  <option value="all">Todas las Marcas</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand.toLowerCase()}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-slate-300 rounded-lg focus:border-[#FCD074] focus:outline-none text-lg"
                >
                  <option value="all">Todas las Categorías</option>
                  {categories.map((category) => (
                    <option key={category} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <p className="text-slate-600 text-lg">
                <strong>Catálogo de Referencia:</strong> No e-commerce. Para consultas de disponibilidad, precio y especificaciones técnicas, contacta via WhatsApp.
              </p>
            </div>

            {/* Parts Grid */}
            <div className="grid md:grid-cols-3 gap-12">
              {sampleParts.map((part) => (
                <div key={part.id} className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:shadow-2xl hover:border-[#FCD074] transition-all duration-300">
                  {/* Placeholder Image */}
                  <div className="bg-slate-100 h-64 flex items-center justify-center">
                    <div className="text-slate-400 text-center">
                      <div className="text-6xl mb-4">📦</div>
                      <p className="text-sm">Foto del repuesto</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-[#FCD074]/20 text-[#FCD074] text-xs font-bold px-3 py-1 rounded-full">
                        {part.brand}
                      </span>
                      <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full ml-2">
                        {part.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-black mb-2">{part.name}</h3>
                    <p className="text-sm text-slate-500 mb-1">Ref: <strong>{part.code}</strong></p>
                    <p className="text-slate-600 leading-relaxed mb-6">{part.description}</p>

                    <a
                      href={getWhatsAppLink(part.name, part.code)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-600 text-white text-center px-6 py-3 font-bold uppercase rounded-lg hover:bg-green-700 transition-all duration-300"
                    >
                      📱 Consultar Disponibilidad
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* More Parts Placeholder */}
            <div className="mt-16 text-center">
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-16">
                <div className="text-6xl mb-6">🔧</div>
                <h3 className="text-3xl font-bold text-black mb-4">Catálogo Completo en Desarrollo</h3>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                  Mientras completamos nuestro catálogo digital, envíanos foto del repuesto que necesitas via WhatsApp. Nuestro equipo experto lo identificará y cotizará al instante.
                </p>
                <a
                  href="https://wa.me/56977974948?text=Hola%2C%20necesito%20ayuda%20para%20identificar%20un%20repuesto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-12 py-5 text-lg font-bold uppercase rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                  📱 Enviar Foto del Repuesto
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Browse by Brand */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-black text-black mb-12 text-center">
              Buscar por Marca
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand.toLowerCase())}
                  className={`p-6 rounded-xl border-2 font-bold text-lg transition-all duration-300 ${
                    selectedBrand === brand.toLowerCase()
                      ? 'bg-[#FCD074] border-[#FCD074] text-black'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-[#FCD074]'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-black text-black mb-12 text-center">
              Buscar por Categoría
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`p-6 rounded-xl border-2 font-bold text-lg transition-all duration-300 ${
                    selectedCategory === category.toLowerCase()
                      ? 'bg-[#FCD074] border-[#FCD074] text-black'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-[#FCD074]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Final WhatsApp CTA */}
        <section className="py-32 bg-gradient-to-br from-green-600 to-green-700">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-black text-white mb-6">
              ¿No Encuentras lo que Buscas?
            </h2>
            <p className="text-2xl text-white/90 mb-12">
              Envíanos foto del repuesto. Lo identificamos y cotizamos al instante.
            </p>
            <a
              href="https://wa.me/56977974948?text=Hola%2C%20necesito%20ayuda%20para%20encontrar%20un%20repuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 px-12 py-5 text-xl font-black uppercase rounded-xl hover:bg-green-50 transition-all duration-300"
            >
              📱 Contactar via WhatsApp
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
