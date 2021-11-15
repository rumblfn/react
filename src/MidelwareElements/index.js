import { createMessage } from "../store/chat";
import {nanoid} from "nanoid";

export const addBotMessage = (chatId) => {
    const textValue = 'ответ бота'
    const authorValue = 'Bot'
    const messageId = nanoid()
    return dispatch => {
        const time = setTimeout(() => {
            dispatch(createMessage(chatId, textValue, authorValue, messageId))
        }, 1500);
        return () => clearTimeout(time);
    }
}