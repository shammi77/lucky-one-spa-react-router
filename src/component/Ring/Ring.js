import React from 'react';

const Ring = (props) => {
    const { name, img, price } = props.ornaments;
    return (
        <div>
            <h5>gg</h5>
            <img src={img} alt="" />
            <p>Price: {price}</p>


        </div>
    );
};

export default Ring;