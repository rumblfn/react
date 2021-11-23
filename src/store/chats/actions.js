export const CREATE_CHAT = 'CREAETE_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT'
export const CLEAR_CHATS = 'CLEAR_CHATS'

export const createChat = (chat) => ({
    type: CREATE_CHAT,
    payload: chat,
})

export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: chatId,
})

export const clearChats = () => ({
    type: CLEAR_CHATS,
})