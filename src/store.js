import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

const middleware = [thunk];
const initialState = {};

const store = createStore(rootReducer, initialState ,composeWithDevTools(applyMiddleware(...middleware)));
//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
//Enable the second one to use the redux extension

export default store;