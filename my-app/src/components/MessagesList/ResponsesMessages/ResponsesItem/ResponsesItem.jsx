import React from 'react';
import classes from './ResponsesItem.module.css';

const ResponsesItem = (props) => {
    return (
        <div className={classes.responsesBlock}>
            <div className={classes.responsesItem}>{props.message}</div>
        </div>

    );
}

export default ResponsesItem;