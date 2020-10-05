import React from 'react';

import { useHttp } from '../../hooks/http.hook'

import './auth-page.css';
import icon from './bear-face.svg';

const AuthPage = () => {

    const httpRequst = 'https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin';

    const { loading, error, request } = useHttp();

    const registerHandler = async () => {
        try {
            const data = await request(httpRequst, 'POST', 'uuid=hello', {})
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
                        onClick={registerHandler}
                    >Let me in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;