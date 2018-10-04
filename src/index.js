import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import setUserIdReducer from './reducers/setUserId-reducer';
import setCoordsReducer from './reducers/setCoords-reducer';
import setDisplayToggleReducer from './reducers/setDisplayToggle-reducer';

const allReducers = combineReducers({
  userId: setUserIdReducer,
  coords: setCoordsReducer,
  displayToggle: setDisplayToggleReducer
});

const store = createStore(
  allReducers,
  {
    userId: 'loggedOut',
    coords: {
      lat: 35.2271,
      lon: -80.8431
    },
    displayToggle: 'results'
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
