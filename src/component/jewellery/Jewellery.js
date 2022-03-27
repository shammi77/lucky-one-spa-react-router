import React, { useEffect, useState } from 'react';
import Ring from '../Ring/Ring';
import './Jewellery.css';

const Jewellery = () => {
    const [ornaments, setOrnaments] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setOrnaments(data));

    }, [])
    return (
        <div className='shop-container'>
            <div className="jewellery-container">
                {
                    ornaments.map(ornament => <Ring key={ornaments.id}
                        ornaments={ornaments}></Ring>)
                }
            </div>
            <div className="jewellery-item">
                <h3>5</h3>
            </div>
        </div>
    );
};

export default Jewellery;