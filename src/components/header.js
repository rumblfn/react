import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import React from 'react'
import { Link } from 'react-router-dom';

function header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                >
                    <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
                        Messenger
                    </Link>
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
