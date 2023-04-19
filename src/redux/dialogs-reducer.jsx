const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ansagan'},
        {id: 2, name: 'Bahon'},
        {id: 3, name: 'Mustic'},
        {id: 4, name: 'Sonic'},
        {id: 5, name: 'Nurai'}
    ],
    messages: [
        {id: 1, message: 'Salem!'},
        {id: 2, message: 'How is your Lessons?!'},
        {id: 3, message: 'Everything good!'},
        {id: 4, message: 'Everything good!'},
        {id: 5, message: 'Everything good!'}
    ],
    newMessageBody: ''
}


const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;