import React from 'react';
import decoration_img from "../assets/icons/Decoration.svg";
import signature_img from '../assets/icons/Signature.svg';
import people_img from '../assets/images/People@2x.png';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='about-container'>
                <div className='about-description'>
                    <h1>O nas</h1>
                    <img src={decoration_img} alt='decoration icon' className='decoration_img'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid asperiores autem deleniti dicta doloribus facere, fuga impedit incidunt iusto mollitia nisi odit qui quia quod ratione repellendus rerum sit. Ex fugiat maiores sequi voluptatem.</p>
                    <img src={signature_img} alt='signature' className='signature_img'/>
                </div>
                <img src={people_img} alt='5 persons staying in circle' className='people_img'/>
            </div>
        </section>
    );
};

export default About;