import CheckboxListSecondary from "../components/chatsList.js";
import MessageList from "../components/MessageList.js";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    chatGrid: {
        display: "grid",
        gridTemplateColumns: "3fr 9fr"
    }
});

export default function Chat (props) {
    const classes = useStyles();
    let messages = props.messages;
    if (messages === undefined) {
        messages = []
    }
    return (
        <div className={classes.chatGrid}>
            <CheckboxListSecondary/>
            <MessageList messages={messages}/>
        </div>
    )
}