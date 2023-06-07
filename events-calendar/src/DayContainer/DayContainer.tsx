import React from "react";
import styles from "./DayContainer.module.scss";

interface DayContainerProps {
    day: number;
}

const DayContainer: React.FC<DayContainerProps> = ({
    day,
}): React.ReactElement => {
    return (
        <>
            <div>{day}</div>
        </>
    );
};

export default DayContainer;
