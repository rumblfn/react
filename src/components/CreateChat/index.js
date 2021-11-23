import React from 'react';
import {chatsConnect} from "../../connect/chats";
import { useState } from 'react';
import {nanoid} from "nanoid";
import { CreateChatFormView } from "./presentationComponent";
import {auth, db} from '../../firebase/index'
import {createChatMessages} from "../../store/chat";
import {useDispatch} from "react-redux";


export const CreateChatFormRender = ({addChat, createChatMessages}) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const createChat = () => {
        if (value !== '') {
            const chatId = nanoid()
            const chat = {
                id: chatId,
                chat_name: value,
                userId: auth.currentUser.uid
            }
            dispatch(createChatMessages(chat))
            db.ref('chats').push(chat)
            addChat(chat)
            setValue('')
        }
    }
    return (
        <CreateChatFormView
            value={value}
            setValue={setValue}
            createChat={createChat}
        />
    );
};

export const CreateChatForm = chatsConnect(CreateChatFormRender);