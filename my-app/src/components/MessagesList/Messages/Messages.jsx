import React from 'react';
import classes from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';

const Messages = (props) => {

    return (
    <div className={classes.messages}>
      <MessagesItem message='Hi,how are you?' />
      <MessagesItem message='How are you doing?' />
    </div>
    );
}

export default Messages;