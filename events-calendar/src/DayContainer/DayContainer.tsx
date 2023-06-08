import React from "react";
import styles from "./DayContainer.module.scss";

interface DayContainerProps {
    day: string | number;
    style?: React.CSSProperties;
}

const DayContainer: React.FC<DayContainerProps> = ({
    day,
    style,
}): React.ReactElement => {
    return (
        <>
            <div style={style} className={styles.DayContainer}>
                {day}
            </div>
        </>
    );
};

export default DayContainer;
