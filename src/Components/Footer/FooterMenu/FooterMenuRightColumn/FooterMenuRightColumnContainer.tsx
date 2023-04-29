import React from 'react';
import {RightColumnData} from "../../../../Common/DataSet/DataSet";
import s from "./FooterMenuRightColumnContainer.module.scss"

export const FooterMenuRightColumnContainer = () => {
    return (
        <div className={s.FooterMenuRightColumnContainer}>
            {RightColumnData.map((el, index) =>
                <div key={index}>
                    <a href={el.href} style={{textDecoration: "none", color: "#E4E5EA"}}>
                        {el.title}
                    </a>
                </div>)}
        </div>
    );
};

