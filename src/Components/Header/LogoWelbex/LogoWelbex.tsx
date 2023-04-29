import React from 'react';
import {LogoTitle1, LogoWelbex1} from "../../../Common/DataSet/UrlImg";
import s from "./LogoWelbex.module.scss"

export const LogoWelbex = () => {
    return (
        <div className={s.LogoContainer}>
            <div className={s.LogoImgContainer}>
                <div className={s.Logo} style={LogoWelbex1}></div>
                <div className={s.LogoTitle} style={LogoTitle1}></div>
            </div>
        </div>
    );
};

