import styles from "./MealItem.module.css";
import React from "react";
import MealAddStepper from "./MealAddStepper.js";


const MealItem = (props) => {
    return (
        <React.Fragment>
            <li className={styles.meal}>
                <div>
                    <h3 >{props.name}</h3>
                    <div className={styles.description}>
                        {props.description}
                    </div>
                    <div className={styles.price}>
                        {props.price}
                    </div>
                </div>
                <div>
                    <MealAddStepper />
                </div>
            </li>
        </React.Fragment>
    );
}

export default MealItem;