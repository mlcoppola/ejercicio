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
            <h1>WoloxScreen</h1>

            <button
                onClick={handleLogout}
            >
                Logout
            </button>

            <input
                type="text"
                placeholder="Buscar tecnología"
                value={inputValue}
                onChange={handleInputChange}
            />

            <form>
                <label>Orden: </label>
                <input type="radio" label="asc" name="order" value="asc" defaultChecked={true} onClick={setOrder} /> Ascendente
                <input type="radio" label="asc" name="order" value="desc" onClick={setOrder} /> Descendente
            </form>

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
