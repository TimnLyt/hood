import logo from "./logo.svg";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import All from './components/All';
import Imgex from './components/Imgex'
import Nav from './components/nav'
import User_profile from './components/user_profile'
import Home from './components/Home'
import ItemGroupBox from './components/ItemGroupBox';
import Dialogs from "./components/Dialogs";
export function App() {
  return (
    <>
     
    <BrowserRouter>
       
      <Switch>
        <Route path="/creat">
         
           
          <Dialogs/>
        </Route>
         
      </Switch>
    </BrowserRouter>

</>
  );
}

export default App;
