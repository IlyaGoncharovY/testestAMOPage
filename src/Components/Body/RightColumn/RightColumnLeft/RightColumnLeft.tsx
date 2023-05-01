import React from 'react';
import {BodyRightColumnLeftData} from "../../../../Common/DataSet/DataSet";
import {ItemRightColumnLeft} from "./ItemRightColumnLeft/ItemRightColumnLeft";

export const RightColumnLeft = () => {
    return (
        <div>
            {BodyRightColumnLeftData.map((el, index)=>
                <>
                    <ItemRightColumnLeft key={index} title={el.title} bodyUp={el.bodyUp} bodyDown={el.bodyDown}/>
                </>
            )}

        </div>
    );
};

