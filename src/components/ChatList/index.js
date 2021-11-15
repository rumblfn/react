import React from 'react';
import {chatsConnect} from "../../connect/chats";
import { ChatListView } from "./presentationComponent";


export const ChatListRender = ({chats, removeChat, removeChatMessages}) => {
    let chatEmpty = ''
    if (chats.chats.length === 0) {
        chatEmpty = "Chat's list is empty"
    }
    return (
        <ChatListView
            chatEmpty={chatEmpty}
            chats={chats}
            removeChat={removeChat}
            removeChatMessages={removeChatMessages}
        />
    );
};

export const ChatList = chatsConnect(ChatListRender)