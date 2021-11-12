import * as React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_SHOW_PROFILE } from '../store/profile/action'

const useStyles = makeStyles({
    profilePage: {
        alignItems: 'flex-start',
        display: 'flex',
        margin: "30px",
    }
})

export default function ProfileComponent () {
    const classes = useStyles();

    const dispatch = useDispatch();
    const isShow = useSelector((state) => state.profile.isShow)
    const profileName = useSelector((state) => state.profile.profileName)

    return (
        <div className={classes.profilePage}>
            <h3>{profileName}</h3>
            <Checkbox sx={{ mt: -1, ml: 1 }} checked={isShow} onChange={() => {
                dispatch({
                    type: TOGGLE_SHOW_PROFILE
                })
            }}/>
        </div>
    )
}