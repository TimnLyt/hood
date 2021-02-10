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
  );
}

export default App;
