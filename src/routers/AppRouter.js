import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';


import { Landing } from '../components/landing/Landing';
import { WoloxScreen } from '../components/wolox/WoloxScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/auth"
                        component={AuthRouter}
                    />

                    <Route
                        exact
                        path="/listado"
                        component={WoloxScreen}
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
