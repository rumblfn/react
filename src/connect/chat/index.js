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
    createMessage(chatId, textValue, authorValue, messageId) {
        return dispatch(createMessage(chatId, textValue, authorValue, messageId))
    }
})


export const chatConnect = connect(mapStateToProps, mapDispatchToProps);