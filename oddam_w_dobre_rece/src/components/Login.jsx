import React, {useState} from 'react';
import decoration_img from "../assets/icons/Decoration.svg";
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);


    function validateEmail(email) {
        const [namePart, domainPart] = email.split('@');

        const domainRegex = /^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isDomainValid = domainRegex.test(domainPart);

        return isDomainValid;
    }


    function handleButtonClick() {

        const isEmailValid = validateEmail(email);
        const isPasswordValid = password.length >= 6;

        setEmailError(!isEmailValid);
        setPasswordError(!isPasswordValid);
    }


        return (
        <section className='login' id='login'>
            <div className='login-container'>
                <h1>Zaloguj się</h1>
                <img src={decoration_img} alt='decoration icon' className='decoration_img'/>
                <div className='email_password'>
                    <label>
                        Email
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                        {emailError ? <p className='invalid_data'>Niepoprawny format podanego e-maila!</p> : <p></p>}
                    </label>
                    <label>
                        Hasło
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        {passwordError ? <p className='invalid_data'>Hasło musi zawierać co najmniej 6 znaków!</p> : <p></p>}
                    </label>
                </div>
                <div className='login-buttons'>
                    <Link to='/register'>
                        <button>Załóż konto</button>
                    </Link>
                    <button onClick={handleButtonClick}>Zaloguj się</button>
                </div>
            </div>
        </section>
    );
};

export default Login;