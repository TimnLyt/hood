<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

export function App() {
  return (
    <ChatEngine
      projectID="d2aae693-c3d3-4f9b-a786-94417a988839"
      userName="test1"
      userSecret="123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> origin/skeleton
  );
}

export default App;
