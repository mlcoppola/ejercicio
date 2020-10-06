import React, { useContext, useState } from 'react';
import validator from 'email-validator';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const [checked, setChecked] = useState(false);

    const handleCheckbox = (e) => {
        setChecked(e.target.checked);
    }

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if (validator.validate(email) && password) {

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

    }


    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Ingresar
                </button>

                <hr />

                <label htmlFor="mantener">
                    Mantener conectado
                    <input
                        type="checkbox"
                        name="saveSession"
                        onChange={handleCheckbox}
                    />
                </label>
            </form>
        </>
    )
}
