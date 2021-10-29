import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function CheckboxListSecondary() {
    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', position: 'absolute'}}>
            {['user1', 'user2', 'user3', 'user4', 'user5'].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem
                        key={value}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText id={labelId} primary={value} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

//import React from 'react'

// const chatsList = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default chatsList