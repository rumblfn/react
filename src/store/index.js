import {createStore, combineReducers, applyMiddleware} from 'redux';
import {chatsReducer} from './chats';
import {chatReducer} from "./chat";
import { composeWithDevTools } from 'redux-devtools-extension';
import { profileReducer } from "./profile";
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    chat: chatReducer,
    profile: profileReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export const persistedStore = persistStore(store)