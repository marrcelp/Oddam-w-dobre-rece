import React, {useState} from 'react';
import decoration_img from "../assets/icons/Decoration.svg";
import { Link } from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState(false);


    function validateEmail(email) {
        const [namePart, domainPart] = email.split('@');

        const domainRegex = /^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isDomainValid = domainRegex.test(domainPart);

        return isDomainValid;
    }

    function handleButtonClick() {

        const isEmailValid = validateEmail(email);
        const isPasswordValid = password.length >= 6;
        const isRepeatPasswordValid = password === repeatPassword;

        setEmailError(!isEmailValid);
        setPasswordError(!isPasswordValid);
        setRepeatPasswordError(!isRepeatPasswordValid)
    }

    return (
        <section className='register' id='register'>
            <div className='register-container'>
                <h1>Załóż konto</h1>
                <img src={decoration_img} alt='decoration icon' className='decoration_img'/>
                <div className='email_password'>
                    <label>
                        Email
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                        {emailError ? <p className='invalid_data'>Niepoprawny format podanego e-maila!</p> : <p></p>}
                    </label>
                    <label>
                        Hasło
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        {passwordError ? <p className='invalid_data'>Hasło musi zawierać co najmniej 6 znaków!</p> : <p></p>}
                    </label>
                    <label>
                        Powtórz hasło
                        <input type="password" name="repeat-password" onChange={(e) => setRepeatPassword(e.target.value)}/>
                        {repeatPasswordError ? <p className='invalid_data'>Hasła muszą być takie same!</p> : <p></p>}
                    </label>
                </div>
                <div className='login-buttons'>
                    <Link to="/login">
                        <button>Zaloguj się</button>
                    </Link>
                    <button className='second-btn' onClick={handleButtonClick}>Załóż konto</button>
                </div>
            </div>
        </section>
    );
};

export default Register;