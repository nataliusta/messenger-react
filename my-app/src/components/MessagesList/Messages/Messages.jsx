import React from 'react';
import classes from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';

const Messages = (props) => {

  let messagesElements = props.messagesData.map( message => <MessagesItem id={message.id}  message={message.message} /> );

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    props.addNewMessage(text);
    newMessageElement.current.value = '';
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    console.log(text);
  }

    return (
      <div>
        <div className={classes.messages}>
          { messagesElements }
        </div>
        <div className={classes.SendMessage}>
          <textarea onChange={onMessageChange} ref={newMessageElement} 
                    value={props.newMessageText} />
          <button type="button" onClick={ addMessage }>Send</button>
        </div>
      </div>
    );
}

export default Messages;