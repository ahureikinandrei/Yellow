import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header';
import JogsPage from './components/jogs-page';
import InfoPage from './components/info-page';
import ContactUs from './components/contact-us';
import AuthPage from './components/auth-page';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Header></Header>
                <Route path="/jogs">
                    <JogsPage />
                </Route>
                <Route path="/info">
                    <InfoPage />
                </Route>
                <Route path="/contacts">
                    <ContactUs />
                </Route>
                <Redirect to="/info" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <Header></Header>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
};