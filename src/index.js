import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';

import DefaultLayout from './layout/DefaultLayout';
import LoginLayout from './layout/LoginLayout';

import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';

import history from './util/history';

import myReducer from './redux/reducers';
import mySaga from './redux/sagas';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const sagaMiddleware = createSagaMiddleware();
const myStore = createStore(myReducer, applyMiddleware(...[sagaMiddleware, logger]));
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Router history={history}>
        <Switch>
          <LoginLayout exact path="/login" component={Login} />
          <DefaultLayout exact path="/" component={TodoList} />
          <DefaultLayout exact path="/todo-list" component={TodoList} />
          <DefaultLayout exact path="/products" component={Products} />
          <DefaultLayout exact path="/contact" component={Contact} />
          <DefaultLayout exact path="/product/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
