import React from 'react';
import {LogoContactData} from "../../../Common/DataSet/DataSet";
import {ItemHeaderContact} from "../../Header/HeaderContacts/Item/ItemHeaderContact";
import s from "./FooterContactsContainer.module.scss"
import {TelNumber} from "../../Header/HeaderContacts/Number/TelNumber";
import {PatentContainer} from "../Patent/PatentContainer";


export const FooterContactsContainer = () => {
    return (
        <div className={s.FooterContactsContainer}>
            <div className={s.FooterContactsTitle}>
                КОНТАКТЫ
            </div>
            <div className={s.FooterContactsNumber}>
                <TelNumber/>
            </div>
            <div className={s.FooterContactsBody}>
                {LogoContactData.map((el, index) =>
                    <div key={index} >
                        <ItemHeaderContact href={el.href} style={el.style}/>
                    </div>)}
            </div>
            <div className={s.FooterContactsAddress}>
                Москва, Путевой проезд 3с1, к 902
            </div>
            <PatentContainer/>
        </div>
    );
};
