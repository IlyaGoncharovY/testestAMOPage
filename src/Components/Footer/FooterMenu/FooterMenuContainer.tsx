import React from 'react';
import {FooterMenuLeftColumnContainer} from "./FooterMenuLeftColumn/FooterMenuLeftColumnContainer";
import {FooterMenuRightColumnContainer} from "./FooterMenuRightColumn/FooterMenuRightColumnContainer";
import s from "./FooterMenuContainer.module.scss"

export const FooterMenuContainer = () => {
    return (
        <div className={s.FooterMenuContainer}>
            <div className={s.FooterMenuTitle}>
                МЕНЮ
            </div>
            <div className={s.FooterMenuBodyContainer}>
                <FooterMenuLeftColumnContainer/>
                <FooterMenuRightColumnContainer/>
            </div>

        </div>
    );
};

