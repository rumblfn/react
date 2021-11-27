import {connect} from "react-redux";
import {getChats, createChat, removeChat, clearChats} from "../../store/chats";
import {removeChatMessages, createChatMessages} from "../../store/chat";


const mapStateToProps = (state) => ({
    chats: getChats(state),
})

const mapDispatchToProps = (dispatch) => ({
    addChat(chat) {
        return dispatch(createChat(chat));
    },
    removeChat(chatId) {
        return dispatch(removeChat(chatId));
    },
    createChatMessages(chatId) {
        return dispatch(createChatMessages(chatId));
    },
    removeChatMessages(chat_Id) {
        return dispatch(removeChatMessages(chat_Id));
    },
    clearChats() {
        return dispatch(clearChats())
    }
})


export const chatsConnect = connect(mapStateToProps, mapDispatchToProps);