import React from 'react';
import decoration_img from '../../src/assets/icons/Decoration.svg';

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className='banner'></div>
                <div className='banner-description'>
                    <h1>Zacznij pomagać! <br></br>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={decoration_img} alt='decoration icon' className='decoration_img'/>
                    <div className='button-container'>
                        <button className='btn'>ODDAJ<br></br>RZECZY</button>
                        <button className='btn'>ZORGANIZUJ<br></br>ZBIÓRKĘ</button>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;