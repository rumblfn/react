import { useState } from "react";
import {auth, db} from "../../firebase";
import {Link, Navigate} from 'react-router-dom';
import {clearChats, createChat} from "../../store/chats";
import {useDispatch} from "react-redux";
import {clearChatMessages, createChatMessages, createMessage} from "../../store/chat";
import './loginAndSignUpStyles.css'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import firebase from "firebase";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch()

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('')
            setPassword('')
        } catch (error) {
            setError(error.message);
        }

        if (!error) {
            dispatch(clearChats())
            dispatch(clearChatMessages())
            db.ref("chats").on("value", (snapshot) => {
                snapshot.forEach((snap) => {
                    if (snap.val().userId === auth.currentUser.uid) {
                        dispatch(createChat(snap.val()))
                        dispatch(createChatMessages(snap.val()))
                    }
                });
            });
            db.ref("messages").on("value", (snapshot) => {
                snapshot.forEach((snap) => {
                    if (snap.val().userId === auth.currentUser.uid) {
                        dispatch(createMessage(snap.val()))
                    }
                });
            });
        }
    };

    return (
        <div className='mainPage'>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to login to your account.</p>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    <TextField
                        id="demo-helper-text-misaligned-no-helper"
                        label="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                        sx={{m: 1, mt: 3}}
                    />
                    <TextField
                        sx={{m: 1, mb: 3}}
                        id="demo-helper-text-misaligned-no-helper"
                        label="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                    />
                </Box>
                <div>
                    {error && <p>{error}</p>}
                    <Button variant="contained" type="submit">Login</Button>
                </div>
                <br/>
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    );
};