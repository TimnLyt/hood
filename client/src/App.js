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
import { Dialog } from "@material-ui/core";
import Dialogs from "./components/Dialogs";
import FeatchProduct from "./components/FetchOneProd";
import FetchOneProd from "./components/FetchOneProd";

import { Auth0Provider } from "@auth0/auth0-react";
import User from "./components/Userc";
export function App() {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH_0_DOMAIN}
        clientId={process.env.REATC_APP_AUTH_0_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <Nav />
        <Switch>
          <Route exact path="/detail/:id">
            <Imgex />
            <FetchOneProd />
            <User />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/ItemGroupBox">
            <ItemGroupBox />
          </Route>

          <Route exact path="/User_profile">
            <User_profile />
          </Route>

          <Route exact path="/Chat">
            <Chat />
          </Route>
        </Switch>
      </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;
