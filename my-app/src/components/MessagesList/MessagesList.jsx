import React from 'react';
import classes from './MessagesList.module.css';
import Messages from './Messages/Messages';
import ResponsesMessages from './ResponsesMessages/ResponsesMessages';
import DefaultMessage from './DefaultMessage/DefaultMessage';

const MessagesList = (props) => {

    return (
      <div className={classes.messagesContainer}>
        <DefaultMessage />
        <ResponsesMessages responsesData={props.responsesData}/>
        <Messages store={props.store}
                  newMessageText={props.newMessageText} 
                  dispatch={props.dispatch} />
      </div>
    );
  }

  export default MessagesList;