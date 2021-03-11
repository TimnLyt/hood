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
    <>
      <BrowserRouter>
         
          <Switch>
            <Route path="/detail/:id">
              <Imgex />
              <FetchOneProd />
              <User />
            </Route>
            
            <Route path="/">
              <Nav />
              
              {/* put your path here, edit navbar + this to get your comps on the navbar */}
              <Route path="/Home" exact component={Home} />
              <Route Path="/User_profile" component={User_profile} />
              <Route Path="/Chat" component={Chat} />
              
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
