import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--neutral-50)', borderTop: '1px solid var(--neutral-200)' }}>
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '96px 24px'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '48px',
          alignItems: 'start'
        }}>
          {/* Column 1: Brand */}
          <div>
            <img
              src="/images/logos/Logo globe services.png"
              alt="Globe Services"
              style={{ height: '48px', width: 'auto', marginBottom: '24px' }}
            />
            <p style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: '18px',
              lineHeight: '1.6',
              color: 'var(--neutral-900)',
              fontWeight: 600,
              marginBottom: '8px'
            }}>
              No eres un número.<br/>
              Eres un cliente.
            </p>
            <p style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: '16px',
              lineHeight: '1.6',
              color: 'var(--neutral-600)',
              fontStyle: 'italic'
            }}>
              You're a client, not a number.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--neutral-900)',
              marginBottom: '24px'
            }}>
              Explora
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li>
                <Link href="/" style={{ 
                  fontSize: '15px',
                  color: 'var(--neutral-600)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" style={{ 
                  fontSize: '15px',
                  color: 'var(--neutral-600)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/sectores" style={{ 
                  fontSize: '15px',
                  color: 'var(--neutral-600)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  Sectores
                </Link>
              </li>
              <li>
                <Link href="/comunas" style={{ 
                  fontSize: '15px',
                  color: 'var(--neutral-600)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  Comunas
                </Link>
              </li>
              <li>
                <Link href="/carreras" style={{ 
                  fontSize: '15px',
                  color: 'var(--neutral-600)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  Trabaja con Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--neutral-900)',
              marginBottom: '24px'
            }}>
              Soporte
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li>
                <Link href="/contacto" style={{ 
                  fontSize: '15px',
                  color: 'var(--neutral-600)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" style={{ 
                  fontSize: '15px',
                  color: 'var(--neutral-600)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <a href="tel:+56912345678" style={{ 
                  fontSize: '15px',
                  color: 'var(--neutral-600)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  +56 9 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:contacto@globeservices.cl" style={{ 
                  fontSize: '15px',
                  color: 'var(--neutral-600)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}>
                  contacto@globeservices.cl
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Approachability - Personalized Support */}
          <div>
            <div style={{ 
              background: '#1C1917',
              padding: '24px',
              borderRadius: '12px'
            }}>
              <h4 style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '18px',
                fontWeight: 600,
                color: 'white',
                marginBottom: '12px'
              }}>
                Atención Personalizada
              </h4>
              <p style={{ 
                fontSize: '15px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '16px'
              }}>
                Cada edificio tiene necesidades únicas. Hablemos de las tuyas.
              </p>
              <Link 
                href="/contacto"
                style={{
                  display: 'inline-block',
                  background: 'var(--accent)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
              >
                Conversa con nosotros
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{ 
        borderTop: '1px solid var(--neutral-200)',
        padding: '32px 24px'
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '14px',
          color: 'var(--neutral-600)'
        }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Globe Services. Parte de Grupo Globe.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/privacidad" style={{ color: 'var(--neutral-600)', textDecoration: 'none' }}>
              Privacidad
            </Link>
            <Link href="/terminos" style={{ color: 'var(--neutral-600)', textDecoration: 'none' }}>
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
