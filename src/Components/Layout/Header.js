import { Fragment } from "react";

import MealsImage from '../../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{

    return (
        <Fragment>
            <header className ={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt='A table full of delicious food'></img>
            </div>
        </Fragment>
    );
};

export default Header;