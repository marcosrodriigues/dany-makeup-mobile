import { INITIAL_STATE } from './initialState';
import * as types from './actions';

export const loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_ONLINE':
            return { ...state, user: action.user, token: action.token}
        case 'USER_OFFLINE':
            return { ...state, user: {}, token: '' }
        default:
            return state;
     }
}