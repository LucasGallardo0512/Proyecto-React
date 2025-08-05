import './header.css';
import Cart from './Cart/Cart';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img
                    src="/img/logo-blanco.png"
                    alt="Logo de la Marca"
                    className="logo"
                ></img>
                <h1 className="name">Ambitions</h1>
            </div>
            <ul className="navbar">
                <a href="/index.html" onClick={(e) => e.preventDefault()}>
                    <li>Inicio</li>
                </a>
                <a href="/pages/products.html">
                    <li>Productos</li>
                </a>
                <a href="/pages/about-us.html">
                    <li>Acerca de nosotros</li>
                </a>
            </ul>
            <Cart />
        </header>
    );
}

export default Header;
