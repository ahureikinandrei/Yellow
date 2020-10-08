import React, { useState, useContext } from 'react';

import './jogs-create-page.css';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import cancel from './cancel.svg';

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
                await request(httpRequst, 'POST', `date=${date}&time=${time}&distance=${distance}`, { Authorization: `Bearer ${token}` });
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
                    <NavLink to="/jogs" className="jops-create__exit"><img src={cancel} alt="Jog icon" /></NavLink>
                    <div className="jops-create__info">
                        <span>Distance</span>
                        <input type="text"
                            onChange={e => setDistance(e.target.value)}
                            value={distance}></input>
                    </div>
                    <div className="jops-create__info">
                        <span>Time</span>
                        <input type="text"
                            onChange={e => setDate(e.target.value)}
                            value={date}>
                        </input>
                    </div>
                    <div className="jops-create__info">
                        <span>Date</span>
                        <input type="text"
                            onChange={e => setTime(e.target.value)}
                            value={time}></input>
                    </div>
                    <button
                        type="button"
                        className="jogs__create__btn"
                        onClick={setJog}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JogsCreatePage;