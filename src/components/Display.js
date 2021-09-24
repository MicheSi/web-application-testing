import React from 'react';

const Display = props => {
    const {balls, strikes} = props;

    return (
        <div className='display'>
            <p data-testid='ballDisplay'>Balls: {balls}</p>
            <p data-testid='strikeDisplay'>Strikes: {strikes}</p>
        </div>
    )
}

export default Display;