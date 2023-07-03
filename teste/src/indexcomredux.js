import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import App from './App';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);