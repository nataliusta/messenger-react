import React from 'react';
import classes from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';
import { addMessageCreator, updateNewMessageTaxtCreator } from '../../../redux/state';

const Messages = (props) => {

  let messagesElements = props.messagesData.map( message => <MessagesItem id={message.id}  message={message.message} /> );

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = (updateNewMessageTaxtCreator(text));
    props.dispatch(action);
  };

    return (
      <div>
        <div className={classes.messages}>
        <div>{ messagesElements }</div>
        </div>
        <div className={classes.sendMessage}>
          <textarea onChange={onMessageChange} ref={newMessageElement} 
                    value={props.newMessageText} />
          <button type="button" onClick={ addMessage }>Send</button>
        </div>
      </div>
    );
}

export default Messages;