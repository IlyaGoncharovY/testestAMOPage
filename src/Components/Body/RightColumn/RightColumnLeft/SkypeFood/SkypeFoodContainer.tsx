import React from 'react';
import s from "./SkypeFoodContainer.module.scss"

export const SkypeFoodContainer = () => {
    return (
        <div className={s.SkypeFoodContainer}>
            <div className={s.SkypeFoodContainerTitle}>SKYPE АУДИТ</div>
            <div className={s.SkypeFoodContainerBody}>Отдела продаж</div>
            <div className={s.SkypeFoodContainerBody}>и CRM системы</div>
        </div>
    );
};

