import React from 'react';
import s from "./LogoHeaderContainer.module.scss"
import {LogoWelbex} from "./LogoWelbex/LogoWelbex";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";
import {HeaderContacts} from "./HeaderContacts/HeaderContacts";
import {HeaderLogoText} from "./HeaderLogoText/HeaderLogoText";

export const HeaderContainer = () => {
    return (
        <div className={s.HeaderContainerStyle}>
            <div className={s.LogoHeaderContainer}>
                <div className={s.LogoHeaderBody}>
                    <LogoWelbex/>
                    <HeaderLogoText/>
                </div>
                <HeaderMenu/>
            </div>
            <HeaderContacts/>
        </div>
    );
};

