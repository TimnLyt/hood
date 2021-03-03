import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

function Chat() {
  return (
    <ChatEngine
      projectID="d2aae693-c3d3-4f9b-a786-94417a988839"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatApprops) => <ChatFeed {...chatApprops} />}
    />
  );
}

export default Chat;
