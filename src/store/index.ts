import { createStore, } from 'redux';
import { INITIAL_STATE } from './initialState';

function storeApp(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'USER_ONLINE':
            return { ...state, user: action.user, token: action.token}
        case 'USER_OFFLINE':
            return { ...state, user: {}, token: '' }
        case 'USER_UPDATE': 
            return { ...state, user: action.user }

        case 'ADD_ITEMS':
            return { ...state, items: [...state.items, action.items] }
        case 'ALTER_ITEMS':
            return { ...state, items: action.items }
        default:
            return state;
     }
}

const store = createStore(storeApp);

export default store;