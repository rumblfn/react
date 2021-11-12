import { Chats } from "../routes/chats";
import ProfileComponent from "../components/profileComponent.js";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "3fr 9fr"
    }
});

export const Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Chats/>
            <ProfileComponent/>
        </div>
    )
}