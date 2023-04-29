import React from 'react';
import {WidgetsContainer} from "./Widgets/WidgetsContainer";
import {SkypeFoodContainer} from "./SkypeFood/SkypeFoodContainer";

export const RightColumnLeft = () => {
    return (
        <div>
            <WidgetsContainer/>
            <SkypeFoodContainer/>
        </div>
    );
};

