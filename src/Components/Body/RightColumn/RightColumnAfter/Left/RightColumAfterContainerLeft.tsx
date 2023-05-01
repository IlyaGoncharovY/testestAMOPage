import React from 'react';
import {AfterLeftColumn} from "../../../../../Common/DataSet/DataSet";
import s from "./RightColumnAfterContainerLeft.module.scss"

export const RightColumAfterContainerLeft = () => {
    return (
        <div>
            {AfterLeftColumn.map((el, index) => <div key={index} className={s.TitleAfterLeft}>
                {el.title}
            </div>)}
        </div>
    );
};