import { combineReducers } from 'redux';
import popUpReducer from '../reducers/popUpReducer';
import sessionReduser from './sessionReduser';

const rootReducer = combineReducers({
  popUpReducer,
  session: sessionReduser,
});

export default rootReducer;
