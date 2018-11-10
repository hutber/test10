import React from 'react';
import ReactDOM from 'react-dom';
import Index from './containers/Home/index';

import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configStore from './configureStore';
import rootReducer from './reducers';

const store = configStore();

const render = () => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Index />
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
		store.replaceReducer(rootReducer);
	});
}
