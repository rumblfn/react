import React from 'react'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    pageNotFoundStyles: {
        margin: "30px",
    },
})

export const PageNotFound = () => {
    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.pageNotFoundStyles}>404 page not found</h1>
        </div>
    )
}