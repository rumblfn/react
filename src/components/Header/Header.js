import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import React from 'react'
import { Link } from 'react-router-dom';
import './linkSpanStyle.css'

export const Header = () => {
    return (
        <AppBar sx={{backgroundColor: 'rgb(81, 20, 122)', height: '64px'}}>
            <Toolbar sx={{
                display: "flex",
                justifyContent: 'space-between',
            }}>
                <div>
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
                </div>
                <div>
                    <Typography
                        variant="h6"
                        component="span"
                        fontSize='26px'
                    >
                        <Link to="/signup" style={{ textDecoration: 'none', color: 'white'}}>
                            <span className='gradient-text'>Registration / </span>
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        fontSize='26px'
                    >
                        <Link to="/login" style={{ textDecoration: 'none', color: 'white'}}>
                            <span className='gradient-text'>Login / </span>
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        fontSize='26px'
                    >
                        <Link to="/posts" style={{ textDecoration: 'none', color: 'white'}}>
                            <span className='gradient-text'>Posts / </span>
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        fontSize='26px'
                    >
                        <Link to="/profile" style={{ textDecoration: 'none', color: 'white'}}>
                            <span className='gradient-text'>Profile page</span>
                        </Link>
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}