import logo from "./logo.svg";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import All from "./components/All";
import Imgex from "./components/Imgex";
import Nav from "./components/nav";
import User_profile from "./components/user_profile";
import Home from "./components/Home";
import ItemGroupBox from "./components/ItemGroupBox";
import { Dialog } from "@material-ui/core";
import Dialogs from './components/Dialogs'
import FeatchProduct from './components/FetchOneProd'
import FetchOneProd from './components/FetchOneProd'
import User from './components/Userc'
export function App() {
  return (
    <>
       
      <BrowserRouter>
         
        <Switch>
          <Route  path='/detail/:id'>
          <Imgex/>
          <FetchOneProd/>
          <User/>
          
          </Route>
          <Route path="/">
            <Route path="/Home" exact component={Home} />
            <Route Path="/User_profile" component={User_profile} />
          </Route>
          <Route Path="/ItemGroupBox" component={ItemGroupBox} />

          <Route></Route>
          <Route></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
