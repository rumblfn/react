import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const AnswerBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    width: '80%',
    marginBottom: '10px'
});

const Paper2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    lineHeight: '60px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '0 20px 35px',
    boxSizing: 'border-box',
    marginTop: 20,
    borderRadius: '4px 15px 15px 4px',
    width: '100%',
    minHeight: '100%'
}));

const senderMessageFormStyle = {
    display: 'flex',
}

export const ChatMessagesView = ({messages, textValue, setTextValue, addMessage, chatId2}) => {
    // const setChats = []
    // const chatIds = []
    // chats.chats.forEach((chat) => {
    //     if (chatIds.indexOf(chat.id) === -1) {
    //         setChats.push(chat)
    //         chatIds.push(chat.id)
    //     }
    // })
    // console.log(setChats)
    const newMessages = messages.filter((message) => {
        if (message.chatId === chatId2) {
            return message
        }
        return null
    })
    const setNewMessages = []  // messageId
    const messagesIds = []
    newMessages.forEach((message) => {
        if (messagesIds.indexOf(message.messageId) === -1) {
            setNewMessages.push(message);
            messagesIds.push(message.messageId)
        }
    })
    return (
        <Box sx={{flexGrow: 1}}>
            <Paper2 elevation={6}>
                <Box mt={2}>
                    {setNewMessages.slice(0).map((item) => (
                        <AnswerBox key={item.messageId}>
                            <Typography sx={{
                                color: 'rgb(80, 105, 204)',
                                fontSize: '15px',
                                fontWeight: '700',
                            }}
                            >
                                {item.authorValue}
                            </Typography>
                            <Typography sx={{
                                color: 'black',
                                fontSize: '17px',
                                fontWeight: '300',
                            }}
                            >
                                {item.textValue}
                            </Typography>
                        </AnswerBox>))}
                </Box>
                <div style={senderMessageFormStyle}>
                    <TextField
                        fullWidth={true}
                        className="input-text"
                        id="input-focus"
                        type="text"
                        // variant="standard"
                        value={textValue}
                        onChange={event => setTextValue(event.target.value)}
                        placeholder="Type your message here..."
                    />
                    <IconButton
                        sx={{m: 1, color: 'rgb(30, 30, 90)'}}
                        onClick={addMessage}
                    >
                        <SendRoundedIcon />
                    </IconButton>
                </div>
            </Paper2>
        </Box>
    )
}