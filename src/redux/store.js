import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

export const store = createStore(
  rootReducer,

  {},
  composeWithDevTools(enhancer),
);
export default store;
