'use client';

export default function LogoBar() {
  const logos = [
    { src: '/images/logos/logo-globe-power.png', alt: 'Globe Power' },
    { src: '/images/logos/logo-globe-flota.png', alt: 'Globe Flota y Equipos' },
    { src: '/images/logos/logo-globe-modular.png', alt: 'Globe Modular' },
    { src: '/images/logos/logo-globe-academy.png', alt: 'Globe Academy' },
    { src: '/images/logos/logo-globe-services.png', alt: 'Globe Services' },
    { src: '/images/logos/logo-globe-lift-parts.png', alt: 'Globe Lift Parts' },
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="relative w-full">
        <div className="flex logo-carousel hover:pause">
          {/* Render logos 3 times for seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-[200px] px-8 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
