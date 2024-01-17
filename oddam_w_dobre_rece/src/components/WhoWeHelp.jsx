import React, { useEffect, useState } from 'react';
import supabase from "../config/supabaseClient.js";
import decoration_img from "../assets/icons/Decoration.svg";
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../reducer.js';

const WhoWeHelp = () => {
    const [dataArray, setDataArray] = useState([]);
    const [foundations, setFoundations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = useSelector((state) => state.itemsPerPage);


    const dispatch = useDispatch();

    useEffect(() => {
        const fetchFoundations = async () => {
            try {
                const { data, error } = await supabase
                    .from('foundations')
                    .select();

                if (error) {
                    console.log('Supabase Error:', error.message);
                }

                if (data) {
                    setDataArray(data);
                    const startIndex = (currentPage - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    setFoundations(data.slice(startIndex, endIndex));
                    dispatch(setPage(currentPage));
                    console.log(data);
                    console.log('Foundations length wynosi:', foundations.length)
                }
            } catch (error) {
                console.error('Error during fetching data:', error.message);
            }
        };

        fetchFoundations();
    }, [currentPage, itemsPerPage, dispatch]);

    const renderPageNumbers = () => {
        const totalItems = Math.ceil(dataArray.length / itemsPerPage);
        const pageNumbers = [];

        for (let i = 1; i <= totalItems; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => setCurrentPage(i)}>
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <section className='whowehelp'>
            <div className='whowehelp-container'>
                <h1>Komu pomagamy?</h1>
                <img src={decoration_img} alt='decoration icon' className='decoration_img' />
                <div className='buttons'>
                    <button className='button'>Fundacjom</button>
                    <button className='button'>Organizacjom pozarządowym</button>
                    <button className='button'>Lokalnym zbiórkom</button>
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul>
                    {foundations.map((foundation) => (
                        <>
                            <li key={foundation.id}>{foundation.name}</li>
                            <p>Cel i misja: {foundation.description}</p>
                            <p>{foundation.stuff}</p>
                            <br></br>
                        </>
                    ))}
                </ul>
                <div className="pagination">
                    {renderPageNumbers()}
                </div>
            </div>
        </section>
    );
};

export default WhoWeHelp;
