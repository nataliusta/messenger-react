import React from 'react';
import classes from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';

const Messages = () => {
    return (
    <div className={classes.messages}>
      <MessagesItem />
    </div>
    );
}

export default Messages;