import React from 'react';
import s from "./RightColumnAfterContainerRight.module.scss"


export const RightColumAfterContainerRight = () => {
    return (
        <div className={s.TitleContainer}>
            <div className={s.LineStyle}>30 ВИДЖЕТОВ</div>
            {/*<div className={s.text_ed}>30 ВИДЖЕТОВ</div>*/}
            <div className={s.LineStyle}>МЕСЯЦ AMOCRM</div>
        </div>
    );
};