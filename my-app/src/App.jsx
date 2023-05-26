import React from 'react';
import Header from './components/Header/Header';
import UsersList from './components/UsersList/UsersList';
import MessagesList from './components/MessagesList/MessagesList';
import './App.css';

const App = (props) => {

  return (
    <div className="app-wrapper">
        <Header />
        <UsersList usersData={props.state.usersList.usersData} />
        <MessagesList responsesData={props.state.messagesList.responsesData} 
                      messagesData={props.state.messagesList.messagesData} 
                      dispatch={props.dispatch} 
                      newMessageText={props.state.messagesList.newMessageText} />
    </div>
  );
}

export default App;
