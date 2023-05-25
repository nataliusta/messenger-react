import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addNewMessage, updateNewMessageText, subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App state={state} addNewMessage={addNewMessage} updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

/*ReactDOM.render(<App responsesData={responsesData} />, document.getElementById('root'));*/

reportWebVitals();
