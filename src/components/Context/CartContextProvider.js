import React, { useReducer } from "react";
import CartContext from "./CartContext.js";


const cartReducer = (state, actions) => {

    let updatedTotalAmount = state.totalAmount;

    switch (actions.type) {
        case "ADD":
            if (state.item.length >= 1 && state.item.findIndex(item => item.id === actions.item.id) !== -1) {
                const index = state.item.findIndex(item => item.id === actions.item.id);
                state.item[index].amount += actions.item.amount;
            } else {
                state.item.push(actions.item);
            }

            updatedTotalAmount = updatedTotalAmount + (actions.item.price * actions.item.amount);

            return {
                item: state.item,
                totalAmount: updatedTotalAmount,
            }
        case "REMOVE":
            if (state.item.length >= 1 && state.item.findIndex(item => item.id === actions.item.id) !== -1) {
                const index = state.item.findIndex(item => item.id === actions.item.id);
                state.item[index].amount -= actions.item.amount;
                if (state.item[index].amount === 0) {
                    state.item.splice(index, 1);
                }
            }

            updatedTotalAmount = updatedTotalAmount - (actions.item.price * actions.item.amount);

            return {
                item: state.item,
                totalAmount: updatedTotalAmount,
            }
        default:
            throw new Error(`no exist action type: ${actions.type}`);
    }
}

const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, {
        item: [],
        totalAmount: 0
    });

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (item) => {
        dispatchCartAction({ type: 'REMOVE', item: item });
    };

    const cartContext = {
        item: cartState.item,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;