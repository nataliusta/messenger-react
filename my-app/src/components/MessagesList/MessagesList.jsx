import React from 'react';
import classes from './MessagesList.module.css';
import Messages from './Messages/Messages';
import ResponsesMessages from './ResponsesMessages/ResponsesMessages';
import DefaultMessage from './DefaultMessage/DefaultMessage';

const MessagesList = () => {
    return (
      <div className={classes.messagesContainer}>
        <DefaultMessage />
        <ResponsesMessages />
        <Messages />
      </div>
    );
  }

  export default MessagesList;