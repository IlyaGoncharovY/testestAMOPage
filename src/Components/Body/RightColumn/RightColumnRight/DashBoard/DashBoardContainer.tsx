import React from 'react';
import s from "./DashBoardContainer.module.scss"

export const DashBoardContainer = () => {
    return (
        <div className={s.DashBoardContainer}>
            <div className={s.DashBoardContainerTitle}>DASHBOARD</div>
            <div className={s.DashBoardContainerBody}>с показателями</div>
            <div className={s.DashBoardContainerBody}>вашего бизнеса</div>
        </div>
    );
};

