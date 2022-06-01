import React from "react";

//Use context to sent data to whole components
const CartContext = React.createContext({
    item: [],
    totalAmount: 0,
    addItem: (id) => { },
    removeItem: (id) => { }
})

export default CartContext;