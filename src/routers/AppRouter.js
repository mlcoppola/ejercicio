import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import { Landing } from '../components/landing/Landing';
import { WoloxScreen } from '../components/wolox/WoloxScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
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
            </div>
        </Router>
    )
}
