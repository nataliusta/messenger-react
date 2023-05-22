import React from 'react';
import classes from './MessagesList.module.css';
import Messages from './Messages/Messages';
import ResponsesMessages from './ResponsesMessages/ResponsesMessages';

const MessagesList = () => {
    return (
      <div className={classes.messagesContainer}>
        <div className={classes.defaultBlock}>
          <p className={classes.defaultMessage}>
            Messages and callsare end-to-end encrypted. 
            No one outside of this chat, not even WhatsApp, can read or listen to them. 
            Tap to learn more
          </p>
        </div>
        <ResponsesMessages />
        <Messages />
      </div>
    );
  }

  export default MessagesList;