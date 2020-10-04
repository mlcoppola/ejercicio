import React from 'react';

export const Navbar = () => {
    return (
        <header className="container">
            <nav>
                <img className="logo" src="./assets/logo_full_color.svg" alt="Logo" />
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Tecnologías</a></li>
                    <li><a href="#">Beneficios</a></li>
                    <li><a href="#">Requerimientos</a></li>
                </ul>

                <a href="#" className="login-button">Login</a>
            </nav>
        </header>
    )
}
