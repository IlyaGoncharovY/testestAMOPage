import React, {FC} from 'react';
import s from "./ItemHeaderMenu.module.scss"

interface ItemHeaderMenuType {
    href: string
    title: string
}

export const ItemHeaderMenu: FC<ItemHeaderMenuType> = ({href, title}) => {
    return (
        <div className={s.ItemHeaderMenuContainer}>
            <a href={href} style={{textDecoration: "none", color: "#E4E5EA"}}>
                {title}
            </a>
        </div>
    );
};

