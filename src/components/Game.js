import React, { useState, useEffect } from 'react';
import Header from './Header'
import Card from './Card';

import Abra from '../images/Abra.webp';
import Caterpie from '../images/Caterpie.webp';
import Eevee from '../images/Eevee.webp';
import Farfectchd from '../images/Farfetchd.webp';
import Growlithe from '../images/Growlithe.webp';
import Meowth from '../images/Meowth.webp';
import Nidoran from '../images/Nidoran.webp';
import Oddish from '../images/Oddish.webp';
import Paras from '../images/Paras.png';
import Rattata from '../images/Rattata.png';
import Sandshrew from '../images/Sandshrew.webp';
import Vulpix from '../images/Vulpix.png';

import '../styles/Game.css';

function Game () {

    const pokemons = [
        { name: 'Abra', img: Abra },
        { name: 'Caterpie', img: Caterpie },
        { name: 'Eevee', img: Eevee },
        { name: 'Farfectchd', img: Farfectchd },
        { name: 'Growlithe', img: Growlithe },
        { name: 'Meowth', img: Meowth },
        { name: 'Nidoran', img: Nidoran },
        { name: 'Oddish', img: Oddish },
        { name: 'Paras', img: Paras },
        { name: 'Rattata', img: Rattata },
        { name: 'Sandshrew', img: Sandshrew },
        { name: 'Vulpix', img: Vulpix },
    ]

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [pickedCards, setPickedCards] = useState([]);
    const [cards, setCards] = useState(pokemons);

    const increaseScore = () => {
        setScore(score + 1);
    }

    const resetScore = () => {
        setScore(0);
    }

    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
        }
    },
    // eslint-disable-next-line
    [score]);

    const resetPickedCards = () => {
        setPickedCards([]);
    }

    const checkCard = (card) => {
        if (pickedCards.includes(card)) {
            // GAME OVER
            resetScore();
            resetPickedCards();
        } else {
            increaseScore();
            addPickedCard(card);
        }
        setCards(shuffleCards(cards));
    }

    const addPickedCard = (card) => {
        setPickedCards([...pickedCards, card]);
    }

    const shuffleCards = (cards) => {
        let cardsCopy = [...cards];
        for (let i = cardsCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = cardsCopy[i];
            cardsCopy[i] = cardsCopy[j];
            cardsCopy[j] = temp;
        }
        return cardsCopy;
    }

    useEffect(() => {
        setCards(shuffleCards(cards))
    }, []);


    return (
        <div>
            <Header score={score} highScore={highScore}/>
            <main>
                <div className='card-container'>
                    { cards.map((pokemon) => {
                        return <Card img={pokemon.img}
                                key={pokemon.name}
                                name={pokemon.name}
                                handleClick={checkCard} />
                    })}
                </div>
            </main>
        </div>
    );
}

export default Game;