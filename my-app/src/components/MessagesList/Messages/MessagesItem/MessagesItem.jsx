import React from 'react';
import classes from './MessagesItem.module.css';

const MessagesItem = () => {
    return (
        <div className={classes.messagesBlock}>
            <div className={classes.messagesItem}>Hello! How are you doing?</div>
            <div className={classes.messagesItem}>Still there?</div>
        </div>

    );
}

export default MessagesItem;