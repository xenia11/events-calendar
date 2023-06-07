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
        <div className={styles.CalendarContainer}>
            <div className={styles.CalendarContainer_MonthYearDisplay}>
                {" "}
                <img
                    className={`${styles.CalendarContainer_MonthYearDisplay} ${styles["CalendarContainer_MonthYearDisplay-Arrow"]}`}
                    src={left}
                />
                <p
                    className={`${styles.CalendarContainer_MonthYearDisplay} ${styles["CalendarContainer_MonthYearDisplay-Para"]}`}
                >
                    {currentMonth + " " + currentYear}
                </p>
                <img
                    className={`${styles.CalendarContainer_MonthYearDisplay} ${styles["CalendarContainer_MonthYearDisplay-Arrow"]}`}
                    src={right}
                />
            </div>

            {/* <WeekdayNamesContainer /> */}
            <div
                className={`${styles.CalendarContainer_MonthYearDisplay} ${styles["CalendarContainer-Style"]}`}
            >
                {renderItems(daysInMonth).map((day) => (
                    <DayContainer day={day} />
                ))}
            </div>
        </div>
    );
};

export default CalendarContainer;
