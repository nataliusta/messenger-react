import React from 'react';
import Header from './components/Header/Header';
import UsersList from './components/UsersList/UsersList';
import MessagesList from './components/MessagesList/MessagesList';
import SendMessageForm from './components/SendMessageForm/SendMessageForm';
import './App.css';

const App = (props) => {

  return (
    <div className="app-wrapper">
        <Header />
        <UsersList />
        <MessagesList responsesData={props.responsesData} />
        <SendMessageForm />
    </div>
  );
}

export default App;
