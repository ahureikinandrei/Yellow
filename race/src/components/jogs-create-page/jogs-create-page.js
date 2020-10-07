import React, { useState, useContext } from 'react';

import './jogs-create-page.css';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

const JogsCreatePage = () => {
    const history = useHistory();
    const { token } = useContext(AuthContext);
    const httpRequst = 'https://jogtracker.herokuapp.com/api/v1/data/jog';
    const [distance, setDistance] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const { request } = useHttp();

    const setJog = async () => {
        try {
            if (distance && date && time) {
                await request(httpRequst, 'POST', 'date=15.08.2019&time=45&distance=50', { Authorization: `Bearer ${token}` });
                setDistance('');
                setDate('');
                setTime('');
                history.push('/jogs');
            }
        } catch (e) { }

    };

    return (
        <div className="jops-create">
            <div className="container jops-create__container">
                <div className="jops-create__create">
                    <input type="text"
                        placeholder="distance"
                        onChange={e => setDistance(e.target.value)}
                        value={distance}></input>
                    <input type="text"
                        placeholder="date"
                        onChange={e => setDate(e.target.value)}
                        value={date}></input>
                    <input type="text"
                        placeholder="calories"
                        onChange={e => setTime(e.target.value)}
                        value={time}></input>
                    <button
                        type="button"
                        className="login-container__btn"
                        onClick={setJog}>
                        Let me in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JogsCreatePage;