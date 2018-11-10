/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

export default () => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	let middleware;
  //Setup production exclusive of certain middleware
  if (process.env.NODE_ENV !== 'production') {
    middleware = [createLogger()];
  }

  const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middleware)));

  return store;
};
