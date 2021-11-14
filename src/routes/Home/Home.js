import React from 'react';
import {CreateChatForm} from "../../components/CreateChat";
import {ChatList} from "../../components/ChatList";

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    minWidth: '190px',
    height: '100%',
    position: 'fixed',
}

const divStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    minWidth: '190px',
    marginRight: 30,
    height: '100%',
}

export const Home = () => {

    return (
        <div style={divStyle2}>
            <div style={divStyle}>
                <CreateChatForm/>
                <ChatList/>
            </div>
        </div>
    )
}