import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import All from "./components/All";
import Imgex from "./components/Imgex";
import Nav from "./components/nav";
import User_profile from "./components/user_profile";
import Home from "./components/Home";
import ItemGroupBox from "./components/ItemGroupBox";
import Chat from "./Chat";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/detail/">
            <Imgex />
            <All />
          </Route>

          <Route path="/">
            <Route path="/Home" exact component={Home} />
            <Route path="/User_profile" component={User_profile} />
            <Route path="/Chat" component={Chat} />
          </Route>

          <Route path="/ItemGroupBox" component={ItemGroupBox} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
