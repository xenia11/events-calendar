import React from "react";
import styles from "./DayContainer.module.scss";

interface DayContainerProps {
    day: string | number;
    style?: React.CSSProperties;
    openDateBox: (dateProp: string) => void;
}

const DayContainer: React.FC<DayContainerProps> = ({
    day,
    style,
    openDateBox,
}): React.ReactElement => {
    return (
        <>
            <div
                onClick={() => openDateBox(day.toString())}
                style={style}
                className={styles.DayContainer}
            >
                {day}
            </div>
        </>
    );
};

export default DayContainer;
