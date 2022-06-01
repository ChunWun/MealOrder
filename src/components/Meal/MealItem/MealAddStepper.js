import React, { useState, useRef } from "react";
import styles from "./MealAddStepper.module.css";

const MealAddStepper = (props) => {
    const amountRef = useRef();
    const [amount, setAmount] = useState(1);

    const onDeceaseHandler = (event) => {
        event.preventDefault();

        if (amount > 1) {
            setAmount(prev => prev - 1)
        }
    }

    const onInceaseHandler = (event) => {
        event.preventDefault();
        setAmount(prev => prev + 1)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddToCart(+amountRef.current.outerText);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={styles.stepper}>
                <button className={styles.stepperButton} onClick={onDeceaseHandler} disabled={(amount === 1)}>-</button>
                <label ref={amountRef} className={styles.input}>{amount}</label>
                <button className={styles.stepperButton} onClick={onInceaseHandler}>+</button>
            </div>
            <div className={styles.stepper}>
                <button className={styles.button}>
                    Add
                </button>
            </div>
        </form >
    );
}

export default MealAddStepper;