import styles from "./CalendarContainer.module.scss";
import React, { useState } from "react";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import DayContainer from "../DayContainer/DayContainer";
import WeekdayNamesContainer from "../WeekDaysNameContainer/WeekDaysNameContainer";

interface CalendarContainerProps {
    daysInMonth: number;
    currentMonth: string;
    currentYear: number;
}

const CalendarContainer: React.FC<CalendarContainerProps> = ({
    currentMonth,
    currentYear,
    daysInMonth,
}) => {
    const renderItems = (days: number) => {
        const daysArr = [];

        for (let i = 0; i < days; i++) {
            daysArr.push(i + 1);
        }

        return daysArr;
    };

    return (
        <div>
            <img src={left} />
            {currentMonth + " " + currentYear}
            <img src={right} />
            <WeekdayNamesContainer />

            {renderItems(daysInMonth).map((day) => (
                <DayContainer day={day} />
            ))}
        </div>
    );
};

export default CalendarContainer;
