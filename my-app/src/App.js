import React, { Component } from 'react';
import Header from './components/Header/Header';
import UsersList from './components/UsersList/UsersList';
import MessagesList from './components/MessagesList/MessagesList';
import SendMessageForm from './components/SendMessageForm/SendMessageForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ul>
        <li><Header /></li>
        <li><UsersList /></li>
        <li><MessagesList /></li>
        <li><SendMessageForm /></li>
      </ul>
    </div>
  );
}

export default App;
