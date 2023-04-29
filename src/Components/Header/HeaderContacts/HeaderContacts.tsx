import React from 'react';
import {LogoContactData} from "../../../Common/DataSet/DataSet";
import {ItemHeaderContact} from "./Item/ItemHeaderContact";
import s from "./HeaderContacts.module.scss"
import {TelNumber} from "./Number/TelNumber";

export const HeaderContacts = () => {
    return (
        <div className={s.HeaderContactsContainer}>
            <div className={s.TelNumberContainer}>
                <TelNumber/>
            </div>
            {LogoContactData.map((el, index) =>
                <ItemHeaderContact key={index} href={el.href} style={el.style}/>)}
        </div>
    );
};

