import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <nav className='navigation'>
                <ul className='login'>
                    <li>Zaloguj</li>
                    <li>Załóż konto</li>
                </ul>
                <ul className='ul-nav'>
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;