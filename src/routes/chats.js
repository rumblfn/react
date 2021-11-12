import CheckboxListSecondary from "../components/chatsList.js";
import MessageList from "../components/MessageList.js";
import { useSelector, useDispatch } from 'react-redux';
import { getChatList } from '../store/chats/selector';
import { createChat, removeChat, setChats } from '../store/chats/actions';
import { REMOVE_MESSAGES_IN_CHAT } from '../store/messages/actions';
import { nanoid } from 'nanoid';
import { useCallback, useEffect } from 'react';

// const CHATS = [{id: 1, name: 'user1'}, {id: 2, name: 'user2'}, {id: 3, name: 'user3'},]

export const Chats = () => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const onCreate = useCallback(() => {
        dispatch(createChat({
            id: nanoid(),
            name: 'chat_name'
        }))
    }, [])

    const onDelete = (chatId) => {
        dispatch(removeChat(chatId))
        dispatch(REMOVE_MESSAGES_IN_CHAT(chatId))
    }

    // useEffect(() => {
    //     dispatch(setChats(CHATS))
    // }, [])

    return (
        <CheckboxListSecondary onCreate={onCreate} onDelete={onDelete} list={chats}/>
    )
}