import React from 'react';
import {AboutCompanyContainer} from "./AboutCompany/AboutCompanyContainer";
import {FooterMenuContainer} from "./FooterMenu/FooterMenuContainer";
import {FooterContactsContainer} from "./FooterContacts/FooterContactsContainer";
import s from "./FooterContainer.module.scss"


export const FooterContainer = () => {
    return (
            <div className={s.FooterContainer}>
                <div className={s.FooterCompanyMenuContainer}>
                    <AboutCompanyContainer/>
                    <FooterMenuContainer/>
                </div>
                <FooterContactsContainer/>
            </div>
    );
};

