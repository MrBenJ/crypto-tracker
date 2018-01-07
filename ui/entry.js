import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';

import App from 'js/components/App';

import configureStore from 'js/store/configureStore';
import rootCoinSaga from 'js/sagas/coinSaga';
import rootPriceSaga from 'js/sagas/priceSaga';

// import 'bootstrap/dist/css/bootstrap.min.css';

const { store, sagaMiddleware } = configureStore();

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);

sagaMiddleware.run(rootCoinSaga);
sagaMiddleware.run(rootPriceSaga);
