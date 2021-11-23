import {connect} from "react-redux";
import {getChatMessages, createMessage, removeChatMessages, createChatMessages} from "../../store/chat";


const mapStateToProps = (state) => ({
    chat: getChatMessages(state),
})

const mapDispatchToProps = (dispatch) => ({
    createChatMessages(chat) {
        return dispatch(createChatMessages(chat));
    },
    removeChatMessages(chatId) {
        return dispatch(removeChatMessages(chatId));
    },
    createMessage(chat) {
        return dispatch(createMessage(chat))
    }
})


export const chatConnect = connect(mapStateToProps, mapDispatchToProps);