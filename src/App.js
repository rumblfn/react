import Header from "./components/header.js";
import {Switch, Route} from 'react-router-dom';
import Home from './routes/home'
import Profile from './routes/profile'
import Chat from './routes/chat.js'
import './style.css'

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/chat/:chatID" exact component={Chat}/>
      <Route path="/">
        <div>404 page not found</div>
      </Route>
    </Switch>
    </>
  );
}

export default App;
