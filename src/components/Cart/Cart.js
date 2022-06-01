import styles from "./Cart.module.css";
import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem/CartItem";
import CartContext from "../Context/CartContext.js";


const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (item) => {
        cartCtx.removeItem({ ...item, amount: 1 });
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartList = (
        <ul className={styles.cartItems}>
            {cartCtx.item.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    )


    return (
        <Modal onClick={props.onClsoe}>
            {cartList}
            <div className={styles.total}>
                <span>Total Price</span>
                <span>{cartCtx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClsoe}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;