import React from 'react';
import {chatsConnect} from "../../connect/chats";
import { useState } from 'react';
import {nanoid} from "nanoid";
import { CreateChatFormView } from "./presentationComponent";


export const CreateChatFormRender = ({addChat, createChatMessages}) => {
    const [value, setValue] = useState('')

    const createChat = () => {
        if (value !== '') {
            const chatId = nanoid()
            const chat = {
                id: chatId,
                chat_name: value,
            }

            addChat(chat)
            createChatMessages(chatId)
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