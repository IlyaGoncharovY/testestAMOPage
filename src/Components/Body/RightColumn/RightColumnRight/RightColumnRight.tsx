import React from 'react';
import {DashBoardContainer} from "./DashBoard/DashBoardContainer";
import {ManyDaysContainer} from "./ManyDays/ManyDaysContainer";

export const RightColumnRight = () => {
    return (
        <div>
            <DashBoardContainer/>
            <ManyDaysContainer/>
        </div>
    );
};

