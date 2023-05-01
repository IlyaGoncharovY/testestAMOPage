import React from 'react';
import {AfterLeftColumn} from "../../../../../Common/DataSet/DataSet";

export const RightColumAfterContainerLeft = () => {
    return (
        <div>
            {AfterLeftColumn.map((el, index) => <div key={index}>
                {el.title}
            </div>)}
        </div>
    );
};