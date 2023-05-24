import React from 'react';
import classes from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';

const Messages = (props) => {

  let messagesElements = props.messagesData.map( message => <MessagesItem id={message.id}  message={message.message} /> );

    return (
      <div className={classes.messages}>
        { messagesElements }
      </div>
    );
}

export default Messages;