import React from 'react';
import classes from './Burger.module.css';
import BurgerIng from './BurgerIng/BurgerIng';

const burger = (props) => {
    let transformedIng = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIng key={igKey + i} type={igKey} />;
            });   // [,]
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIng.length === 0) {
        transformedIng = <p>Please add stuff, plain is too boring!</p>;
    }
    return(
        <div className={classes.Burger}>
            <BurgerIng type="bread-top" />
            {transformedIng}
            <BurgerIng type="bread-bottom" />
        </div>
    );
};

export default burger;