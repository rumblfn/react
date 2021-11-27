import React, {useState} from "react";
import {chatConnect} from "../../connect/chat";
import {nanoid} from "nanoid";
// import {addBotMessage} from "../../MidelwareElements";
// import {useDispatch} from "react-redux";
import { ChatMessagesView } from "./presentationComponent";
import {auth, db} from "../../firebase";


export const ChatMessagesRender = ({createMessage, chat, chatId}) => {
    const [textValue, setTextValue] = useState('')
    // const authorValue = 'user'
    console.log('chat:', chat)
    console.log(chatId)
    const messages = []
    for (let el of chat) {
        console.log(el)
        if (el.chatId) {
            messages.push(el)
        }
    }
    // const dispatch = useDispatch()

    const addMessage = () => {
        if (textValue !== '') {
            const messageId = nanoid()
            const message = {
                messageId: messageId,
                textValue: textValue,
                authorValue: auth.currentUser.uid,
                chatId: chatId,
            }
            createMessage(message)
            db.ref('messages').push(message)
            setTextValue('')
            // dispatch(addBotMessage(chatId))
        }
    }
    console.log('messages:', messages)

    return (
        <ChatMessagesView
            messages={messages}
            textValue={textValue}
            setTextValue={setTextValue}
            addMessage={addMessage}
            chatId2={chatId}
        />
    )
}

export const ChatMessages = chatConnect(ChatMessagesRender)