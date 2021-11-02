import * as React from 'react';
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    profilePage: {
        margin: "15px",
    }
})

export default function ProfileComponent () {
    const classes = useStyles()
    return (
        <div className={classes.profilePage}>
            <h3>Страница профиля</h3>
        </div>
    )
}