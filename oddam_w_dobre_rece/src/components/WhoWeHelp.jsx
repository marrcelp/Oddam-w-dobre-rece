import React, { useEffect, useState } from 'react';
import supabase from "../config/supabaseClient.js";
import decoration_img from "../assets/icons/Decoration.svg";
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../reducer.js';

const WhoWeHelp = () => {
    const [dataArray, setDataArray] = useState([]);
    const [helpers, setHelpers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = useSelector((state) => state.itemsPerPage);
    const [displayType, setDisplayType] = useState('foundation');
    const [activeButton, setActiveButton] = useState('foundation');
    const [activePagination, setActivePagination] = useState(1);


    const dispatch = useDispatch();

    useEffect(() => {
        const fetchFoundations = async () => {
            try {
                const { data, error } = await supabase
                    .from('helpers')
                    .select();

                if (error) {
                    console.log('Supabase Error:', error.message);
                }

                if (data) {
                    setDataArray(data);
                    console.log('DANE', data)
                    console.log('ORGANIZACJE', dataArray);
                    const startIndex = (currentPage - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    const indexWithNull = data.findIndex(helper => helper[displayType + '_name'] === null);

                    setHelpers(data
                        .sort((a, b) => a.id - b.id)
                        .slice(startIndex, endIndex));
                    dispatch(setPage(currentPage));
                    console.log(data);
                    console.log('Foundations length wynosi:', helpers.length)
                }
            } catch (error) {
                console.error('Error during fetching data:', error.message);
            }
        };

        fetchFoundations();
    }, [currentPage, itemsPerPage, dispatch]);

    const renderPageNumbers = () => {
        const firstNullIndex = dataArray.findIndex(helper =>
            (displayType === 'foundation' && helper.foundation_name === null) ||
            (displayType === 'organization' && helper.organization_name === null) ||
            (displayType === 'localcollections' && helper.localcollections_name === null)
        );

        const totalItems = Math.ceil((firstNullIndex !== -1 ? firstNullIndex : dataArray.length) / itemsPerPage);

        const pageNumbers = [];

        for (let i = 1; i <= totalItems; i++) {
            pageNumbers.push(
                <button
                    className={`button-pagination ${activePagination === i ? 'active-pagination' : ''}`}
                    key={i}
                    onClick={() => {
                        setCurrentPage(i);
                        setActivePagination(i);
                    }}
                >
                    {i}
                </button>

            );
        }

        return pageNumbers;
    };


    const renderHelpers = () => {
        return (
            <>
                <ul className='helpers'>
                    {helpers.map((helper) => (
                        <div className='helpers-list' key={helper.id}>
                            <div>
                                <li>{helper[displayType + '_name']}</li>
                                <p>Cel i misja: {helper[displayType + '_description']}</p>
                            </div>
                            <p>{helper[displayType + '_stuff']}</p>
                        </div>

                    ))}
                </ul>
            </>
        );
    };

    function handleClick(type) {
        setDisplayType(type);
        setCurrentPage(1);
        setActiveButton(type);
        setActivePagination(1);
    }


    return (
        <section className='whowehelp'>
            <div className='whowehelp-container'>
                <h1>Komu pomagamy?</h1>
                <img src={decoration_img} alt='decoration icon' className='decoration_img' />
                <div className='buttons'>
                    <button className={`button ${activeButton === 'foundation' ? 'active' : ''}`} onClick={() => handleClick('foundation')}>Fundacjom</button>
                    <button className={`button ${activeButton === 'organization' ? 'active' : ''}`} onClick={() => handleClick('organization')}>Organizacjom<br></br>pozarządowym</button>
                    <button className={`button ${activeButton === 'localcollections' ? 'active' : ''}`} onClick={() => handleClick('localcollections')}>Lokalnym<br></br> zbiórkom</button>
                </div>
                <p className='whowehelp-description'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, Organizacji pozarządowych czy lokalnych zbiórek z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego dokładnie potrzebują.</p>
                {renderHelpers()}
                <div className="pagination">
                    {renderPageNumbers()}
                </div>
            </div>
        </section>
    );
};

export default WhoWeHelp;
