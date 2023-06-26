import styles from "./CalendarContainer.module.scss";
import React, { useState } from "react";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import DayContainer from "../DayContainer/DayContainer";
import WeekdayNamesContainer from "../WeekDaysNameContainer/WeekDaysNameContainer";
import PopUp from "../PopUp/PopUp";

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
    const [popUp, openPopUp] = useState(false);
    const [popUpInfo, setPopUpInfo] = useState("");
    const renderItems = (days: number) => {
        const daysArr = [];

        for (let i = 0; i < days; i++) {
            daysArr.push(i + 1);
        }

        return daysArr;
    };

    const handleHiddenPop = () => {
        openPopUp(false);
    };

    function getDayFromDate(dateString: string): string {
        const date = new Date(dateString);

        const day = daysOfWeek[date.getDay()];
        return day;
    }

    const openDateBox = (dateProp: string) => {
        openPopUp(true);
        setPopUpInfo(dateProp);
    };

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

    const currentDate = new Date().toLocaleDateString("en-US");

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

            <div
                className={`${styles.CalendarContainer_MonthYearDisplay} ${styles["CalendarContainer-Style"]}`}
            >
                {daysOfWeek.map((day) => (
                    <DayContainer
                        style={{ pointerEvents: "none", placeItems: "center" }}
                        openDateBox={openDateBox}
                        key={day}
                        day={day}
                    />
                ))}

                {daysToDisplay.map((day, index) => {
                    if (day === 0) {
                        return (
                            <DayContainer
                                key={index}
                                openDateBox={openDateBox}
                                style={{
                                    borderTop: "1px solid lightgray !important",
                                    color: "transparent",
                                    pointerEvents: "none",
                                }}
                                day={day}
                            />
                        );
                    } else {
                        return (
                            <DayContainer
                                key={index}
                                day={day}
                                openDateBox={openDateBox}
                                style={{
                                    backgroundColor:
                                        currentMonth +
                                            1 +
                                            "/" +
                                            day +
                                            "/" +
                                            currentYear ===
                                        currentDate
                                            ? "#f2f2f2"
                                            : "white",
                                }}
                            />
                        );
                    }
                })}
                {popUp && (
                    <PopUp handleHidden={handleHiddenPop} bookInfo={popUpInfo}>
                        <div>
                            {popUpInfo} - {currentMonth + 1} - {currentYear}
                        </div>
                    </PopUp>
                )}
            </div>
        </div>
    );
};

export default CalendarContainer;
