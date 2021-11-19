import { Header } from './components/Header/Header'
import {Routes, Route} from 'react-router-dom';
import {PageNotFoundRoute} from "./routes/PageNotFound/PageNotFound";
import {Home} from './routes/Home/Home'
import {Chat} from './routes/Chat/Chat'
import { Profile } from "./components/Profile";
import { Posts } from "./components/Posts";

const dvStyle = {
    height: '86vh'
}

const containerStyle = {
    maxWidth: '1400px',
    padding: '64px 20px 20px',
    margin: '0 auto',
    height: '100%'
}


export const App = () => {
    return (
        <div style={dvStyle}>
            <Header/>
            <div style={containerStyle}>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/posts' element={<Posts/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/*' element={<PageNotFoundRoute/>}/>
                    <Route path='/chats/:chatId' element={<Chat/>}/>
                </Routes>
            </div>
        </div>
    );
}
