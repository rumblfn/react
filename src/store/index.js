import {createStore, combineReducers, applyMiddleware} from 'redux';
import {chatsReducer} from './chats';
import {chatReducer} from "./chat";
import { composeWithDevTools } from 'redux-devtools-extension';
import { profileReducer } from "./profile";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    chats: chatsReducer,
    chat: chatReducer,
    profile: profileReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)