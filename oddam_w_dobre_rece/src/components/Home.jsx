import React from 'react';
import decoration_img from '../../src/assets/icons/Decoration.svg';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className='home' id='home'>
                    <div className='banner'></div>
                    <div className='banner-description'>
                        <h1>Zacznij pomagać! <br></br>Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={decoration_img} alt='decoration icon' className='decoration_img'/>
                        <div className='button-container'>
                            <Link to="/login">
                            <button className='btn'>ODDAJ RZECZY</button>
                            </Link>
                            <Link to="/login">
                            <button className='btn'>ZORGANIZUJ ZBIÓRKĘ</button>
                            </Link>
                        </div>
                    </div>
            </section>

        </>
    );
};

export default Home;