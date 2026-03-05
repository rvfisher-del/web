'use client';

import { usePathname } from 'next/navigation';

export default function PowerSubNav() {
  const pathname = usePathname();
  
  const navItems = [
    { label: 'Subdistribución', href: '/power/subdistribucion-remarcacion' },
    { label: 'Eficiencia Energética', href: '/power/eficiencia-energetica' },
    { label: 'Software & Reportería', href: '/power/software-reporteria' },
    { label: 'Mantenimiento Eléctrico', href: '/power/mantenimiento-electrico' },
  ];

  return (
    <nav className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center space-x-8 py-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#3A5B1E] border-b-2 border-[#3A5B1E] pb-1'
                    : 'text-gray-600 hover:text-[#3A5B1E]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
