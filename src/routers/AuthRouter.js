import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spinner } from '../components/spinner/Spinner';

const LoginScreen  = lazy(() => import('../components/login/LoginScreen'));

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Suspense fallback={ <Spinner /> }>
                    <Switch>
                        <Route
                            exact
                            path="/auth/login"
                            component={LoginScreen}
                        />

                        <Redirect to="/auth/login" />
                    </Switch>
                </Suspense>
            </div>
        </div>
    )
}
