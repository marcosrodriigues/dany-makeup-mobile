import { createStore, } from 'redux';
import { INITIAL_STATE } from './initialState';
import { onSignIn, onSignOut } from '../services/auth';

function storeApp(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'USER_ONLINE':
            onSignIn(action.token);
            return { ...state, user: action.user, token: action.token}
        case 'USER_OFFLINE':
            onSignOut()
            return { ...state, user: {}, token: '' }
        case 'USER_UPDATE': 
            return { ...state, user: action.user }

        case 'ADD_ITEMS':
            return { ...state, items: [...state.items, action.items] }
        case 'ALTER_ITEMS':
            return { ...state, items: action.items }
        case 'CLEAR_ITEMS':
            return { ...state, items: [] }
        default:
            return state;
     }
}

const store = createStore(storeApp);

export default store;