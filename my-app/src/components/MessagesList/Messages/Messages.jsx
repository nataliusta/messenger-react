import React from 'react';
import classes from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';
import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/messages-reducer';

const Messages = (props) => {

  let state = props.store.getState().messagesList;

  let messagesElements = state.messagesData.map( message => <MessagesItem id={message.id}  message={message.message} /> );

  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageTextCreator(body));
  };

    return (
      <div>
        <div className={classes.messages}>
        <div>{ messagesElements }</div>
        </div>
        <div className={classes.sendMessage}>
          <textarea placeholder='Enter your message'
                    onChange={onNewMessageChange}
                    value={newMessageText} />
          <button type="button" onClick={ onSendMessageClick }>Send</button>
        </div>
      </div>
    );
}

export default Messages;