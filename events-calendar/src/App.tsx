import { useState } from "react";
import "./App.css";
import DayContainer from "./DayContainer/DayContainer";
import CalendarContainer from "./CalendarContainer/CalendarContainer";

function App() {
    return (
        <div>
            <CalendarContainer />
            <DayContainer />
        </div>
    );
}

export default App;
