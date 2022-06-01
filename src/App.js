import Header from "./components/Header/Header.js";
import React, { useState } from "react";
import Meals from "./components/Meal/Meals.js";
import Cart from "./components/Cart/Cart.js";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  }

  const hideCartHandler = () => {
    setIsShowCart(false);
  }

  return (
    <React.Fragment>
      {isShowCart && <Cart onClsoe={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
