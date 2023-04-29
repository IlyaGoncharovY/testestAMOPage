import React from 'react';
import s from "./ManyDaysContainer.module.scss"

export const ManyDaysContainer = () => {
    return (
        <div className={s.ManyDaysContainer}>
            <div className={s.ManyDaysContainerTitle}>35 ДНЕЙ</div>
            <div className={s.ManyDaysContainerBody}>использования</div>
            <div className={s.ManyDaysContainerBody}>CRM</div>
        </div>
    );
};

