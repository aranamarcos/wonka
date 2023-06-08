import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex align-items-center">
                <h1>Wonka</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="d-flex flex-fill align-items-center">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">Chocolates</li>
                            <li className="nav-item">Caramelos</li>
                            <li className="nav-item">Otros</li>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar