export const CREATE_CHAT = 'CREAETE_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT'

export const createChat = (chat_name) => ({
    type: CREATE_CHAT,
    payload: chat_name,
})

export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: chatId,
})