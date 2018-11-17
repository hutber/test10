import React from 'react';
import ReactDOM from 'react-dom';
import Index from './containers/Home/index';
import { PersistGate } from 'redux-persist/integration/react'

import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configStore from './configureStore';
import rootReducer from './reducers';

const storePersistor = configStore();

const render = () => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={storePersistor.store}>
				<PersistGate loading={null} persistor={storePersistor.persistor}>
					<Index />
				</PersistGate>
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	);
};

render();

// Hot reloading
if (module.hot) {
	// Reload components
	module.hot.accept('./index', () => {
		render();
	});

	// Reload reducers
	module.hot.accept('./reducers', () => {
		storePersistor.store.replaceReducer(rootReducer);
	});
}
