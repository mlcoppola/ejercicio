import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer__container">
            <div>
                <span className="footer__agradecimiento">Gracias por <span>completar el ejercicio</span></span>
                <div className="footer__mas-info">Te invitamos a ver más información</div>
            </div>

            <button 
                className="footer__button-conocer"
                onClick={() => window.open("https://www.wolox.com.ar/", "_blank")}
            >Conocer más</button>

            <p>WOLOX</p>
        </footer>
    )
}
