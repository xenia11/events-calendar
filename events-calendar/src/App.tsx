import { useState } from "react";
import "./App.css";
import DayContainer from "./DayContainer/DayContainer";
import CalendarContainer from "./CalendarContainer/CalendarContainer";

function App() {
    const daysInMonth = (year: number, month: number): number => {
        return new Date(year, month + 1, 0).getDate();
        console.log(month);
    };
    const getMonth = new Date().getMonth();
    const getYear = new Date().getFullYear();

    const [currentMonth, setCurrentMonth] = useState(getMonth);
    const [currentYear, setCurrentYear] = useState(getYear);
    const [daysInAMonth, setDaysInAMonth] = useState(
        daysInMonth(currentYear, currentMonth)
    );

    const handleMonthChange = (month: number, year: number) => {
        console.log(month, year);
        setCurrentMonth(month);
        setCurrentYear(year);
        setDaysInAMonth(daysInMonth(year, month));
    };
    console.log(currentMonth, currentYear, daysInAMonth);

    return (
        <div>
            <CalendarContainer
                currentYear={currentYear}
                currentMonth={currentMonth}
                daysInMonth={daysInAMonth}
                handleMonthChange={handleMonthChange}
            />
        </div>
    );
}

export default App;
