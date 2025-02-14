import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (!isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/listado" />)
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.any.isRequired
}
