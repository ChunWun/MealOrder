import styles from "./Cart.module.css";
import React from "react";
import Modal from "../UI/Modal";


const Cart = (props) => {
    const total = 30;
    const cartList =
        <ul className={styles.cartItems}>
            {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>

    return (
        <Modal onClick={props.onClsoe}>
            {cartList}
            <div className={styles.total}>
                <span>Total Price</span>
                <span>{total}</span>
            </div>
            <div className={styles.actions}>
                {console.log(props.onClsoe)}
                <button className={styles['button--alt']} onClick={props.onClsoe}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;