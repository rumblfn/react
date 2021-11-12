import {Chats} from './chats'
import {MessageList} from '../components/MessageList'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    chatGrid: {
        display: "grid",
        gridTemplateColumns: "3fr 9fr"
    }
});

export const  Chat = () => {
    const classes = useStyles();

    return (
        <div className={classes.chatGrid}>
            <Chats/>
            <MessageList/>
        </div>
    )
}