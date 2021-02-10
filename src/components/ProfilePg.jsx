import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import puzzleImg from "../img/puzzle.png";
import backImg from "../img/back-arrow.png";
import logOutImg from "../img/log-out.png";
import userImg from "../img/user.png";
import "../style/ProfilePg.css";
import "../App.css";

export default function ProfilePg(props) {
    const { firstName, lastName, email } = JSON.parse(localStorage.getItem('profileInfo'));

    return (
        <div className="profile">
            <header className="header">
                <div className="header__container--inner">
                    <img src={puzzleImg} className="puzzle-img--mini" alt="Happy puzzle"></img>
                    <h1 className="header__title--mini">Mmg</h1>
                </div>
                <div className="header__container--inner">
                    <Link to="/welcome" className="header__link">
                        <img src={backImg} className="header-icon" alt="User icon"></img>
                        <p className="header__link--title">Welcome</p>
                    </Link>
                    <Link to="/welcome" onClick={() => localStorage.clear()} className="header__link">
                        <img src={logOutImg} className="header-icon" alt="Log out icon"></img>
                        <p className="header__link--title">Log out</p>
                    </Link>
                </div>
            </header>

            <div className="profile__personal-info">
                <img src={userImg} className="profile__user-icon--large" alt="User icon"></img>
                <h1 className="profile__user-name">{firstName} {lastName}</h1>
                <p className="profile__email"><span>email:&#32;</span>{email}</p>
            </div>
            <div className="profile__records">
                <h2 className="profile__records-title">Details:</h2>
                <div className="profile__records--inner">
                    <p className="profile__records-paragraph">Last game's difficulty:&#32;<span>?</span></p>
                    <p className="profile__records-paragraph">Last game's duration:&#32;<span>?</span></p>
                    <p className="profile__records-paragraph">Last game's steps:&#32;<span>?</span></p>
                </div>
            </div>
        </div>
    )
}