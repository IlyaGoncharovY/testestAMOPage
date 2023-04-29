import React from 'react';
import {AboutTheCompanyData} from "../../../Common/DataSet/DataSet";
import s from "./AboutCompanyContainer.module.scss"

export const AboutCompanyContainer = () => {
    return (
        <div className={s.AboutCompanyContainer}>
            <div className={s.AboutCompanyTitle}>
                О КОМПАНИИ
            </div>
            <div className={s.AboutCompanyBodyContainer}>
                {AboutTheCompanyData.map((el, index) =>
                    <div key={index} className={s.AboutCompanyBody}>
                        <a href={el.href}
                           style={{textDecoration: "none", color: "#E4E5EA"}}>{el.title}</a>
                    </div>)}
            </div>
        </div>
    );
};