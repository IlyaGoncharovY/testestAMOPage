import React from 'react';
import {RightColumnRight} from "./RightColumnRight/RightColumnRight";
import {RightColumnLeft} from "./RightColumnLeft/RightColumnLeft";
import s from "./RightColumnStyle.module.scss"
import {RightColumnTitle} from "./RightColumnTitle/RightColumnTitle";


export const RightColumn = () => {
    return (
        <div className={s.RightColumnContainer}>
            <RightColumnTitle/>
            <div className={s.RightColumnBody}>
                <RightColumnLeft/>
                <RightColumnRight/>
            </div>
            <button className={s.btn}>Получить консультацию</button>
        </div>
    );
};

