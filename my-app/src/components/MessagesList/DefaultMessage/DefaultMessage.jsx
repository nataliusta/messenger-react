import React from 'react';
import classes from './DefaultMessage.module.css';

const DefaultMessage = () => {
    return (
        <div className={classes.defaultBlock}>
          <p className={classes.defaultMessage}>
            Messages and callsare end-to-end encrypted. 
            No one outside of this chat, not even WhatsApp, can read or listen to them. 
            Tap to learn more
          </p>
        </div>
    );
}

export default DefaultMessage;