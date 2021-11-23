import React, {useState} from "react";
import {chatConnect} from "../../connect/chat";
import {nanoid} from "nanoid";
// import {addBotMessage} from "../../MidelwareElements";
// import {useDispatch} from "react-redux";
import { ChatMessagesView } from "./presentationComponent";
import {auth, db} from "../../firebase";


export const ChatMessagesRender = ({createMessage, chat}) => {
    const [textValue, setTextValue] = useState('')
    // const authorValue = 'user'
    console.log(chat)
    const chatId = auth.currentUser.uid
    const messages = chat[chatId] || []
    console.log(chatId)
    // const dispatch = useDispatch()

    const addMessage = () => {
        if (textValue !== '') {
            const messageId = nanoid()
            const message = {
                messageId: messageId,
                textValue: textValue,
                authorValue: auth.currentUser.uid
            }
            createMessage(message)
            db.ref('messages').push(message)
            setTextValue('')
            // dispatch(addBotMessage(chatId))
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