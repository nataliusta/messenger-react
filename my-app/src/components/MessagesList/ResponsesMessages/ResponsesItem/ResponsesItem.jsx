import React from 'react';
import classes from './ResponsesItem.module.css';

const ResponsesItem = () => {
    return (
        <div className={classes.responsesBlock}>
            <div className={classes.responsesItem}>Hey!!</div>
            <div className={classes.responsesItem}>??</div>
            <div className={classes.responsesItem}>Where are you?</div>
        </div>

    );
}

export default ResponsesItem;