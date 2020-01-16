import React from 'react';

const Display = props => {
    const {balls, strikes} = props;

    return (
        <div className='display'>
            <p>Balls: {balls}</p>
            <p>Strikes: {strikes}</p>
        </div>
    )
}