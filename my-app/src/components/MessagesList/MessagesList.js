import React from 'react';
import classes from './MessagesList.module.css';

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
        <div className={classes.responses}>
          <ul className={classes.responsesList}>
              <li className={classes.responsesItem}>Hey!!</li>
              <li className={classes.responsesItem}>??</li>
              <li className={classes.responsesItem}>Where are you?</li>
          </ul>
        </div>
        <div className={classes.messages}>
          <ul className={classes.messagesList}>
            <li className={classes.messagesItem}>Hello! How are you doing?</li>
            <li className={classes.messagesItem}>Hope,you're OK?</li>
            <li className={classes.messagesItem}>Still there?!</li>
          </ul>
        </div>
      </div>
    );
  }

  export default MessagesList;