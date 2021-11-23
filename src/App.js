import { Header } from './components/Header/Header'
import {Routes, Route} from 'react-router-dom';
import {PageNotFoundRoute} from "./routes/PageNotFound/PageNotFound";
import {Home} from './routes/Home/Home'
import {Chat} from './routes/Chat/Chat'
import { Profile } from "./components/Profile";
import { Posts } from "./components/Posts";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { ChatWithMessages } from "./routes/ChatWithMessages";
import { PrivateRoute } from "./hocs/PrivateRoute";
import { PublicRoute } from "./hocs/PublicRoute";

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
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        })
    }, []);

    return (
        <div style={dvStyle}>
            <Header/>
            <div style={containerStyle}>
                <Routes>
                    <Route path="/" element={
                            <PublicRoute>
                                <Home />
                            </PublicRoute>
                        }
                    />
                    <Route path="/home" element={
                            <PublicRoute>
                                <Home />
                            </PublicRoute>
                        }
                    />
                    <Route path="/posts" element={
                            <PublicRoute>
                                <Posts />
                            </PublicRoute>
                        }
                    />
                    <Route path="/login" element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route path="/signup" element={
                            <PublicRoute>
                                <SignUp />
                            </PublicRoute>
                        }
                    />
                    <Route path="/profile" element={
                            <PrivateRoute authed={authed}>
                                <Profile />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/chats" element={
                            <PrivateRoute authed={authed}>
                                <Chat />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/chats/chat/:chatId" element={
                            <PrivateRoute authed={authed}>
                                <ChatWithMessages />
                            </PrivateRoute>
                        }
                    />
                    <Route path='*' element={<PageNotFoundRoute/>}/>
                </Routes>
            </div>
        </div>
    );
}
