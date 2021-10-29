import React, {useState, useEffect} from 'react';
import './messageList.css';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputUnstyled from '@mui/core/InputUnstyled';
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

const StyledInputElement = styled('input')`
  margin-right: 10px;
  width: 200px;
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

const Input = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

const MessageList = function() {
    const [messageList, setMessageList] = useState([])
    const [textValue, setTextValue] = useState('')
    const [authorValue, setAuthorValue] = useState('')

    const botName = 'Бот'
    const botMessage = 'сообщение бота'

    useEffect(() => {
        if (messageList.length === 0){
            return null;
        } else {
            const time = setTimeout(() => {
                if (messageList[messageList.length - 1].authorValue !== botName) {
                    const newMessageList = [...messageList, {textValue: botMessage, authorValue: botName}];
                    setMessageList(newMessageList);
                }
            }, 1500);
            return () => clearTimeout(time);
        }
    }, [messageList]);

    function changeMessageList() {
        const newMessageList = [...messageList, {textValue, authorValue}];
        setTextValue('');
        setAuthorValue('');
        let focus = document.querySelector('#input-focus');
        focus.focus();
        setMessageList(newMessageList);
    }

    return (
        <div className="message-list">
            <FormControl sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div className="input-group">
                    <Input
                        id="input-focus"
                        autoFocus="True"
                        type="text"
                        value={textValue}
                        onChange={event => setTextValue(event.target.value)}
                        placeholder="text..."
                    ></Input>
                    <Input
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
                <AnswerBox>
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