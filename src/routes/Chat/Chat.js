import React from 'react';
import {Home} from '../Home/Home'
import {ChatMessages} from '../../components/ChatMessages'
import {useParams} from "react-router-dom";
import {chatConnect} from "../../connect/chat";
import {PageNotFoundRoute} from "../PageNotFound/PageNotFound";

const divStyle = {
    display: "flex",
    width: '100%',
    height: '100%',
}

export const ChatRender = ({chat}) => {
    const {chatId} = useParams();
    let showChatPage = false
    if (chat.hasOwnProperty(chatId)) {
        showChatPage = true
    }

    if (showChatPage) {
        return (
            <div style={divStyle}>
                <Home/>
                <ChatMessages chatId={chatId}/>
            </div>
        )
    }
    return (
        <PageNotFoundRoute/>
    )
}

export const Chat = chatConnect(ChatRender)