import React from 'react';
import {BodyRightColumnRightData} from "../../../../Common/DataSet/DataSet";
import {ItemRightColumnRight} from "./ItemRightColumnRight/ItemRightColumnRight";

export const RightColumnRight = () => {
    return (
        <div>
            {BodyRightColumnRightData.map((el, index)=>
                <>
                    <ItemRightColumnRight key={index} title={el.title} bodyUp={el.bodyUp} bodyDown={el.bodyDown}/>
                </>
            )}

        </div>
    );
};

