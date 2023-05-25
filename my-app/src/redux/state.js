import { rerenderEntireTree } from '../index';

let state = {
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
        newMessageText: "Wooow"
    },
    usersList: {
        usersData: [
            {id: 1, name: "User 1"},
            {id: 2, name: "User 2"},
            {id: 3, name: "User 3"}
        ]
    }
};

export let addNewMessage = () => {
    let newMessage = {
        id: 4,
        message: state.messagesList.newMessageText
    };
    state.messagesList.messagesData.push(newMessage);
    state.messagesList.newMessageText = '';
    rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
    state.messagesList.newMessageText = newText;
    rerenderEntireTree(state);
};

export default state;