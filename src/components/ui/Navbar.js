import React from 'react';
import Logo from '../../assets/logo_full_color.svg';

import { HashLink as Link } from 'react-router-hash-link';

export const Navbar = () => {
    return (
        <header className="container">
            <nav className="navbar__nav">
                <img className="logo" src={Logo} alt="Logo" />
                <ul>
                    <li><Link to="#main">Inicio</Link></li>
                    <li><Link to="#technologies">Tecnologías</Link></li>
                    <li><Link to="#benefits">Beneficios</Link></li>
                    <li><Link to="#requirements">Requerimientos</Link></li>
                </ul>

                <button className="navbar__login-button">Login</button>
            </nav>
        </header>
    )
}
