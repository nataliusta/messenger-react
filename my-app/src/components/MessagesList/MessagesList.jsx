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
        <Messages messagesData={props.messagesData} addNewMessage={props.addNewMessage} />
      </div>
    );
  }

  export default MessagesList;