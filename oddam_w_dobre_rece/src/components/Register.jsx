import React from 'react';
import decoration_img from "../assets/icons/Decoration.svg";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section className='register' id='register'>
            <div className='register-container'>
                <h1>Załóż konto</h1>
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
                    <label>
                        Powtórz hasło
                        <input type="password" name="repeat-password" />
                    </label>
                </div>
                <div className='login-buttons'>
                    <Link to="/login">
                        <button>Zaloguj się</button>
                    </Link>
                    <button>Załóż konto</button>
                </div>
            </div>
        </section>
    );
};

export default Register;