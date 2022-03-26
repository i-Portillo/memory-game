import React from 'react';
import '../styles/Header.css'

function Header (props) {

    const { score, highScore } = props;

    return (
        <header>
            <h1 className="page-title">Memory Game</h1>
            <div className="score-board">
                <p className="score">Score: {score}</p>
                <p className="high-score">High Score: {highScore}</p>
            </div>
        </header>
    );
}

export default Header;