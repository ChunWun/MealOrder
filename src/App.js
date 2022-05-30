import Header from "./components/Header/Header.js";
import React from "react";
import Meals from "./components/Meal/Meals.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
