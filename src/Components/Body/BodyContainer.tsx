import React from 'react';
import {LeftColumnContainer} from "./LeftColumn/LeftColumnContainer";
import s from "./BodyContainer.module.scss"
import {RightColumn} from "./RightColumn/RightColumn";

export const BodyContainer = () => {
    return (
        <div className={s.BodyContainer}>
            <LeftColumnContainer/>
            <div></div>
            <RightColumn/>
        </div>
    );
};

