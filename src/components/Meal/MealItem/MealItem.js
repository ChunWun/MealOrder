import styles from "./MealItem.module.css";
import React, { useContext } from "react";
import MealAddStepper from "./MealAddStepper.js";
import CartContext from "../../Context/CartContext";


const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <React.Fragment>
            <li className={styles.meal}>
                <div>
                    <h3 >{props.name}</h3>
                    <div className={styles.description}>
                        {props.description}
                    </div>
                    <div className={styles.price}>
                        ${props.price}
                    </div>
                </div>
                <div>
                    <MealAddStepper onAddToCart={addToCartHandler} />
                </div>
            </li>
        </React.Fragment>
    );
}

export default MealItem;