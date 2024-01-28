import React, { useState } from 'react';
import clothes_img from "../assets/images/Background Image@2x.png";
import decoration_img from "../assets/icons/Decoration.svg";
import fb from "../assets/icons/Facebook@2x.png";
import instagram from "../assets/icons/Instagram@2x.png";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [nameError, setNameError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [emailError, setEmailError] = useState(false);


    function validateEmail(email) {
        const [namePart, domainPart] = email.split('@');

        const domainRegex = /^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isDomainValid = domainRegex.test(domainPart);

        return isDomainValid;
    }


    function handleSubmit(event) {
        event.preventDefault();

        const isNameValid = name.length >= 2 && !name.includes(' ');
        const isEmailValid = validateEmail(email);
        const isMessageValid = message.length >= 120;

        setIsValid(isNameValid && isEmailValid && isMessageValid);

        setNameError(!isNameValid);
        setEmailError(!isEmailValid);
        setMessageError(!isMessageValid);

        return isNameValid && isEmailValid && isMessageValid;
    }

    return (
        <section className='contact'>
            <div className='contact-container'>
                <form className='form' onSubmit={handleSubmit}>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={decoration_img} alt='decoration icon' className='decoration_img'/>
                    <div className='name_mail'>
                        <label>
                            Wpisz swoje imię
                            <input type='text' id='name' name='name' placeholder='Andrzej' onChange={(e)=> {setName(e.target.value)}}/>
                            {nameError ? <p className='invalid_data'>Niepoprawny format podanego imienia!</p> : <p></p>}
                        </label>
                        <label>
                            Wpisz swój email
                            <input type='email' id='email' name='email' placeholder='twojmail@xyz.com' onChange={(e)=> {setEmail(e.target.value)}}/>
                            {emailError ? <p className='invalid_data'>Niepoprawny format podanego e-maila!</p> : <p></p>}
                        </label>
                    </div>
                    <label className='text-msg'>
                        Wpisz swoją wiadomość
                        <textarea id='text-message' name='text-message' placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic labore minus officiis reiciendis soluta. Accusantium alias aliquam blanditiis consectetur cumque deleniti distinctio eaque minus nam necessitatibus nobis officiis perspiciatis quae, quidem quisquam quo quos repellat velit voluptas voluptatum.' onChange={(e)=> {setMessage(e.target.value)}}/>
                        {messageError ? <p className='invalid_data'>Wiadomość musi zawierać co najmniej 120 znaków!</p> : <p></p>}
                    </label>
                    <div className='btn-container'>
                        <button>Wyślij</button>
                    </div>
                    <div className='footer-icons'>
                        <a href='https://www.facebook.com'>
                            <img src={fb} alt='facebook icon' className='icon-fb'/>
                        </a>
                        <a href='https://www.instagram.com'>
                            <img src={instagram} alt='instagram icon' className='icon-ig'/>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
