 
import { combineReducers } from 'redux';
import {userErrorAuth} from './authentification'
import {usersReducer} from './users'



const allReducers = combineReducers({
    errorAuth:userErrorAuth,
    users:usersReducer

});

export default allReducers;