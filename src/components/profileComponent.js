import * as React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import Checkbox from '@mui/material/Checkbox';
import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles({
    profilePage: {
        alignItems: 'flex-start',
        display: 'flex',
        margin: "30px",
    }
})

export default function ProfileComponent () {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profileName)
    const classes = useStyles()

    return (
        <div className={classes.profilePage}>
            <h3>{profile}</h3>
            <Checkbox sx={{ mt: -1, ml: 1 }} onChange={() => {dispatch({type: 'TOGGLE_CHECK_BOX'})}}/>
        </div>
    )
}