import counterReducer from './counter';
import loggedReducer from './isLogged';
import Candidatreducer from './candidatereducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer,
    Candidateinfo:Candidatreducer
})
export default allReducers;