import styles from "./CalendarContainer.module.scss";
import React from "react";

const CalendarContainer = () => {
    const daysInMonth = (year: number, month: number) =>
        new Date(year, month, 0).getDate();

    return <div>{daysInMonth(2023, 7)}</div>;
};

export default CalendarContainer;
