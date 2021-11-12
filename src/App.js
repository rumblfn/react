import Header from "./components/header.js";
import {Switch, Route} from 'react-router-dom';
import {Home} from './routes/home.js'
import {Profile} from './routes/profile.js'
import {Chat} from './routes/chat.js'
import './style.css'

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/chat/:chatID" component={Chat}/>
      <Route path="/">
        <div>404 page not found</div>
      </Route>
    </Switch>
    </>
  );
}

export default App;
