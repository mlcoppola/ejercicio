import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { Listado } from './Listado';

export const WoloxScreen = () => {

    const [techs, setTechs] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        getTechnologies();
    }, []);


    const handleInputChange = (e) => {
        let value = e.target.value.toLowerCase();
        setInputValue(value);
    }

    const filterTechs = () => (
        techs.filter(tech =>
            tech.tech.toLowerCase().includes(inputValue)
            || tech.type.toLowerCase().includes(inputValue)
        )
    )

    const getTechnologies = async () => {
        const url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs';
        const resp = await fetch(url);
        const data = await resp.json();
        setTechs(data);
    }

    const sortNames = (e) => {
        let orden = e?.target.value;

        let sorted = techs.sort((a, b) => {
            const isReversed = (orden === 'ASC' || orden === '') ? 1 : -1;
            return isReversed * a.tech.localeCompare(b.tech);
        });

        setTechs([...sorted]);

    }

    const { user: { name } } = useContext(AuthContext);

    return (
        <>
            <h1>WoloxScreen</h1>

            <button>Logout</button>

            <input
                type="text"
                placeholder="Buscar tecnología"
                value={inputValue}
                onChange={handleInputChange}
            />

            <select onChange={sortNames}>
                <option value="">Selecciona...</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
            </select>

            <span>{name}</span>

            <hr />

            {
                filterTechs().map(tech => (
                    <Listado
                        key={tech.tech}
                        tech={tech}
                    />
                ))
            }

            <h4>Cantidad de tecnologías {filterTechs().length}</h4>
        </>
    )
}
