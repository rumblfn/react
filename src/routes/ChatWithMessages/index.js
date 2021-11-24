import React from 'react';
import {ChatMessages} from '../../components/ChatMessages'
import {Navigate, Route, useParams} from "react-router-dom";
import {chatConnect} from "../../connect/chat";
import {CreateChatForm} from "../../components/CreateChat";
import {ChatList} from "../../components/ChatList";

const divStyle3 = {
    display: "flex",
    width: '100%',
    height: '100%',
}

const divStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    minWidth: '190px',
    marginRight: 30,
    height: '100%',
}

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    minWidth: '190px',
    height: '100%',
    position: 'fixed',
}

export const ChatRender = ({chat}) => {
    const {chatId} = useParams();
    console.log(chatId)
    console.log('chat:', chat)
    return (
        <div style={divStyle3}>
            <div style={divStyle2}>
                <div style={divStyle}>
                    <CreateChatForm/>
                    <ChatList/>
                </div>
            </div>
            <ChatMessages chatId={chatId}/>
        </div>
    )
    // if (chat.hasOwnProperty(chatId)) {
    //     return (
    //         <div style={divStyle3}>
    //             <div style={divStyle2}>
    //                 <div style={divStyle}>
    //                     <CreateChatForm/>
    //                     <ChatList/>
    //                 </div>
    //             </div>
    //             <ChatMessages chatId={chatId}/>
    //         </div>
    //     )
    // } else {
    //     return <Navigate to='/home'/>
    // }
}

export const ChatWithMessages = chatConnect(ChatRender)