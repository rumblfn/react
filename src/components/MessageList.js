import React, {useState, useEffect} from 'react';
import './messageList.css';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { Box, styled } from '@mui/system';
import { Typography } from '@mui/material';

const AnswerBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px',
    boxSizing: 'border-box', 
    borderRadius: '5px',
    width: '80%',
    marginBottom: '10px'
  });

const Input = styled('input')`
  margin-right: 10px;
  width: 100%;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 4px;
  padding: 6px 10px;
  color: #20262d;
  transition: all 0.3s;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    border-radius: 10px;
    transition: width 200ms ease-out;
  }
`;

function MessageList () {
    const [messageList, setMessageList] = useState([])
    const [textValue, setTextValue] = useState('')
    const [authorValue, setAuthorValue] = useState('')

    let elementInputTextRef = null

    const botName = 'Бот'
    const botMessage = 'сообщение бота'

    // const dispatch = useDispatch()
    // const messages = useSelector(state => state.messageList)
    // setMessageList(messages)

    useEffect(() => {
        if (messageList.length === 0){
            return null;
        } else {
            const time = setTimeout(() => {
                if (messageList[messageList.length - 1].authorValue !== botName) {
                    const newMessageList = [...messageList, {textValue: botMessage, authorValue: botName, id: Date.now()}];
                    setMessageList(newMessageList);
                }
            }, 1500);
            return () => clearTimeout(time);
        }
    }, [messageList]);

    function changeMessageList() {
        const newMessageList = [...messageList, {textValue, authorValue, id: Date.now()}];
        setTextValue('');
        elementInputTextRef.focus();
        setMessageList(newMessageList);
    }

    return (
        <div className="message-list">
            <FormControl sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div className="input-group">
                    <Input
                        className="input-text"
                        id="input-focus"
                        type="text"
                        ref={(InputTextRef) => { elementInputTextRef = InputTextRef}}
                        value={textValue}
                        onChange={event => setTextValue(event.target.value)}
                        placeholder="text..."
                    ></Input>
                    <Input
                        className="input-author"
                        type="text"
                        value={authorValue}
                        onChange={event => setAuthorValue(event.target.value)}
                        placeholder="Author..."
                    ></Input>
                </div>
                <Button variant="contained" onClick={changeMessageList}>Add</Button>
            </FormControl>
            <Box mt={2}>
                {messageList.slice(0).reverse().map((item) => (
                <AnswerBox key={item.id}>
                    <Typography sx={{
                        color: 'rgb(80, 105, 204)',
                        fontSize: '15px',
                        fontWeight: '700',
                    }}
                    >
                        {item.authorValue}
                    </Typography>
                    <Typography sx={{
                        color: 'black',
                        fontSize: '17px',
                        fontWeight: '300',
                    }}
                    >
                        {item.textValue}
                    </Typography>
                </AnswerBox>))}
            </Box>
        </div>
    )
}

export default MessageList;