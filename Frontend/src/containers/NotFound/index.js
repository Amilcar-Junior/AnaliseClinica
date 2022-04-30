/**
 *
 * PrivateRoute
 * Higher Order Component that blocks navigation when the user is not logged in
 * and redirect the user to login page
 *
 * Wrap your protected routes to secure your container
 */

import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../components/app';
import MainAdmLayout from '../../components/layouts/main-adm';

import auth from '../../utils/auth';

const NotFound = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            auth.getToken() !== null ? (
                <MainAdmLayout>
                    <Component {...props} />
                </MainAdmLayout>

            ) : (
                <Layout>
                    <Component {...props} />
                </Layout>
            )
        }
    />
);

export default NotFound;
