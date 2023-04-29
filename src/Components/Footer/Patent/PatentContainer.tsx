import React from 'react';
import s from "./PatentContainer.module.scss"

export const PatentContainer = () => {
    return (
        <span className={s.PatentContainer}>
            <div>
                ©WELBEX 2022. Все права защищены.
            </div>
            <div>
                Политика конфиденциальности
            </div>
        </span>
    );
};

