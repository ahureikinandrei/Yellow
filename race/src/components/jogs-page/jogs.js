import React, { useState, useCallback, useContext } from 'react';
import JogInfo from '../jog-info'

import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';
import Loader from '../loader';

import './jogs.css';

const JogsPage = () => {
    const [jogData, setJogData] = useState([]);
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

    if (loading || jogData.length === 0) {
        return (
            <Loader></Loader>
        )
    }

    return (
        <div className="jops-page">
            {!loading && <JogInfo jog={jogData} />}
        </div>
    );
};

export default JogsPage;