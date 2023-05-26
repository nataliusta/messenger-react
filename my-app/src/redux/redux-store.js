import { combineReducers, createStore } from 'redux';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    messagesList: messagesReducer,
    usersList: usersReducer
});

let store = createStore(reducers);

export default store;