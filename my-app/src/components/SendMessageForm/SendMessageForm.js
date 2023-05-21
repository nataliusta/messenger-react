import React from 'react';
import classes from './SendMessageForm.module.css';

const SendMessageForm = () => {
    return (
      <div className={classes.SendMessage}>
        <button type="button">Send</button>
      </div>
    );
  }

  export default SendMessageForm;