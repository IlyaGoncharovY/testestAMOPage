import React from 'react';
import s from "./RightColumnAfterContainerRight.module.scss"
import {AfterRightColumn} from "../../../../../Common/DataSet/DataSet";


export const RightColumAfterContainerRight = () => {
    return (
        <div className={s.TitleContainer}>
            {AfterRightColumn.map((el, index) =>
                <div key={index} className={s.LineStyle}>
                    {el.title}
                </div>)}
        </div>
    );
};