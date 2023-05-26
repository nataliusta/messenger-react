const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
    
    if(action.type === ADD_NEW_MESSAGE) {
        let newMessage = {
            id: 4,
            message: state.newMessageText
        };
        state.messagesData.push(newMessage);
        state.newMessageText = '';
        
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
    }
    return state;
};

export let addMessageCreator = () => ({ type: ADD_NEW_MESSAGE});
  
export let updateNewMessageTextCreator = (text) => 
({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default messagesReducer;