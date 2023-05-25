import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addNewMessage, updateNewMessageText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App state={state} addNewMessage={addNewMessage} updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>
  );
};

reportWebVitals();