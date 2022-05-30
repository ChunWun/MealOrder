import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";

const Meal = (props) => {
    return (
        <React.Fragment>
            <MealSummary />
            <AvailableMeals />
        </React.Fragment>
    )
}

export default Meal;