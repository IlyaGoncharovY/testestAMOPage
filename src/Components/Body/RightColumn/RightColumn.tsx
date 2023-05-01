import React from 'react';
import {RightColumnRight} from "./RightColumnRight/RightColumnRight";
import {RightColumnLeft} from "./RightColumnLeft/RightColumnLeft";
import s from "./RightColumnStyle.module.scss"
import {RightColumnTitle} from "./RightColumnTitle/RightColumnTitle";
import {RightColumAfterContainerRight} from "./RightColumnAfter/Right/RightColumAfterContainerRight";
import {RightColumAfterContainerLeft} from "./RightColumnAfter/Left/RightColumAfterContainerLeft";


export const RightColumn = () => {
    return (
        <div className={s.RightColumnContainer}>
            <RightColumnTitle/>
            <div className={s.RightColumnBody}>
                <RightColumnLeft/>
                <RightColumnRight/>
            </div>
            <div className={s.RightColumnAfterCommonContainer}>
                <RightColumAfterContainerLeft/>
                <RightColumAfterContainerRight/>
            </div>
            <button className={s.btn}>Получить консультацию</button>
        </div>
    );
};

