import React, { Component } from 'react';
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

const Header = () => {
  return (
    <div className="Header">
      WhatsApp logo
    </div>
  );
}

const UsersList = () => {
  return (
    <div className="UsersList">
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </div>
  );
} 

const MessagesList = () => {
  return (
    <div className="MessagesList">
      <ul>
        <li>Message 1</li>
        <li>Message 2</li>
        <li>Message 3</li>
      </ul>
    </div>
  );
}

const SendMessageForm = () => {
  return (
    <div className="SendMessageForm">
      <button type="button">Send</button>
    </div>
  );
}
export default App;
