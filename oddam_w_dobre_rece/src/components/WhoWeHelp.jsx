import React from 'react';
import supabase from "../config/supabaseClient.js";
import decoration_img from "../assets/icons/Decoration.svg";
import { useEffect, useState } from "react";

const WhoWeHelp = () => {

    const [foundations, setFoundations] = useState([]);

    useEffect(() => {
        console.log('wywolanie useEffect');
        const fetchFoundations = async () => {
            try {
                const { data, error } = await supabase
                    .from('foundations')
                    .select()

                if (error) {
                    console.log(error);
                    console.log('Supabase Error:', error.message);
                }
                if (data) {
                    console.log('Dane z supabase:', data);
                    setFoundations(data);
                }

            } catch (error) {
                console.error('Error during fetching data:', error.message);
            }
        }

        fetchFoundations();

    }, []);
    console.log(foundations);

    return (
        <section className='whowehelp'>
            <div className='whowehelp-container'>
                <h1>Komu pomagamy?</h1>
                <img src={decoration_img} alt='decoration icon' className='decoration_img'/>
                <div className='buttons'>
                    <button className='button'>Fundacjom</button>
                    <button className='button'>Organizacjom pozarządowym</button>
                    <button className='button'>Lokalnym zbiórkom</button>
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul>
                    {foundations.map((foundation) => (
                        <li key={foundation.id}>{foundation.name}</li>
                    ))}

                </ul>
            </div>
        </section>
    );
};

export default WhoWeHelp;