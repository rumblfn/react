import React from 'react';
import Link from '@mui/material/Link';
import {Link as LinkReact} from 'react-router-dom'
import {chatsConnect} from "../../connect/chats";
import {styled} from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Paper2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxSizing: 'border-box',
    lineHeight: '60px',
    marginBottom: 20,
    padding: '5px 5px 5px 15px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px 4px 4px 15px',
}));

export const ChatListRender = ({chats, removeChat, removeChatMessages}) => {
    let chatEmpty = ''
    if (chats.chats.length === 0) {
        chatEmpty = "Chat's list is empty"
    }
    return (
        <Paper2 elevation={2}>
            <span>{chatEmpty}</span>
            {
                chats.chats.map(({id, name}) =>
                    <Link as={LinkReact} underline='none' to={`/chats/${id}`} key={id} sx={{
                            display: "flex",
                            justifyContent: 'space-between',
                            color: 'rgb(20, 20, 60)',
                            fontSize: '16px'
                        }}>
                        <span>{name}</span>
                        <IconButton sx={{m: 1, color: 'rgb(30, 30, 90)'}} onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            removeChat(id)
                            removeChatMessages(id)
                        }}>
                            <DeleteIcon />
                        </IconButton>
                    </Link>)
            }
        </Paper2>
    );
};

export const ChatList = chatsConnect(ChatListRender)