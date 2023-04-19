import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, How are you?', likeCount: '12'},
                {id: 2, message: 'It is my first post', likeCount: '13'},
                {id: 3, message: 'It is my first post', likeCount: '13'}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
/*
        usersPage: {
            users: [
                {
                    id: 1,
                    followed: false,
                    fullName: 'Ansa',
                    status: 'I have a LEXUS RX300',
                    location: {city: 'Egyndikol', country: 'Kazakhstan'}
                },
                {
                    id: 2,
                    followed: true,
                    fullName: 'Bahon',
                    status: 'I have a LADA 9',
                    location: {city: 'Kalin', country: 'Japan'}
                },
                {
                    id: 3,
                    followed: false,
                    fullName: 'Mustik',
                    status: 'I have a Toyota 200',
                    location: {city: 'Zhuldyz', country: 'Kazakhstan'}
                }
            ]
        }
*/
    },

    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;




