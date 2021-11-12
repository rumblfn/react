import {connect} from "react-redux";
import {CREATE_MESSAGE, getMessages, removeMessagesInChat} from "../../store/collections";


const mapStateToProps = (state) => ({
  messages: getMessages(state),
})

const mapDispatchToProps = (dispatch) => ({
  addMessages(message, chatId) {
    return dispatch(CREATE_MESSAGE(message, chatId));
  },
  removeMessages(chatId) {
    return dispatch(removeMessagesInChat(chatId));
  }
})


export const messagesConnect = connect(mapStateToProps, mapDispatchToProps);