import CheckboxListSecondary from "../components/chatsList.js";
import ProfileComponent from "../components/profileComponent.js";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "3fr 9fr"
    }
});

export default function Profile () {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <CheckboxListSecondary/>
            <ProfileComponent/>
        </div>
    )
}