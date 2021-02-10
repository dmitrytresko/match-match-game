import React, { useEffect, useRef } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import puzzleImg from "../img/puzzle.png";
import userImg from "../img/user.png";
import logOutImg from "../img/log-out.png";
import warningImg from "../img/warning.png";
import "../style/WelcomePg.css";
import "../App.css";
import { profileSchema } from '../validations/profileValidation';

export default function WelcomePg(props) {
    const history = useHistory();
    const profileData = JSON.parse(localStorage.getItem('profileInfo'));

    const difficultySelect = useRef();
    const cardTypeSelect = useRef();

    useEffect(() => {
        const profileData = JSON.parse(localStorage.getItem('profileInfo'));

        if (profileData) {
            history.push('/welcome');
        }
    }, [history]);

    const startGame = () => {
        const isConfirmed = window.confirm(`Are you sure that you want to confirm all the info and start the game?`);

        if (isConfirmed) {
            const gameInfo = {
                difficulty: difficultySelect.current.value,
                cardType: cardTypeSelect.current.value,
            }

            localStorage.setItem('gameInfo', JSON.stringify(gameInfo));
            history.push('/game');
        }
    }

    const completeRegistration = async (profileInfo) => {
        const isProfileInfoValid = await profileSchema.isValid(profileInfo);

        if (isProfileInfoValid) {
            localStorage.setItem('profileInfo', JSON.stringify(profileInfo));
            startGame();
        }
    }

    return (
        <div className="welcome">
            {profileData ?
                <React.Fragment>
                    <header className="header">
                        <div className="header__container--inner">
                            <img src={puzzleImg} className="puzzle-img--mini" alt="Happy puzzle"></img>
                            <h1 className="header__title--mini">Mmg</h1>
                        </div>
                        <div className="header__container--inner">
                            <Link to="/profile" className="header__link">
                                <img src={userImg} className="header-icon" alt="User icon"></img>
                                <p className="header__link--title">Profile</p>
                            </Link>
                            <Link to="/welcome" onClick={() => {
                                const isConfirmed = window.confirm(`Are you sure that you want to log out?`);
                                if (isConfirmed) {
                                    localStorage.clear();
                                }
                            }} className="header__link">
                                <img src={logOutImg} className="header-icon" alt="Log out icon"></img>
                                <p className="header__link--title">Log out</p>
                            </Link>
                        </div>
                    </header>

                    <h1 className="welcome__title">Welcome to Match Match Game, {profileData.firstName}!</h1>
                </React.Fragment> :
                <h1 className="welcome__title">Welcome to Match Match Game</h1>
            }
            <img src={puzzleImg} className="welcome__puzzle-img" alt="Happy puzzle"></img>

            <Formik initialValues={{
                firstName: "",
                lastName: "",
                email: "",
            }} validationSchema={profileSchema} onSubmit={completeRegistration}>
                <Form className="welcome__form">
                    {!profileData ?
                        <React.Fragment>
                            <div className="welcome__input-container">
                                <label className="welcome__label">First name:</label>
                                <div className="welcome__input-container--inner">
                                    <Field name="firstName" type="text" className="welcome__input" autoComplete="off"></Field>
                                    <ErrorMessage name="firstName" component="h4" className="welcome__invalid-message"></ErrorMessage>
                                </div>
                            </div>
                            <div className="welcome__input-container">
                                <label className="welcome__label">Last name:</label>
                                <div className="welcome__input-container--inner">
                                    <Field name="lastName" type="text" className="welcome__input" autoComplete="off"></Field>
                                    <ErrorMessage name="lastName" component="h4" className="welcome__invalid-message"></ErrorMessage>
                                </div>
                            </div>
                            <div className="welcome__input-container">
                                <label className="welcome__label">Email address:</label>
                                <div className="welcome__input-container--inner">
                                    <Field name="email" type="email" className="welcome__input" autoComplete="off"></Field>
                                    <ErrorMessage name="email" component="h4" className="welcome__invalid-message"></ErrorMessage>
                                </div>
                            </div>
                        </React.Fragment> : ""}

                    <div className="welcome__input-container">
                        <label className="welcome__label">Select difficulty:</label>
                        <div className="welcome__select">
                            <select ref={difficultySelect}>
                                <option value="easy">Easy (4x4)</option>
                                <option value="medium">Medium (6x6)</option>
                                <option value="hard">Hard (8x8)</option>
                            </select>
                            <span className="welcome__select-arrow"></span>
                        </div>
                    </div>
                    <div className="welcome__input-container">
                        <label className="welcome__label">Select card shirt:</label>
                        <div className="welcome__select">
                            <select ref={cardTypeSelect}>
                                <option value="countries">Countries</option>
                                <option value="food">Food</option>
                                <option value="balls">Balls</option>
                            </select>
                            <span className="welcome__select-arrow"></span>
                        </div>
                    </div>

                    <div className="welcome__rules-container">
                        <h3 className="welcome__rules-title">Rules:</h3>
                        <img src={warningImg} className="welcome__warning-img--left" alt="Warning"></img>
                        <img src={warningImg} className="welcome__warning-img--right" alt="Warning"></img>
                        <div className="welcome__rules-container--inner">
                            <p className="welcome__rules-paragraph"><span className="welcome__rules-number">1.&#32;</span>When the game begins all pictures are hidden</p>
                            <p className="welcome__rules-paragraph"><span className="welcome__rules-number">2.&#32;</span> Select 2 cards to try to match their pictures</p>
                            <p className="welcome__rules-paragraph"><span className="welcome__rules-number">3.&#32;</span>If you matched the pictures you can go again and find the others</p>
                            <p className="welcome__rules-paragraph"><span className="welcome__rules-number">4.&#32;</span>If you dont'match the cards they become hidden again</p>
                            <p className="welcome__rules-paragraph"><span className="welcome__rules-number">5.&#32;</span>The game ends when a player finds all pairs of cards</p>
                            <p className="welcome__rules-paragraph"><span className="welcome__rules-number">6.&#32;</span>Have fun and good luck!</p>
                        </div>
                    </div>

                    {!profileData ? <button className="welcome__start-btn" type="submit">Start game</button> : <button className="welcome__start-btn" type="button" onClick={startGame}>Start game</button>}
                </Form>
            </Formik>
        </div>
    )
}