import MessageList from "./components/MessageList";
import Header from "./components/header.js";
import CheckboxListSecondary from "./components/chatsList.js";

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <CheckboxListSecondary/>
      <MessageList/>
    </div>
    </>
  );
}

export default App;
