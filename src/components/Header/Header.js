import React from 'react';
import styles from "./Header.module.css";
import imgMeals from "../../asset/meals.jpg";
import HeaderCartButton from "./HeaderCartButton.js";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Meal Order</h1>
                <HeaderCartButton onClick={props.onClick} />
            </header>
            <div className={styles.mainImage}>
                <img src={imgMeals} alt='A table full of delicious food!' />
            </div>

        </React.Fragment>
    )
}

export default Header;