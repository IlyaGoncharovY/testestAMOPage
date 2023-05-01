import React, {FC} from 'react';
import s from "./ItemFooterContacts.module.scss";

interface ItemHeaderContactType {
    href: string
    style: { backgroundImage: string; }
}


export const ItemFooterContacts: FC<ItemHeaderContactType> = ({href, style}) => {
    return (
        <div>
            <a href={href}>
                <div className={s.Img} style={style}>

                </div>
            </a>
        </div>
    );
};

