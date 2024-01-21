import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

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
                        {location.pathname === '/' ? (
                            <>
                                <ScrollLink to='home' smooth={true} duration={900}>
                                    <li>Start</li>
                                </ScrollLink>
                                <ScrollLink to='simplesteps' smooth={true} duration={900}>
                                    <li>O co chodzi?</li>
                                </ScrollLink>
                                <ScrollLink to='about' smooth={true} duration={900}>
                                    <li>O nas</li>
                                </ScrollLink>
                                <ScrollLink to='whowehelp' smooth={true} duration={900}>
                                    <li>Fundacja i organizacje</li>
                                </ScrollLink>
                            </>
                            ) : (
                                <>

                        <li>
                            <Link to="/#home">Start</Link>
                        </li>
                        <li>
                            <Link to="/#simplesteps">O co chodzi?</Link>
                        </li>
                        <li>
                            <Link to="/#about">O nas</Link>
                        </li>
                        <li>
                            <Link to="/#whowehelp">Fundacja i organizacje</Link>
                        </li>
                        <li>
                            <Link to="/">Kontakt</Link>
                        </li>
                            </>
                            )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;