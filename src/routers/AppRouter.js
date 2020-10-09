import React, { lazy, Suspense, useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

// import { Landing } from '../components/landing/Landing';
import { Spinner } from '../components/spinner/Spinner';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const WoloxScreen = lazy(() => import('../components/wolox/WoloxScreen'));
const Landing = lazy(() => import('../components/landing/Landing'));

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Suspense fallback={ <Spinner /> }>
                    <Switch>
                        <PublicRoute
                            path="/auth"
                            component={AuthRouter}
                            isAuthenticated={user.logged}
                        />

                        <PrivateRoute
                            path="/listado"
                            component={WoloxScreen}
                            isAuthenticated={user.logged}
                        />

                        <PublicRoute
                            exact
                            path="/"
                            component={Landing}
                            isAuthenticated={user.logged}
                        />

                        <Redirect to="/auth/login" />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}
