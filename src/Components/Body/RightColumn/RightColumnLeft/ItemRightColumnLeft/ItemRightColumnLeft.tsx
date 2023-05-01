import React, {FC} from 'react';
import s from "./ItemRightColumnLeft.module.scss"

interface WidgetsContainerType {
    title: string
    bodyUp:string
    bodyDown:string
}

export const ItemRightColumnLeft:FC<WidgetsContainerType> = ({title, bodyUp, bodyDown}) => {
    return (
        <div className={s.ItemRightContainer}>
            <div className={s.ItemRightTitleContainer}>{title}</div>
            <div className={s.ItemRightBodyContainer}>{bodyUp}</div>
            <div className={s.ItemRightBodyContainer}>{bodyDown}</div>
        </div>
    );
};