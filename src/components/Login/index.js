import { useState } from "react";
import {auth, db} from "../../firebase";
import { Link } from 'react-router-dom';
import {clearChats, createChat} from "../../store/chats";
import {useDispatch} from "react-redux";
import {clearChatMessages, createChatMessages, createMessage} from "../../store/chat";

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
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to login to your account.</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    <button type="submit">Login</button>
                </div>
                <hr />
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    );
};