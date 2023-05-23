import React from 'react';
import classes from './MessagesItem.module.css';

const MessagesItem = (props) => {

    return (
        <div className={classes.messagesBlock}>
            <div className={classes.messagesItem}>{props.message}</div>
        </div>

    );
}

export default MessagesItem;