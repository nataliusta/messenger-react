import React from 'react';
import classes from './Messages.module.css';

const Messages = () => {
    return (
    <div className={classes.messages}>
          <ul className={classes.messagesList}>
            <li className={classes.messagesItem}>Hello! How are you doing?</li>
            <li className={classes.messagesItem}>Hope,you're OK?</li>
            <li className={classes.messagesItem}>Still there?!</li>
          </ul>
        </div>
    );
}

export default Messages;