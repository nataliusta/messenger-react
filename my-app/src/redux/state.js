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
            newMessageText: "Wooow"
        },
        usersList: {
            usersData: [
                {id: 1, name: "User 1"},
                {id: 2, name: "User 2"},
                {id: 3, name: "User 3"}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    addNewMessage() {
        let newMessage = {
            id: 4,
            message: this._state.messagesList.newMessageText
        };
        this._state.messagesList.messagesData.push(newMessage);
        this._state.messagesList.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.messagesList.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

window.store = store;
export default store;