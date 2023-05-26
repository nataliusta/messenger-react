const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
    if(action.type === ADD_NEW_MESSAGE) {
        let newMessage = {
            id: 4,
            message: this._state.messagesList.newMessageText
        };
        state.messagesList.messagesData.push(newMessage);
        state.messagesList.newMessageText = '';
        
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.messagesList.newMessageText = action.newText;
    }
    return state;
}

export default messagesReducer;