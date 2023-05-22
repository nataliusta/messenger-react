import React from 'react';
import classes from './ResponsesMessages.module.css';

const ResponsesMessages = () => {
    return (
        <div className={classes.responsesMessages}>
          <ul className={classes.responsesList}>
              <li className={classes.responsesItem}>Hey!!</li>
              <li className={classes.responsesItem}>??</li>
              <li className={classes.responsesItem}>Where are you?</li>
          </ul>
        </div>
    );
}

export default ResponsesMessages;