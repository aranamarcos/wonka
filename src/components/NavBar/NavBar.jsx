import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex align-items-center">

                {/* Titulo */}
                <Link to="/" className="link">
                    <h1>Wonka</h1>
                </Link>

                {/* Boton menu version mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="d-flex flex-fill align-items-center">

                        {/* Categorias */}
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink to="/categoria/tabletas" className="linkNav">Tabletas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/categoria/nerds" className="linkNav">Nerds</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/categoria/otros" className="linkNav">Otros</NavLink>
                            </li>
                        </ul>

                        {/* Carrito */}
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar