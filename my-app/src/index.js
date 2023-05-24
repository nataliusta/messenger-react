import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addNewMessage } from './redux/state';


export let rerenderEntireTree = () => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addNewMessage={addNewMessage} />
    </React.StrictMode>
  );
};

rerenderEntireTree();

/*ReactDOM.render(<App responsesData={responsesData} />, document.getElementById('root'));*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
