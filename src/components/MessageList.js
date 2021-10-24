import React, {useState, useEffect} from 'react';
import './messageList.css';

const MessageList = function() {
    const [messageList, setMessageList] = useState([])
    const [textValue, setTextValue] = useState('')
    const [authorValue, setAuthorValue] = useState('')
    const [currentAuthor, setCurrentAuthor] = useState('')

    const botName = 'Бот'
    const botMessage = 'сообщение бота'

    // useEffect(() => {
    //     if (currentAuthor !== botName && currentAuthor !== '') {
    //         setCurrentAuthor(botName);
    //         const newMessageList = [...messageList, {textValue: botMessage, authorValue: botName}];
    //         setTimeout(() => {
    //             setMessageList(newMessageList);
    //         }, 1500)
    //     }
    // }, [messageList])

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentAuthor !== botName && currentAuthor !== '') {
                setCurrentAuthor(botName);
                const newMessageList = [...messageList, {textValue: botMessage, authorValue: botName}];
                setMessageList(newMessageList);
            }
        }, 1500);
        return () => clearInterval(interval);
    }, [messageList]);

    function changeMessageList() {
        setCurrentAuthor(authorValue);
        const newMessageList = [...messageList, {textValue, authorValue}];
        setMessageList(newMessageList);
    }

    return (
        <div className="message-list">
            <div className="message-form">
                <div className="input-group">
                    <input
                        className="input-text"
                        type="text"
                        value={textValue}
                        onChange={event => setTextValue(event.target.value)}
                        placeholder="text..."
                    />
                    <input
                        className="input-author"
                        type="text"
                        value={authorValue}
                        onChange={event => setAuthorValue(event.target.value)}
                        placeholder="Author..."
                    />
                </div>
                <button className='btnAddMessage' onClick={changeMessageList}>Add</button>
            </div>
            <ul className="messages">
                {
                    messageList.slice(0).reverse().map((item) => <li className="messages-item">
                        <p className='message'><span className="author">{item.authorValue}: </span>
                        <span className="text-value">{item.textValue}</span>
                        </p>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default MessageList;