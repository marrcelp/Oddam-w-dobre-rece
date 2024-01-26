import React from 'react';
import decoration_img from "../assets/icons/Decoration.svg";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className='login' id='login'>
            <div className='login-container'>
                <h1>Zaloguj się</h1>
                <img src={decoration_img} alt='decoration icon' className='decoration_img'/>
                <div className='email_password'>
                    <label>
                        Email
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Hasło
                        <input type="password" name="password" />
                    </label>
                </div>
                <div className='login-buttons'>
                    <Link to='/register'>
                        <button>Załóż konto</button>
                    </Link>
                    <button>Zaloguj się</button>
                </div>
            </div>
        </section>
    );
};

export default Login;