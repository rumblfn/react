import {CREATE_MESSAGE, REMOVE_CHAT, CREATE_CHAT} from "./actions";

const initialState = {
    messages: {},
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE: {
            const {chatId, textValue, authorValue, messageId} = action.payload
            const newMessages = {...state.messages}
            newMessages[chatId] = [...newMessages[chatId], {
                messageId: messageId,
                textValue: textValue,
                authorValue: authorValue,
            }]
            return {
                ...state,
                messages: newMessages
            }
        }
        case CREATE_CHAT: {
            const {chatId} = action.payload
            const newMessages = {...state.messages}
            newMessages[chatId] = []
            return {
                ...state,
                messages: {...newMessages}
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