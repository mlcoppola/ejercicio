import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'email-validator';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';
import { Link } from 'react-router-dom';

export default function LoginScreen({ history }) {

    const { dispatch } = useContext(AuthContext);

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const [checked, setChecked] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleCheckbox = (e) => {
        setChecked(e.target.checked);
    }

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if (!validator.validate(email)) {
            setErrorMsg('Email inválido');
            return;
        }

        if (password.trim().length < 2) {
            setErrorMsg('Debes ingresar una contraseña con más de 2 letras');
            return;
        }

        const url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login';
        const data = { email, password };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(() => {
                dispatch({
                    type: types.login,
                    payload: {
                        name: email,
                        saveSession: checked
                    }
                });

                history.replace('/listado');
            });


    }

    return (
        <div className="animate__animated animate__fadeIn">
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin} className="auth__form">
                {
                    errorMsg &&
                    <div className="auth__alert-error">{errorMsg}</div>
                }
                <div className="auth__row">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="auth__input"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="auth__row">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="auth__input"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <button
                    type="submit"
                    className="auth__button"
                >
                    Ingresar
                </button>

                <label htmlFor="mantener" className="auth__mantener">
                    Mantener conectado
                    <input
                        type="checkbox"
                        name="saveSession"
                        onChange={handleCheckbox}
                        id="mantener"
                    />
                </label>

                <Link to="/" className="auth__mantener enlace">Ir a la landing</Link>
            </form>

        </div>
    )
}

LoginScreen.propTypes = {
    history: PropTypes.object.isRequired
}