import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react-is";

const Meals = () =>{
    return (<Fragment>
        <MealsSummary />
        <AvailableMeals/>
    </Fragment>);
};

export default Meals;