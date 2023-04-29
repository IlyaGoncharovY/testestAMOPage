import React from 'react';
import s from "./WidhetsContainer.module.scss"


export const WidgetsContainer = () => {
    return (
        <div className={s.WidgetsContainer}>
            <div className={s.WidgetsContainerTitle}>Виджеты</div>
            <div className={s.WidgetsContainerBody}>30 готовых</div>
            <div className={s.WidgetsContainerBody}>решений</div>
        </div>
    );
};
