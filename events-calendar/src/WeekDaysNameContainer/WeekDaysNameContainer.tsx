import React from "react";

const WeekdayNamesContainer: React.FC = () => {
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    return (
        <div>
            {weekdays.map((weekday) => (
                <span key={weekday}>{weekday}</span>
            ))}
        </div>
    );
};

export default WeekdayNamesContainer;
