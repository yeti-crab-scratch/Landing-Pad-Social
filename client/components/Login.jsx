import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/Landing_Pad.png";
import styles from '../styles/login-styles.scss';

const Login = () => {

    const logInSec = (typeInp = 'text', htmlId, htmlLabel) => {
        return (
            <div className='log-in-sec'>
                <label htmlFor={htmlId}>{htmlLabel}</label>
                <input type={typeInp} id={htmlId}></input>
            </div>
        )
    }

    return(
        <div>
            <img className='logo' src={Logo} alt='Logo'/>
            <div className='log-in-container'>
                {logInSec('text', 'username', 'Username: ')}
                {logInSec('password', 'password', 'Password: ')}
                <Link to='/signup'>Sign-Up Here</Link>
            </div>

            <button className='submit-btn'>Submit</button>

        </div>
    )
}

export default Login;