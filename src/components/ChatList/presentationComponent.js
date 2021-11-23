import Link from "@mui/material/Link";
import {Link as LinkReact} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {db} from "../../firebase";

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

export const ChatListView = ({chatEmpty, chats, removeChat}) => {
    const removeChatFireBase = (chatId, userId) => {
        removeChat(chatId)
        // removeChatMessages(chatId)
        db.ref("chats").on('value', function(snap){
            for (let el in snap.val()) {
                if (snap.val()[el].id === chatId) {
                    db.ref('chats').child(el).remove();
                }
            }
        });
    };
    // console.log(chats)
    const setChats = []
    const chatIds = []
    chats.chats.forEach((chat) => {
        if (chatIds.indexOf(chat.id) === -1) {
            setChats.push(chat)
            chatIds.push(chat.id)
        }
    })
    console.log(setChats)

    return (
        <Paper2 elevation={2}>
            <span>{chatEmpty}</span>
            {
                setChats.map(({name, id}) =>
                    <Link as={LinkReact} underline='none' to={`/chats/chat/${id}`} key={id} sx={{
                        display: "flex",
                        justifyContent: 'space-between',
                        color: 'rgb(20, 20, 60)',
                        fontSize: '16px'
                    }}>
                        <span>{name}</span>
                        <IconButton sx={{m: 1, color: 'rgb(30, 30, 90)'}} onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            removeChatFireBase(id)
                        }}>
                            <DeleteIcon />
                        </IconButton>
                    </Link>)
            }
        </Paper2>
    )
}