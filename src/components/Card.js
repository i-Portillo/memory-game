import React from 'react';
import "../styles/Card.css"

function Card (props) {

    const handleClick = () => {
        props.handleClick(props.name);
    }

    return (
        <div className='card' onClick={handleClick}>
            <img src={props.img} />
        </div>
    );
}

export default Card;