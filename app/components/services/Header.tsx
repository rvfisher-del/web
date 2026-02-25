import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link href="/">
            <img
              src="/images/logos/Logo globe services.png"
              alt="Globe Services"
            />
          </Link>
        </div>
        
        <nav className="nav">
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/sectores">Sectores</Link>
          <Link href="/comunas">Comunas</Link>
          <Link href="/carreras">Trabaja con Nosotros</Link>
          <Link href="/contacto" className="btn-contact">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
