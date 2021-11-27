import {CREATE_MESSAGE, REMOVE_CHAT, CREATE_CHAT, CLEAR_CHAT} from "./actions";

const initialState = {
    messages: [],
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE: {
            console.log('state messages:', state.messages)
            const newMessages = [...state.messages, action.payload]
            return {
                ...state,
                messages: newMessages,
            }
        }
        case CREATE_CHAT: {
            console.log(state)
            const newMessages = [...state.messages, {...action.payload}]
            return {
                ...state,
                messages: newMessages
            }
        }
        case CLEAR_CHAT: {
            return {
                ...state,
                messages: []
            }
        }
        case REMOVE_CHAT: {
            const chatId = action.payload
            console.log(chatId)
            console.log(state)
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
}