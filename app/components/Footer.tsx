'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <img
              src="/images/logos/logo-grupo-globe.png"
              alt="Grupo Globe"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 font-medium">El estándar. No la excepción.</p>
          </div>

          {/* Empresas Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-4">Empresas</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  Globe Academy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  Globe Lift Parts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  Globe Modular
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  Globe Power
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  Globe Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  Globe Flota y Equipos
                </a>
              </li>
            </ul>
          </div>

          {/* Sectores Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-4">Sectores</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sectores"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  Energía
                </a>
              </li>
              <li>
                <a
                  href="#sectores"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  Minería
                </a>
              </li>
              <li>
                <a
                  href="#sectores"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  Real Estate
                </a>
              </li>
              <li>
                <a
                  href="#sectores"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  Medical
                </a>
              </li>
              <li>
                <a
                  href="#sectores"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  Industrial
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@grupogl obe.com"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  contact@grupogl obe.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 text-center">
            &copy; 2026 Grupo Globe. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
