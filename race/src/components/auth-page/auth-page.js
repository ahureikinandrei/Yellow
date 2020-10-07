import React, { useEffect, useContext } from 'react';

import { useHttp } from '../../hooks/http.hook'

import './auth-page.css';
import icon from './bear-face.svg';
import { AuthContext } from '../../context/AuthContext';

const AuthPage = () => {
    const httpRequst = 'https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin';

    const auth = useContext(AuthContext);
    const { loading, error, request, clearError } = useHttp();

    useEffect(() => {
        clearError();
    }, [error, clearError]);

    const loginHandler = async () => {
        try {
            const data = await request(httpRequst, 'POST', 'uuid=hello', {});
            auth.login(data.response.access_token);
        } catch (e) { }
    }

    return (
        <div className="auth-page">
            <div className="container auth-page__container">
                <div className="auth-page__login-container">
                    <img src={icon} alt="Bear icon" className="login-container__icon" />
                    <button
                        type="button"
                        className="login-container__btn"
                        onClick={loginHandler}
                        disabled={loading}>
                        Let me in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;