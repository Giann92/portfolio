import Link from "next/link";
import { useState } from "react"; // Importa useState para controlar el estado del menú

const Navbar = () => {
  // Agrega un estado para controlar si el menú está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar entre menú abierto y cerrado
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className='navbar-brand' to="/">Mi Sitio</Link>
        
        {/* Botón de hamburguesa (toggler) para dispositivos móviles */}
        <button className="navbarr-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className='nav-link' to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

