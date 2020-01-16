import React, {useState} from 'react';
import Display from './Display';

const Dashboard = () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0)

    const ball = () => {
        if (balls < 4) {
            setBalls(balls + 1);
        } else {
            alert('Players advances to first base')
            setBalls(0);
            setStrikes(0);
        }
    }

    const strike = () => {
        if (strikes < 3) {
            setStrikes(strikes + 1);
        } else {
            alert(`Three strikes, you're out!`)
            setStrikes(0);
            setBalls(0);
        }
    }

    const foul = () => {
        if (strikes < 2) {
            alert('Foul ball!')
            setStrikes(strikes +1);
        } else {
            alert('Foul ball!')
            setStrikes(strikes);
        }
    }

    const hit = () => {
        alert('Player gets a hit!');
        setBalls(0);
        setStrikes(0);
    }

    return (
        <div className='dashboard'>
            <h1>Batter Stats</h1>
            <Display balls={balls} strikes={strikes} />
            <button data-testid='ballBtn' onClick={ball}>Ball</button>
            <button data-testid='strikeBtn' onClick={strike}>Strike</button>
            <button data-testid='foulBtn' onClick={foul}>Foul</button>
            <button data-testid='hitBtn' onClick={hit}>Hit</button>
        </div>
    )
}

export default Dashboard;