import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <AppBar sx={{backgroundColor: 'rgb(81, 20, 122)', height: '64px'}}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    fontSize='30px'
                >
                    <Link to="/home" style={{ textDecoration: 'none', color: 'white'}}>
                        Messenger
                    </Link>
                </Typography>
                <IconButton
                    color="inherit"
                >
                    <ChatIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}