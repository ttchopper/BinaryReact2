import { combineReducers } from 'redux';
import users from './users';

export const rootReducer = combineReducers({
    users: users
});
export default rootReducer;