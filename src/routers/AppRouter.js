import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import { Landing } from '../components/landing/Landing';
import { WoloxScreen } from '../components/wolox/WoloxScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/auth"
                        component={AuthRouter}
                    />

                    <PrivateRoute
                        path="/listado"
                        component={WoloxScreen}
                        isAuthenticated={user.logged}
                    />

                    <Route
                        exact
                        path="/"
                        component={Landing}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
