import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton} from '@mui/material'

const accountName = 'account'

export default function CheckboxListSecondary() {
    const [chatList, setChatList] = useState([{textValue: 'user1', id: 1}, {textValue: 'user2', id: 2}, {textValue: 'user3', id: 3},])
    const [textValue, setTextValue] = useState('')

    function changeMessageList() {
        const newChatList = [...chatList, {textValue, id: Date.now()}];
        setTextValue('');
        setChatList(newChatList);
    }

    return (
        <List dense sx={{ width: '100%', maxWidth: '360px', bgcolor: 'background.paper'}}>
            <Button variant="contained" color="success" sx={{position: 'absolute', right: '10px', top: '-50px',}} onClick={changeMessageList}>
                Добавить чат
            </Button>
            <ListItem key="input_new_chat" disablePadding>
                <InputBase
                    sx={{marginLeft: "10px"}}
                    className="input-text"
                    id="chat-input"
                    type="text"
                    value={textValue}
                    onChange={event => setTextValue(event.target.value)}
                    placeholder="chat name..."/>
            </ListItem>
            <ListItem
                        key={accountName}
                        disablePadding
                    >
                        <ListItemButton>
                            <Link href="/profile" underline="none" width="100%">
                                <ListItemText id={`checkbox-list-secondary-label-${accountName}`} primary={accountName} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
            {chatList.map((item) => {
                const labelId = `checkbox-list-secondary-label-${item.id}`;
                const href = `/chat/${item.id}`
                return (
                    <ListItem
                        key={item.id}
                        disablePadding
                    >
                        <ListItemButton>
                            <Link href={href} underline="none" width="100%">
                                <ListItemText id={labelId} primary={item.textValue} />
                            </Link>
                        </ListItemButton>
                        <IconButton
                            sx={{color: 'primary'}}
                        >
                            <DeleteForeverIcon></DeleteForeverIcon>
                        </IconButton>
                    </ListItem>
                );
            })}
        </List>
    );
}