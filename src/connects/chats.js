import {connect} from "react-redux";
import {getChats, createChat} from "../../store/cards";


const mapStateToProps = (state, {collectionId}) => ({
  chats: getChats(state, collectionId),
})

const mapDispatchToProps = (dispatch) => ({
  addChats: (chat) => dispatch(createChat(chat)),
})

export const chatsConnect = connect(mapStateToProps, mapDispatchToProps);