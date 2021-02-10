import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link, useHistory } from 'react-router-dom';
import puzzleImg from "../img/puzzle.png";
import backImg from "../img/back-arrow.png";
import userImg from "../img/user.png";
import logOutImg from "../img/log-out.png";
import cornerImg from "../img/card/back/corner.png";
import questionImg from "../img/card/back/question.png";
import { ballsEasyArrPaired, ballsMediumArrPaired, ballsHardArrPaired } from "../arrsOfImages/balls";
import { countriesEasyArrPaired, countriesMediumArrPaired, countriesHardArrPaired } from "../arrsOfImages/countries";
import { foodEasyArrPaired, foodMediumArrPaired, foodHardArrPaired } from "../arrsOfImages/food";
import "../style/GamePg.css";
import "../App.css";

export default function GameGg(props) {
    const history = useHistory();

    const [time, setTime] = useState({ sec: 0, min: 0 });
    const [steps, setSteps] = useState(0);
    const [cards, setCards] = useState([]);
    const [openedCards, setOpenedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    const gameContainer = useRef();
    const card = useRef();

    let secCount = time.sec;
    let minCount = time.min;

    const onRestartClick = useCallback(() => {
        const isConfirmed = window.confirm(`Are you sure that you want to restart the game?\n\nNOTE: Your current score will not be saved.`);
        if (isConfirmed) {
            setTime({ min: 0, sec: 0 });
            setSteps(0);
            setMatchedCards([]);
            setOpenedCards([]);
            setCards(shuffle(setCardsArray()));
        }
    }, [setTime]);

    const onCardFlipHandler = (index) => {
        setOpenedCards([...openedCards, index]);
    }

    const { difficulty, cardType } = JSON.parse(localStorage.getItem('gameInfo'));

    const setCardsArray = () => {
        switch (cardType) {
            case 'countries': {
                if (difficulty === 'easy') return countriesEasyArrPaired;
                if (difficulty === 'medium') return countriesMediumArrPaired;
                if (difficulty === 'hard') return countriesHardArrPaired;
                break;
            }
            case 'food': {
                if (difficulty === 'easy') return foodEasyArrPaired;
                if (difficulty === 'medium') return foodMediumArrPaired;
                if (difficulty === 'hard') return foodHardArrPaired;
                break;
            }
            case 'balls': {
                if (difficulty === 'easy') return ballsEasyArrPaired;
                if (difficulty === 'medium') return ballsMediumArrPaired;
                if (difficulty === 'hard') return ballsHardArrPaired;
                break;
            }
            default: return;
        }
    }

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        const tick = () => {
            secCount++;

            if (secCount === 60) {
                minCount++;
                secCount = 0;
            }

            setTime({ sec: secCount, min: minCount });
        };

        const intID = setInterval(tick, 1000);

        return () => clearInterval(intID);
    }, [time]);

    useEffect(() => {
        const firstOpenedCard = setCardsArray()[openedCards[0]];

        if (firstOpenedCard) {
            const secondOpenedCard = setCardsArray()[openedCards[1]];

            if (secondOpenedCard && firstOpenedCard.id === secondOpenedCard.id) {
                setMatchedCards([...matchedCards, secondOpenedCard.id]);
            }
        }

        if (openedCards.length === 2) {
            setSteps(steps + 1);
            gameContainer.current.classList.add('disabled');

            setTimeout(() => {
                setOpenedCards([]);
                gameContainer.current.classList.remove('disabled');
                card.current.classList.remove('disabled');
            }, 750);
        }
    }, [openedCards])

    useEffect(() => {
        const cardsArr = setCardsArray();
        const shuffledCards = shuffle(cardsArr);

        setCards(shuffledCards);
    }, [setCards])

    return (
        <div className="game">
            <header className="header">
                <div className="header__container--inner">
                    <img src={puzzleImg} className="puzzle-img--mini" alt="Happy puzzle"></img>
                    <h1 className="header__title--mini">Mmg</h1>
                </div>
                <div className="header__container--inner">
                    <Link onClick={() => {
                        const isConfirmed = window.confirm(`Are you sure that you want to finish a current game and return?\n\nNOTE: Your current score will not be saved.`);
                        if (isConfirmed) {
                            history.push('/welcome');
                        }
                    }} className="header__link">
                        <img src={backImg} className="header-icon" alt="User icon"></img>
                        <p className="header__link--title">New Game</p>
                    </Link>
                    <Link onClick={() => {
                        const isConfirmed = window.confirm(`Are you sure that you want to finish a current game?\n\nNOTE: Your current score will not be saved.`);
                        if (isConfirmed) {
                            history.push('/profile');
                        }
                    }} className="header__link">
                        <img src={userImg} className="header-icon" alt="User icon"></img>
                        <p className="header__link--title">Profile</p>
                    </Link>
                    <Link onClick={() => {
                        const isConfirmed = window.confirm(`Are you sure that you want to finish the game and log out?\n\nNOTE: Your current score will not be saved.`);
                        if (isConfirmed) {
                            history.push('/welcome');
                            localStorage.clear();
                        }
                    }} className="header__link">
                        <img src={logOutImg} className="header-icon" alt="Log out icon"></img>
                        <p className="header__link--title">Log out</p>
                    </Link>
                </div>
            </header>

            <div className={`${difficulty === 'easy' ? "game__container--easy" :
                difficulty === 'medium' ? "game__container--medium" : "game__container--hard "}`} ref={gameContainer}>
                <div className="game__info-container">
                    <div className="game__info-container--inner">
                        <p className="game__info-title">Time</p>
                        <div className="game__info-handler">{time.min >= 10 ? time.min : "0" + time.min}:
                        {time.sec >= 10 ? time.sec : "0" + time.sec}</div>
                    </div>
                    {difficulty === "hard" ? <button button className="game__restart-btn" style={{ marginBottom: '0' }} onClick={onRestartClick}>Restart</button> : ""}
                    <div className="game__info-container--inner">
                        <p className="game__info-title">Steps</p>
                        <div className="game__info-handler">{steps}</div>
                    </div>
                </div>

                <div className={`${difficulty === 'easy' ? "game__main-container--easy" :
                    difficulty === 'medium' ? "game__main-container--medium" : "game__main-container--hard"}`}>
                    {cards.map(({ id, name, path }, index) => {
                        let isCardFlipped = false;

                        if (openedCards.includes(index)) {
                            isCardFlipped = true;
                        }


                        if (matchedCards.includes(id)) {
                            isCardFlipped = true;
                        }

                        return (
                            <div className={`game__card ${isCardFlipped ? 'game__card-flipped disabled' : ""} 
                            ${matchedCards.includes(id) ? 'matched' : ""}`} key={index}
                                onClick={() => onCardFlipHandler(index)} ref={card}>
                                <div className="game__card-back game__card-face">
                                    <img className="game__card-corner game__card-corner--top-left" src={cornerImg} alt="Corner icon"></img>
                                    <img className="game__card-corner game__card-corner--top-right" src={cornerImg} alt="Corner icon"></img>
                                    <img className="game__card-corner game__card-corner--bottom-left" src={cornerImg} alt="Corner icon"></img>
                                    <img className="game__card-corner game__card-corner--bottom-right" src={cornerImg} alt="Corner icon"></img>
                                    <img className="game__card-question" src={questionImg} alt="Question icon"></img>
                                </div>
                                <div className="game__card-front game__card-face">
                                    <img className="game__card-corner game__card-corner--top-left" src={cornerImg} alt="Corner icon"></img>
                                    <img className="game__card-corner game__card-corner--top-right" src={cornerImg} alt="Corner icon"></img>
                                    <img className="game__card-corner game__card-corner--bottom-left" src={cornerImg} alt="Corner icon"></img>
                                    <img className="game__card-corner game__card-corner--bottom-right" src={cornerImg} alt="Corner icon"></img>
                                    <img className="game__card-front-image" src={path} alt={`${name} icon`}></img>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {difficulty === "hard" ? "" : <button button className="game__restart-btn" onClick={onRestartClick}>Restart</button>}
            </div>
        </div >
    )
}