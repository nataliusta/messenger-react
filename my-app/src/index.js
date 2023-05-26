import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App state={state} 
           addNewMessage={store.addNewMessage.bind(store)} 
           updateNewMessageText={store.updateNewMessageText.bind(store)} />
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

/*ReactDOM.render(<App responsesData={responsesData} />, document.getElementById('root'));*/

reportWebVitals();
