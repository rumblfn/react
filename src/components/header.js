import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import React from 'react'

function header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                >
                    Messenger
                </Typography>
                <IconButton
                    color="inherit"
                >
                    <ChatIcon></ChatIcon>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default header
