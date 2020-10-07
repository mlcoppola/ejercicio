import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { Listado } from './Listado';

export const WoloxScreen = () => {

    const [techs, setTechs] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const { user: { name }, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {

        history.replace('/auth/login');

        dispatch({
            type: types.logout
        });
    }

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

    useEffect(() => {
        let isSubscribed = true;
        const fetchData = async () => {
            const url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs';
            const resp = await fetch(url);
            const data = await resp.json();

            if (isSubscribed) {
                let sorted = data.sort((a, b) => {
                    return a.tech.localeCompare(b.tech);
                });
                setTechs(sorted);
            }
        }

        fetchData();

        return () => isSubscribed = false
    }, []);

    const setOrder = (e) => {
        let orden = e.target.value;

        let sorted = techs.sort((a, b) => {
            const isReversed = (orden === 'asc' || orden === '') ? 1 : -1;
            return isReversed * a.tech.localeCompare(b.tech);
        });

        setTechs([...sorted]);
    }

    return (
        <>

            <div className="listado__contenedor-superior">
                <span className="listado__bienvenida">Bienvenido {name}</span>


                <input
                    type="text"
                    placeholder="Buscar tecnología"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="listado__buscador"
                />

                <div className="listado__orden">
                    <div className="listado__row">
                        <input type="radio" label="asc" name="order" value="asc" defaultChecked={true} onClick={setOrder} /> Ascendente
                    </div>
                    <div className="listado__row">
                        <input type="radio" label="asc" name="order" value="desc" onClick={setOrder} /> Descendente
                    </div>
                </div>


                <button
                    onClick={handleLogout}
                    className="listado__boton-logout"
                >
                    Logout
                </button>

            </div>

            <div className="listado__contenedor-tecnologias">

                {
                    filterTechs().map(tech => (
                        <Listado
                            key={tech.tech}
                            tech={tech}
                        />
                    ))
                }

                <div className="listado__float">Cantidad de tecnologías: {filterTechs().length}</div>
            </div>
        </>
    )
}
