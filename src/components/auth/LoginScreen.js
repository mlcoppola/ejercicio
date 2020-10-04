import React from 'react';

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
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
                        name="mantener"
                    />
                </label>
            </form>
        </>
    )
}
