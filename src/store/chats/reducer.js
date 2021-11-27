import {CLEAR_CHATS, CREATE_CHAT, REMOVE_CHAT} from "./actions";

const initialState = {
    chats: [],
}

const filterChatById = (targetId) => ({id}) => targetId !== id;

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CHAT: {
            console.log(action.payload)
            const { chat_name, id } = action.payload
            return {
                ...state,
                chats: [...state.chats, {id: id, name: chat_name}],
            }
        }
        case REMOVE_CHAT: {
            return {
                ...state,
                chats: state.chats.filter(filterChatById(action.payload)),
            }
        }
        case CLEAR_CHATS: {
            console.log('chats reducer: clear chats')
            return {
                ...state,
                chats: []
            }
        }
        default: {
            return state
        }
    }
}