const compareById = (targetId) => (item) => item.id === targetId;

export const getChats = (state) => state.chats;
export const getChatList = (state) => getChats(state).chats;
export const hasChatById = (chatId) => (state) => getChatList(state).findIndex(compareById(chatId)) !== -1;