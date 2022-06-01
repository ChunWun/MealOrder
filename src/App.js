import Header from "./components/Header/Header.js";
import React, { useState } from "react";
import Meals from "./components/Meal/Meals.js";
import Cart from "./components/Cart/Cart.js";
import CartContextProvider from "./components/Context/CartContextProvider.js";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  }

  const hideCartHandler = () => {
    setIsShowCart(false);
  }

  return (
    <CartContextProvider>
      {isShowCart && <Cart onClsoe={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
