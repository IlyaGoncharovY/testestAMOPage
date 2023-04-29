import React, {useEffect, useState} from 'react';
import {ContactsData, ContactsDataType} from "../../../Common/DataSet/DataSet";
import s from "./HeaderMenu.module.scss"
import {ItemHeaderMenu} from "./Item/ItemHeaderMenu";

export const HeaderMenu = () => {

    const [ContactsDataArray, setContactsDadaArray] = useState<ContactsDataType[]>(ContactsData)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenWidth <= 740) {
            setContactsDadaArray((prevState) => prevState.length > 4 ? [...prevState.slice(0, -1)]: prevState);
        } else {
            setContactsDadaArray(ContactsData);
        }
    }, [screenWidth]);

    return (
        <div className={s.HeaderMenuContainer}>
            {ContactsDataArray.map((contact, index) =>
                <div key={index}>
                    <ItemHeaderMenu href={contact.href} title={contact.title}/>
                </div>)}
        </div>
    );
};

