import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import JogsPage from './components/jogs-page';
import InfoPage from './components/info-page';
import ContactUs from './components/contact-us';
import AuthPage from './components/auth-page';
import JogsCreatePage from './components/jogs-create-page/jogs-create-page';

export const useRoutes = (isAuthenticated, filter) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/jogs">
                    <JogsPage filter = {filter}/>
                </Route>
                <Route path="/info">
                    <InfoPage />
                </Route>
                <Route path="/contacts">
                    <ContactUs />
                </Route>
                <Route path="/jog-create-page">
                    <JogsCreatePage />
                </Route>
                <Redirect to="/jogs" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
};