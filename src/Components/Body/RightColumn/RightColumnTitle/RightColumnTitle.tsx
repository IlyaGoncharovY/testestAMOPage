import React from 'react';
import s from "./RightColumnTitle.module.scss"

export const RightColumnTitle = () => {
    return (
        <div className={s.RightColumnTileContainer}>
            <div>
                <div>
                    Вместе с <span className={s.RightColumnTitleBody}>БЕСПЛАТНОЙ</span>
                </div>
                <div>
                    <span className={s.RightColumnTitleBody}>КОНСУЛЬТАЦИЕЙ</span> мы дарим:
                </div>
            </div>
        </div>
    );
};

