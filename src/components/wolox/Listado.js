import React from 'react'

export const Listado = ({ tech }) => {
    return (
        <div>
            <p>Teccnología: {tech.tech}</p>
            <p>Año: {tech.year}</p>
            <p>Autor: {tech.author}</p>
            <p>Licencia: {tech.license}</p>
            <p>Lenguaje: {tech.languaje}</p>
            <p>Tipo: {tech.type}</p>
            <p>Logo: <img src={tech.logo} alt={tech.tech} /></p>
            <hr />
        </div>
    )
}
