const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    dispatch(action) { // {type: 'ADD-NEW-MESSAGE'}
        if(action.type === ADD_NEW_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.messagesList.newMessageText
            };
            this._state.messagesList.messagesData.push(newMessage);
            this._state.messagesList.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesList.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export let addMessageCreator = () => ({ type: ADD_NEW_MESSAGE});
  
export let updateNewMessageTaxtCreator = (text) => 
({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

window.store = store;
export default store;