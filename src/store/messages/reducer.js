import {CREATE_MESSAGE, REMOVE_MESSAGES_IN_CHAT} from './actions';

const initialState = {
    messages: {},
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE: {
            const newMessages = {...state.messages}

            newMessages[action.payload.chatId] = [...(newMessages[action.payload.chatId] || []), action.payload.message]
            return {
                messages: newMessages
            }
        }
        case REMOVE_MESSAGES_IN_CHAT: {
            const newMessages = {...state.messages}
            delete newMessages[action.payload]
            return {
                messages: newMessages
            }
        }
        default: {
            return state;
        }
    }
}