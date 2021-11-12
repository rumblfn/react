export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const REMOVE_MESSAGES_IN_CHAT = 'REMOVE_MESSAGES_IN_CHAT'

export const createMessage = (message, chatId) => ({
    type: CREATE_MESSAGE,
    payload: {
        message,
        chatId,
    },
})

export const removeMessagesInChat = (chatId) => ({
    type: REMOVE_MESSAGES_IN_CHAT,
    payload: chatId,
})