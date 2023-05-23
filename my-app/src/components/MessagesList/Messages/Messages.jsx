import React from 'react';
import classes from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';

const Messages = () => {

  let MessagesData = [
    {id: 1, message: "Hi,how are you?"},
    {id: 2, message: "How are you doing?"},
    {id: 3, message: "???"}
  ]

    return (
      <div className={classes.messages}>
        <MessagesItem id={MessagesData[0].id}  message={MessagesData[0].message} />
        <MessagesItem id={MessagesData[1].id}  message={MessagesData[1].message} />
        <MessagesItem id={MessagesData[2].id}  message={MessagesData[2].message} />
      </div>
    );
}

export default Messages;