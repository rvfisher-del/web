import Link from "next/link";

export function HeroBasic() {
  return (
    <section style={{ 
      paddingTop: '240px', 
      paddingBottom: '80px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '240px 20px 80px'
    }}>
      <div style={{ 
        display: 'flex',
        gap: '80px',
        alignItems: 'center'
      }}>
        {/* Left: Text */}
        <div style={{ flex: '1' }}>
          <div style={{ 
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#FF8C42',
            marginBottom: '20px'
          }}>
            Mantenimiento de Ascensores en Santiago
          </div>
          
          <h1 style={{ 
            fontSize: '56px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '30px'
          }}>
            No eres un número.<br/>
            Eres un cliente.
          </h1>
          
          <p style={{ 
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#57534E',
            marginBottom: '40px'
          }}>
            Mantenimiento, reparación y modernización de ascensores. 
            Te respondemos siempre. Decisiones rápidas. Sin vueltas.
          </p>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/contacto" style={{
              display: 'inline-block',
              background: '#FF8C42',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Hablemos de tu edificio
            </Link>
            <Link href="/servicios" style={{
              display: 'inline-block',
              background: 'white',
              color: '#1C1917',
              padding: '14px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              border: '2px solid #E7E5E4'
            }}>
              Conoce nuestro trabajo
            </Link>
          </div>
        </div>

        {/* Right: Photo */}
        <div style={{ flex: '1' }}>
          <img 
            src="/images/heroes/hero-elevator.png"
            alt="Técnico profesional de Globe Services"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
