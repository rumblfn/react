export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const CREATE_CHAT = 'CREATE_CHAT';
export const CLEAR_CHAT = 'CLEAR_CHAT';

export const createMessage = (chat) => ({
    type: CREATE_MESSAGE,
    payload: chat,
})

export const removeChatMessages = (chat_Id) => ({
    type: REMOVE_CHAT,
    payload: chat_Id,
})

export const createChatMessages = (chat) => ({
    type: CREATE_CHAT,
    payload: chat,
})

export const clearChatMessages = () => ({
    type: CLEAR_CHAT,
})