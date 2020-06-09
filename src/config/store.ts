import { createStore } from 'redux';

const INITIAL_STATE = {
    token: '',
    user: { }
}
function userOnline(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'USER_ONLINE':
            return { ...state, user: action.user, token: action.token}
        case 'USER_OFFLINE':
            return { ...state, user: {}, token: '' }
        default:
            return state;
     }
}

const store = createStore(userOnline);

export default store;