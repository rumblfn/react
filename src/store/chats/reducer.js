import { CREATE_CHAT, REMOVE_CHAT} from "./actions";

const initialState = {
    chats: [],
}

const filterChatById = (targetId) => ({id}) => targetId !== id;

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CHAT: {
            const chatId = action.payload.id
            return {
                ...state,
                chats: [...state.chats, {id: chatId, name: action.payload.chat_name}],
            }
        }
        case REMOVE_CHAT: {
            return {
                ...state,
                chats: state.chats.filter(filterChatById(action.payload)),
            }
        }
        default: {
            return state
        }
    }
}