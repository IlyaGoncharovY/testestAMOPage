import React from 'react';
import s from "./LeftColumn.module.scss"

export const LeftColumnContainer = () => {
    return (
        <div className={s.LeftColumnContainer}>
            <div className={s.TitleUp}>
                Зарабатывайте больше
                <div className={s.WelbexTitle}>
                    с WELBEX
                </div>
            </div>
            <div className={s.TitleDown}>
                Развиваем и контролируем продажи за вас
            </div>
        </div>
    );
};

