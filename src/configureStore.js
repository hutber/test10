/* eslint-disable */
import { persistStore, persistReducer } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
const persistConfig = {
	key: 'root',
	storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	let middleware;
  //Setup production exclusive of certain middleware
  if (process.env.NODE_ENV !== 'production') {
    middleware = [createLogger()];
  }

  const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(...middleware)));

	let persistor = persistStore(store);
	return { store, persistor }
};
