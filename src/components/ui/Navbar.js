import React from 'react';
import Logo from '../../assets/logo_full_color.svg';

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="container">
            <nav className="navbar__nav">
                <img className="logo" src={Logo} alt="Logo" />
                <ul>
                    <li><HashLink to="#main">Inicio</HashLink></li>
                    <li><HashLink to="#technologies">Tecnologías</HashLink></li>
                    <li><HashLink to="#benefits">Beneficios</HashLink></li>
                    <li><HashLink to="#requirements">Requerimientos</HashLink></li>
                </ul>

                <Link
                    to="/auth/login"
                    className="navbar__login-button"
                >
                    Login
                </Link>
            </nav>
        </header>
    )
}
