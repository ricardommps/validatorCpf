// Babel polyfill
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'

import store from './store';
import history from './history'
import * as serviceWorker from './serviceWorker';
import routes from './routes';

// Render do App
const basename = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/';

const Root = (
	<Provider store={store}>
		<div>
			<Router history={history}>
				<div>
					<Switch>
						{routes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								component={route.component}
							/>
						))}
					</Switch>
				</div>
			</Router>
		</div>
	</Provider>
);
ReactDOM.render(Root, document.getElementById('root'));

// Config service worker
serviceWorker.unregister();
