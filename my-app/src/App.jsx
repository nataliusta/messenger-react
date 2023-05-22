import React from 'react';
import Header from './components/Header/Header';
import UsersList from './components/UsersList/UsersList';
import MessagesList from './components/MessagesList/MessagesList';
import SendMessageForm from './components/SendMessageForm/SendMessageForm';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
        <Header />
        <UsersList />
        <MessagesList />
        <SendMessageForm />
    </div>
  );
}

export default App;
