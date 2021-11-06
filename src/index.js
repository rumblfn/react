import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import { StrictMode } from "react"
import { Provider } from 'react-redux'
import {createStore} from 'redux'

const defaultState = {profileName: 'profile name', checkBoxState: false}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // case 'ADD_MESSAGE':
    //   return {...state, action.userName: [...state.userName, action.message] }
    case 'ADD_USER':
      let userName = action.userName
      let newState = state
      newState[userName] = []
      return {...newState}
    case 'TOGGLE_CHECK_BOX':
      state['checkBoxState'] = !state['checkBoxState']
      console.log(state['checkBoxState'])
      return state
    default:
      console.log(action.type)
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);
