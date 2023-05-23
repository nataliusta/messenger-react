import React from 'react';
import classes from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';

const Messages = () => {

  let messagesData = [
    {id: 1, message: "Hi,how are you?"},
    {id: 2, message: "How are you doing?"},
    {id: 3, message: "???"}
  ]

  let messagesElements = messagesData.map( message => <MessagesItem id={message.id}  message={message.message} /> );

    return (
      <div className={classes.messages}>
        { messagesElements }
      </div>
    );
}

export default Messages;