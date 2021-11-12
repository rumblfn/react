export const CREATE_CHAT = 'CREATE_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const SET_CHATS = 'SET_CHATS';


export const createChat = (chat) => ({
    type: CREATE_CHAT,
    payload: chat,
})

export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: chatId,
})

export const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats,
})