import {createStore, combineReducers} from 'redux';
import {chatsReducer} from './chats';
import {chatReducer} from "./chat";

const rootReducer = combineReducers({
    chats: chatsReducer,
    chat: chatReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)