import styles from "./Searchbar.module.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
const Searchbar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <header>
            <div className={styles.header}>
                <h2 className={styles.span}>Recherche</h2>
                <span className={styles.span}>Date de début <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></span>
                <span className={styles.span}>Date de fin <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /></span>
                <span className={styles.span}>Nombre de personnes
                    ➕&nbsp;<input placeholder="Nombre de personnes"></input>&nbsp;➖
                </span>
            </div>
        </header>
    )
}

export default Searchbar;