import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";

let store = {
    _state: {
        messagesList: {
            responsesData: [
                {id: 1, message: "Hey,I'm good and you?"},
                {id: 2, message: "Any plans for weekend?"},
                {id: 3, message: ":)"}
            ],
            messagesData: [
                {id: 1, message: "Hi,how are you?"},
                {id: 2, message: "How are you doing?"},
                {id: 3, message: "???"}
            ],
            newMessageText: ''
        },
        usersList: {
            usersData: [
                {id: 1, name: "User 1"},
                {id: 2, name: "User 2"},
                {id: 3, name: "User 3"}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { 
        this._state.messagesList =  messagesReducer(this._state.messagesList, action);
        this._state.usersList =  usersReducer(this._state.usersList, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;