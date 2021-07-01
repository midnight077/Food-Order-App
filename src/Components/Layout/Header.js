import { Fragment } from "react";

import MealsImage from '../../Assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) =>{

    return (
        <Fragment>
            <header className ={classes.header}>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt='A table full of delicious food'></img>
            </div>
        </Fragment>
    );
};

export default Header;