import styles from "./CalendarContainer.module.scss";
import React, { useState } from "react";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import DayContainer from "../DayContainer/DayContainer";
import WeekdayNamesContainer from "../WeekDaysNameContainer/WeekDaysNameContainer";

interface CalendarContainerProps {
    daysInMonth: number;
    currentMonth: number;
    currentYear: number;
    handleMonthChange: (month: number, year: number) => void;
}

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const CalendarContainer: React.FC<CalendarContainerProps> = ({
    currentMonth,
    currentYear,
    daysInMonth,
    handleMonthChange,
}) => {
    const renderItems = (days: number) => {
        const daysArr = [];

        for (let i = 0; i < days; i++) {
            daysArr.push(i + 1);
        }

        return daysArr;
    };

    function getDayFromDate(dateString: string): string {
        const date = new Date(dateString);

        const day = daysOfWeek[date.getDay()];
        return day;
    }

    const date = currentYear + "-" + (currentMonth + 1) + "-01";
    const day = getDayFromDate(date);
    console.log(daysOfWeek.indexOf(day));
    const daysToDisplay = Array(daysOfWeek.indexOf(day))
        .fill(0)
        .concat(renderItems(daysInMonth));
    console.log(daysToDisplay);

    const handlePrevious = () => {
        console.log(currentMonth);
        if (currentMonth == 0) {
            handleMonthChange(11, currentYear - 1);
        } else {
            handleMonthChange(currentMonth - 1, currentYear);
        }
    };
    const handleNext = () => {
        console.log(currentMonth);
        if (currentMonth == 11) {
            handleMonthChange(0, currentYear + 1);
        } else {
            handleMonthChange(currentMonth + 1, currentYear);
        }
    };

    return (
        <div className={styles.CalendarContainer}>
            <div className={styles.CalendarContainer_MonthYearDisplay}>
                {" "}
                <img
                    className={`${styles.CalendarContainer_MonthYearDisplay} ${styles["CalendarContainer_MonthYearDisplay-Arrow"]}`}
                    src={left}
                    onClick={handlePrevious}
                />
                <p
                    className={`${styles.CalendarContainer_MonthYearDisplay} ${styles["CalendarContainer_MonthYearDisplay-Para"]}`}
                >
                    {months[currentMonth] + " " + currentYear}
                </p>
                <img
                    className={`${styles.CalendarContainer_MonthYearDisplay} ${styles["CalendarContainer_MonthYearDisplay-Arrow"]}`}
                    src={right}
                    onClick={handleNext}
                />
            </div>

            {/* <WeekdayNamesContainer /> */}
            <div
                className={`${styles.CalendarContainer_MonthYearDisplay} ${styles["CalendarContainer-Style"]}`}
            >
                {daysOfWeek.map((day) => (
                    <DayContainer key={day} day={day} />
                ))}

                {daysToDisplay.map((day, index) => {
                    if (day === 0) {
                        return (
                            <DayContainer
                                key={index}
                                style={{ visibility: "hidden" }}
                                day={day}
                            />
                        );
                    } else {
                        return <DayContainer key={index} day={day} />;
                    }
                })}
            </div>
        </div>
    );
};

export default CalendarContainer;
