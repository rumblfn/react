import Header from "./components/header.js";
import {Switch, Route} from 'react-router-dom';
import Home from './routes/home'
import Profile from './routes/profile'
import Chat from './routes/chat.js'
import './style.css'
import {useState} from 'react';

function App() {
  const [messagesObject, setMessageObject] = useState({
    1: [{textValue: 'Hello', authorValue: 'user1', id: 'm1'}, {textValue: 'any message', authorValue: 'Bot', id: 'm2'}],
    2: [{textValue: 'Hello', authorValue: 'user1', id: 'm3'}, {textValue: 'any message', authorValue: 'Bot', id: 'm4'},
      {textValue: 'any message', authorValue: 'Bot', id: 'm5'}, {textValue: 'any message', authorValue: 'Bot', id: 'm6'}],
    3: [{textValue: 'Hello', authorValue: 'user1', id: 'm7'}, {textValue: 'any message', authorValue: 'Bot', id: 'm8'},
      {textValue: 'any message', authorValue: 'Bot', id: 'm9'}],
  })

  return (
    <>
    <Header/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/chat/:chatID" render={(props) => <Chat {...props} messages={messagesObject[props.match.params.chatID]} />}/> 
      <Route path="/">
        <div>404 page not found</div>
      </Route>
    </Switch>
    </>
  );
}

export default App;
