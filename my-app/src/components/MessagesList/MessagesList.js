import React from 'react';
import classes from './MessagesList.module.css';

const MessagesList = () => {
    return (
      <div className={classes.messages}>
        <ul>
          <li>Message 1</li>
          <li>Message 2</li>
          <li>Message 3</li>
        </ul>
      </div>
    );
  }

  export default MessagesList;