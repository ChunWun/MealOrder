import React, { useState } from "react";
import styles from "./MealAddStepper.module.css";

const MealAddStepper = () => {

    const [amount, setAmount] = useState(1);

    const onDeceaseHandler = () => {
        if (amount > 1) {
            setAmount(prev => prev - 1)
        }
    }

    const onInceaseHandler = () => {
        setAmount(prev => prev + 1)
    }

    return (
        <React.Fragment >
            <div className={styles.stepper}>
                <button className={styles.stepperButton} onClick={onDeceaseHandler} disabled={(amount === 1)}>-</button>
                <label className={styles.input}>{amount}</label>
                <button className={styles.stepperButton} onClick={onInceaseHandler}>+</button>
            </div>
            <div className={styles.stepper}>
                <button className={styles.button}>
                    Add
                </button>
            </div>
        </React.Fragment >
    );
}

export default MealAddStepper;