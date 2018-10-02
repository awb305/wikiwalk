import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import setUserIdReducer from './reducers/setUserId-reducer';

/* import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';
 */
const reducer = () => {
  return {
    userId: 'hey',
    page: 'home',
    lon: -80.8431,
    lat: 35.2271
  }
}

/* const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
}); */

const allReducers = combineReducers({
  userId: setUserIdReducer
});

const store = createStore(
  allReducers,
  {
    userId: 'dumbo'
  },
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
registerServiceWorker();
