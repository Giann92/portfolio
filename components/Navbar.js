import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className='nav-link'  style={{fontSize: "30px",margin: "0 10px"}} href="/">Inicio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="ml-auto" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className='nav-link' style={{fontSize: "30px",margin: "0 10px"}} href="/portfolio">Portfolio</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

