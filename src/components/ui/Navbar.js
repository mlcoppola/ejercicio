import React from 'react';
import Logo from '../../assets/logo_full_color.svg';

export const Navbar = () => {
    return (
        <header className="container">
            <nav className="navbar__nav">
                <img className="logo" src={Logo} alt="Logo" />
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Tecnologías</a></li>
                    <li><a href="#">Beneficios</a></li>
                    <li><a href="#">Requerimientos</a></li>
                </ul>

                <a href="#" className="navbar__login-button">Login</a>
            </nav>
        </header>
    )
}
