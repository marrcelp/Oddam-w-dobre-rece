import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='navigation'>
                    <ul className='login'>
                        <li>
                            <Link to="/login">Zaloguj</Link>
                        </li>
                        <li>
                            <Link to="/register">Załóż konto</Link>
                        </li>
                    </ul>
                    <ul className='ul-nav'>
                        <li>
                            <Link to="/">Start</Link>
                        </li>
                        <li>
                            <Link to="/">O co chodzi?</Link>
                        </li>
                        <li>
                            <Link to="/">O nas</Link>
                        </li>
                        <li>
                            <Link to="/">Fundacja i organizacje</Link>
                        </li>
                        <li>
                            <Link to="/">Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;