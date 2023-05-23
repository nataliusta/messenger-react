import React from 'react';
import classes from './UsersItem.module.css';

const UsersItem = (props) => {
    return (
        <div className={classes.usersItem}>
            <div className={classes.user}>{props.name}</div>
        </div>
    );
}

export default UsersItem;