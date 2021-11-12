import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { StrictMode } from "react";
import { Provider } from 'react-redux';
import { store } from './store/index';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
