import {CREATE_MESSAGE, REMOVE_CHAT, CREATE_CHAT, CLEAR_CHAT} from "./actions";

const initialState = {
    messages: {},
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE: {
            return {
                ...state,
                messages: action.payload
            }
        }
        case CREATE_CHAT: {
            console.log(state)
            const {id} = action.payload
            const newMessages = {...state.messages}
            newMessages[id] = []
            return {
                ...state,
                messages: {...newMessages}
            }
        }
        case CLEAR_CHAT: {
            return {
                ...state,
                messages: {}
            }
        }
        case REMOVE_CHAT: {
            const chatId = action.payload
            const newMessages = {...state.messages}
            delete newMessages[chatId]
            return {
                ...state,
                messages: newMessages,
            }
        }
        default: {
            return state
        }
    }
}