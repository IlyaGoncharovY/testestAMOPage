import React from 'react';
import s from "./Balls.module.scss"


export const Balls = () => {
    return (
        <div className={s.BallsContainer}>
            <div className={s.PurpleBall}></div>
            <div className={s.RedBall}></div>
            <div className={s.RedBallSecond}></div>
            <div className={s.PurpleLight}></div>
            <div className={s.RedLight}></div>
        </div>
    );
};

