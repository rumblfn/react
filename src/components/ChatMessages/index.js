import React, {useState} from "react";
import {chatConnect} from "../../connect/chat";
import {nanoid} from "nanoid";
import {addBotMessage} from "../../MidelwareElements";
import {useDispatch} from "react-redux";
import { ChatMessagesView } from "./presentationComponent";


export const ChatMessagesRender = ({chatId, createMessage, chat}) => {
    const [textValue, setTextValue] = useState('')
    const authorValue = 'user'
    const messages = chat[chatId] || []
    const dispatch = useDispatch()

    const addMessage = () => {
        if (textValue !== '') {
            const messageId = nanoid()
            createMessage(chatId, textValue, authorValue, messageId)
            setTextValue('')
            dispatch(addBotMessage(chatId))
        }
    }

    return (
        <ChatMessagesView
            messages={messages}
            textValue={textValue}
            setTextValue={setTextValue}
            addMessage={addMessage}
        />
    )
}

export const ChatMessages = chatConnect(ChatMessagesRender)