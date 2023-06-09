import { useState, useEffect, useRef } from "react";
import styles from "./PopUp.module.scss";
import closeIcon from "../../assets/x-button.png";

type PopUpProps = {
    handleHidden: (hidden: boolean) => void;
    bookInfo: any; // Replace 'any' with the type of bookInfo if available
    children: React.ReactNode;
};

const PopUp: React.FC<PopUpProps> = ({ handleHidden, bookInfo, children }) => {
    const popupRef = useRef<HTMLDivElement>(null);

    const hidePop = () => {
        handleHidden(false);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                hidePop();
            }
        };

        const handleMouseDown = (e: MouseEvent) => {
            if (!popupRef.current?.contains(e.target as Node)) {
                hidePop();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("mousedown", handleMouseDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, [handleHidden]);
    return (
        <>
            {" "}
            <div className={styles.PopUp} ref={popupRef}>
                <div className={`${styles.PopUp} ${styles.PopUp_ChildDiv}`}>
                    <img
                        onClick={hidePop}
                        className={`${styles.PopUp} ${styles.PopUp_ChildDiv} ${styles["PopUp_ChildDiv-Btn"]}`}
                        src={closeIcon}
                        alt="Close"
                    />
                </div>
                {children}
            </div>
        </>
    );
};

export default PopUp;
