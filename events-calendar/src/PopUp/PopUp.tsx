import { useState, useEffect, useRef } from "react";
import styles from "./PopUp.module.scss";
import closeIcon from "../assets/x-button.png";

type PopUpProps = {
    handleHidden: (hidden: boolean) => void;
    bookInfo: string;
    children: React.ReactNode;
};

const PopUp: React.FC<PopUpProps> = ({ handleHidden, bookInfo, children }) => {
    const popupRef = useRef<HTMLDivElement>(null);

    const hidePop = () => {
        handleHidden(true);
    };

    useEffect(() => {
        const hidePop = () => {
            handleHidden(true);
        };

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
            <div
                className={styles.PopUp}
                ref={popupRef}
                style={{
                    display: "flex",
                    width: "200px",
                    height: "150px",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    border: "2px solid #e4e3e3",
                    borderRadius: "5px",
                    padding: "10px",
                    boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 0.2)",
                    backgroundColor: "#ecf0f1",
                    position: "fixed",
                    top: "10vw",
                    left: "20vw",
                    zIndex: "999",
                    fontSize: "14px",
                    gap: "15px",
                }}
            >
                <div className={`${styles.PopUp} ${styles.PopUp_ChildDiv}`}>
                    <img
                        style={{
                            width: "20px",
                            height: "10px",
                        }}
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
