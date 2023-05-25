import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addNewMessage, updateNewMessageText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App state={state} addNewMessage={addNewMessage} updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>
  );
};

rerenderEntireTree(state);

/*ReactDOM.render(<App responsesData={responsesData} />, document.getElementById('root'));*/

reportWebVitals();
