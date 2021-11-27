export const getChat = (state) => state.chat || [];
export const getChatMessages = (state) => getChat(state).messages;