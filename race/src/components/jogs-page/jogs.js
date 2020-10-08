import React, { useState, useCallback, useContext } from 'react';
import JogInfo from '../jog-info';
import { NavLink } from 'react-router-dom';

import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';
import icon from './sad-rounded-square-emoticon.svg';
import iconAdd from './add.svg';
import Loader from '../loader';

import './jogs.css';

const JogsPage = ({ filter }) => {
    const [jogData, setJogData] = useState([]);
    const [filterValueFrom, changeFilterFrom] = useState('');
    const [filterValueTo, changeFilterTo] = useState('');
    const { loading, request } = useHttp();
    const { token } = useContext(AuthContext);
    const httpRequstUrl = 'https://jogtracker.herokuapp.com/api/v1/data/sync';

    const getData = useCallback(async () => {
        try {
            const data = await request(httpRequstUrl, 'GET', null, { Authorization: `Bearer ${token}` });
            setJogData(data);
        } catch (e) { }
    }, [token, request])

    useEffect(() => {
        getData();
    }, [getData]);

    const filterInput = (
        <div className="jops-page__filtr">
            <span>Date from</span>
            <input onChange={(e) => changeFilterFrom(e.target.value)} value={filterValueFrom}></input>
            <span>Date to</span>
            <input onChange={(e) => changeFilterTo(e.target.value)} value={filterValueTo}></input>
        </div>
    )

    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    if (jogData.length === 0) {
        return (
            <div className="jops-page__empty-container">
                <img src={icon} alt="Sad icon" />
                <p>Nothing is there</p>
                <NavLink to="/jog-create-page" className="jops-page__add-btn_empty">Create your jog first</NavLink>
            </div>
        )
    }


    return (
        <div className="jops-page">
            {filter ? filterInput : null}
            {!loading && <JogInfo jog={jogData} filterFrom={filterValueFrom} filterTo={filterValueTo} />}
            <NavLink to="/jog-create-page" className="jops-page__add-btn"><img src={iconAdd} alt="Sad icon" /></NavLink>
        </div>
    );
};

export default JogsPage;
