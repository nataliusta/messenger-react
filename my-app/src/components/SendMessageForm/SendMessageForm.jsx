import React from 'react';
import classes from './SendMessageForm.module.css';

const SendMessageForm = () => {
    return (
      <div className={classes.SendMessage}>
        <textarea>Write something</textarea>
        <button type="button">Send</button>
      </div>
    );
  }

  export default SendMessageForm;