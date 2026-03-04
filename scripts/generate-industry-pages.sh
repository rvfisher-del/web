#!/bin/bash

# Script to generate remaining industry pages for Globe Modular
# Run from project root: bash scripts/generate-industry-pages.sh

echo "Generating 7 remaining industry pages..."

# Array of industries with their metadata
declare -A INDUSTRIES=(
  ["construccion"]="Construcción|🏗️|Oficinas de obra, baños y almacenamiento que cumplen|Instalación en 7 días. Remoción sin rastro. Flexibilidad total."
  ["energia"]="Energía|⚡|Campamentos renovables con autonomía total|Para proyectos solares, eólicos y oil & gas en zonas remotas."
  ["industrial"]="Industrial|🏭|Bodegas y oficinas que escalan con tu operación|Desde 50 hasta 500 m². Escalabilidad modular certificada."
  ["retail"]="Retail|🛍️|Tiendas temporales con estética profesional|Pop-ups, renovaciones y expansiones con instalación rápida."
  ["salud"]="Salud|⚕️|Clínicas modulares con cumplimiento sanitario total|Normativa MINSAL, bioseguridad, ventilación HEPA certificada."
  ["educacion"]="Educación|🎓|Salas de clase con acústica y seguridad escolar|Expansiones certificadas, espacios adaptados para aprendizaje."
  ["agricultura"]="Agricultura|🌾|Alojamiento temporero con cumplimiento laboral|Ley laboral, higiene industrial, durabilidad climática extrema."
)

BASE_DIR="app/[locale]/modular/industrias"

for industry in "${!INDUSTRIES[@]}"; do
  IFS='|' read -r NAME ICON HEADLINE SUBHEAD <<< "${INDUSTRIES[$industry]}"
  
  INDUSTRY_DIR="$BASE_DIR/$industry"
  mkdir -p "$INDUSTRY_DIR"
  
  echo "Creating $industry page..."
  
  # Create page.tsx
  cat > "$INDUSTRY_DIR/page.tsx" << EOF
import { Metadata } from 'next';
import ${NAME^}Client from './${NAME^}Client';

export const metadata: Metadata = {
  title: 'Módulos ${NAME} | Globe Modular Chile',
  description: '${HEADLINE}. ${SUBHEAD} Globe Modular.',
  keywords: 'módulos ${industry}, construcción modular ${industry}, Globe Modular Chile',
  openGraph: {
    title: 'Módulos ${NAME} | Globe Modular',
    description: '${HEADLINE}.',
    type: 'website',
    locale: 'es_CL',
  },
};

export default function ${NAME^}Page() {
  return <${NAME^}Client />;
}
EOF

  echo "✓ Created $industry/page.tsx"
done

echo ""
echo "✅ All 7 industry page.tsx files created!"
echo "Next: Create client components with specific content for each industry"
