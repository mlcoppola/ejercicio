import React from 'react';

import hour from '../../assets/Ic_Hour.svg';
import homeOffice from '../../assets/Ic_HomeOffice.svg';
import workShops from '../../assets/Ic_Workshops.svg';
import drinkSnacks from '../../assets/Ic_DrinkSnacks.svg';
import laptop from '../../assets/Ic_laptop.svg';
import brain from '../../assets/Ic_brain.svg';
import technologies from '../../assets/Ic_Tecnologys.svg';
import hero from '../../assets/Img Hero/Ic_ilustra_Hero@3x.png';

export const Main = () => {
    return (
        <main className="main__container">
            <section className="main__hero">
                <h1>Bienvenido a tu <strong>Entrevista Técnica</strong> en <span className="main__green">Wolox</span></h1>
                <div className="main__hero-image">
                    <img src={hero} alt="Ilustra" />
                </div>
            </section>

            <section className="main__technologies">
                <h4 className="main__searching">
                    Estamos buscando para incorporar gente increíble para estas
                    tecnologías:
            </h4>

                <img src={technologies} alt="Tecnologías" className="main__list-technologies" />

            </section>

            <section className="main__information">
                <div className="main__woloxers">
                    <p> <span className="text-green">350 +</span> <span className="text-blue">Woloxers</span></p>

                    <span class="main__info-twitter"> <i class="fab fa-twitter twitter-white"></i> @wolox</span>

                    <button className="main__siguenos-button">Siguenos</button>
                </div>

                <div className="main__explanation">
                    <span className="text-dark">Trabajamos para</span> <span><span className="text-blue">convertir</span> <span className="text-green">ideas</span> en</span><span className="text-dark">productos.</span>
                </div>
            </section>

            <div className="main__beneficios">
                <p className="main__texto-beneficios">Entre los beneficios que ofrecemos se encuentran <span>;)</span></p>

                <ul className="main__contenedor-beneficios">
                    <li>
                        <img src={hour} alt="Hour" className="main__logo-beneficio" />
                        <p>Flexibilidad horaria</p>
                    </li>
                    <li>
                        <img src={homeOffice} alt="Home Office" className="main__logo-beneficio" />
                        <p>Home Office</p>
                    </li>
                    <li>
                        <img src={workShops} alt="Capacitaciones" className="main__logo-beneficio" />
                        <p>Capacitaciones y Workshops</p>
                    </li>
                    <li>
                        <img src={drinkSnacks} alt="Snacks" className="main__logo-beneficio" />
                        <p>Snacks, Frutas y bebidas gratis</p>
                    </li>
                    <li>
                        <img src={laptop} alt="Remota" className="main__logo-beneficio" />
                        <p>Semana Remota</p>
                    </li>
                    <li>
                        <img src={brain} alt="Cerebro" className="main__logo-beneficio" />
                        <p>Trabajar en últimas tecnologías</p>
                    </li>
                </ul>
            </div>

            <div className="main__requirements">
                <p className="main__texto-requerimientos">Requerimientos</p>
                <ul className="main__item-requerimientos">
                    <li> <div className="main__dot green"></div> Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o electrónicos.</li>
                    <li> <div className="main__dot dark"></div> Inglés intermedio/avanzado.</li>
                    <li> <div className="main__dot blue"></div> Conocimientos en metodologías ágiles (deseable)</li>
                </ul>
            </div>

        </main>
    )
}
