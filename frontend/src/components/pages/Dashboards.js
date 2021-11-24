import React, {useState, useEffect} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {useHistory, withRouter} from 'react-router-dom';


const Dashboards = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        refreshToken();
        booking();
    })

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/login");
                console.log(error.response.data.error);
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const booking = async() =>{
        const response = await axiosJWT.get('http://localhost:5000/guests',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response.data);
    }

    
    
    return (
        <div className="container">
           <h1> Welcome back: {name} </h1>
          
            <button onClick={booking} className="button is-info is-center">Booking Details</button>
        </div>
    )
    
}

export default (Dashboards);
