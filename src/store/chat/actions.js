export const CREATE_MESSAGE = 'CREAETE_MESSAGE';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const CREATE_CHAT = 'CREATE_CHAT'

export const createMessage = (chatId, textValue, authorValue, messageId) => ({
    type: CREATE_MESSAGE,
    payload: {chatId, textValue, authorValue, messageId},
})

export const removeChatMessages = (chat_Id) => ({
    type: REMOVE_CHAT,
    payload: chat_Id,
})

export const createChatMessages = (chatId) => ({
    type: CREATE_CHAT,
    payload: {chatId},
})