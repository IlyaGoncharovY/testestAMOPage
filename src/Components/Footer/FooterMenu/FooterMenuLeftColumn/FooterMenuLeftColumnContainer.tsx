import React from 'react';
import {LeftColumnData} from "../../../../Common/DataSet/DataSet";

export const FooterMenuLeftColumnContainer = () => {
    return (
        <div>
            {LeftColumnData.map((el, index) =>
                <div key={index}>
                    <a href={el.href} style={{textDecoration:"none", color:"#E4E5EA"}}>
                        {el.title}
                    </a>
                </div>)}
        </div>
    );
};

