import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import puzzleImg from "../img/puzzle.png";
import "../style/CongratulationPg.css";
import "../App.css";

export default function CongratulationPg(props) {
    const finishedGames = JSON.parse(localStorage.getItem("finishedGamesInfo"));
    const { firstName, difficulty, duration, steps } = finishedGames[finishedGames.length - 1];

    const history = useHistory();

    const onNewGameClickGandler = () => {
        history.push('/welcome');
    }

    return (
        <div className="congratulation">
            <h1 className="congratulation__title">Congratulations, {firstName}!</h1>
            <h2 className="congratulation__subtitle">You completed the game on {difficulty} level!</h2>
            <div className="congratulation__results-container">
                <p className="congratulation__results-title">Your result:</p>
                <span className="congratulation__results-stat">Time: {duration.min}:{duration.sec}</span>
                <span className="congratulation__results-stat">Steps: {steps}</span>
            </div>
            <button className="congratulation__new-game-btn" onClick={onNewGameClickGandler}>New Game</button>
        </div>
    )
}