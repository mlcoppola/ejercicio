import React from 'react';
import PropTypes from 'prop-types';

export const Listado = ({ tech }) => {
    return (
        <div className="listado__tecnologia">

            <div className="listado__contenedor-imagen">
                <img src={tech.logo} alt={tech.tech} />
            </div>

            <div className="listado__contenedor-info">
                <p>Tecnología: {tech.tech}</p>
                <p>Año: {tech.year}</p>
                <p>Autor: {tech.author}</p>
                <p>Licencia: {tech.license}</p>
                <p>Lenguaje: {tech.language}</p>
                <p>Tipo: {tech.type}</p>
            </div>
        </div>
    )
}

Listado.propTypes = {
    tech: PropTypes.object.isRequired,
}