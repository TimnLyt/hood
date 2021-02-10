import logo from "./logo.svg";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import All from './components/All';
import Imgex from './components/Imgex'
import Nav from './components/nav'
export function App() {
  return (
    <>
    <ChatEngine
      projectID="d2aae693-c3d3-4f9b-a786-94417a988839"
      userName="test1"
      userSecret="123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/detail/">
         
          <Imgex/><All />
        </Route>
        <Route path='/'>
           
        </Route>
        <Route>
         
        </Route>
        <Route>
           
        </Route>
        <Route>
         
        </Route>
      </Switch>
    </BrowserRouter>

</>
  );
}

export default App;
