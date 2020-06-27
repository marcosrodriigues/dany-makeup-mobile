import { createStore } from 'redux';
import { INITIAL_STATE } from './initialState';


function userOnline(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'USER_ONLINE':
            return { ...state, user: action.user, token: action.token}
        case 'USER_OFFLINE':
            return { ...state, user: {}, token: '' }
        case 'USER_UPDATE': 
            return { ...state, user: action.user }
        default:
            return state;
     }
}

const store = createStore(userOnline);

export default store;