import { useState } from "react";
import "./App.css";
import DayContainer from "./DayContainer/DayContainer";
import CalendarContainer from "./CalendarContainer/CalendarContainer";

function App() {
    const month = [
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
    const daysInMonth = (year: number, month: number) =>
        new Date(year, month, 0).getDate();
    const getMonth = new Date().getMonth();
    const getYear = new Date().getFullYear();

    const [currentMonth, setCurrentMonth] = useState(month[getMonth]);
    const [currentYear, setCurrentYear] = useState(getYear);
    const [daysInAMonth, setDaysInAMonth] = useState(
        daysInMonth(currentYear, month.indexOf(currentMonth) + 1)
    );
    return (
        <div>
            <CalendarContainer
                currentYear={currentYear}
                currentMonth={currentMonth}
                daysInMonth={daysInAMonth}
            />
        </div>
    );
}

export default App;
