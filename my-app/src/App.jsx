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
                      newMessageText={props.state.messagesList.newMessageText}
                      dispatch={props.dispatch}
                      store={props.store} />
    </div>
  );
}

export default App;
