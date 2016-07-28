import { combineReducers } from 'redux';
import users from './reducer_new_user';

export const rootReducer = combineReducers({
    users: users
});
export default rootReducer;