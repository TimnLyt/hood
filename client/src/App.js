import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import All from "./components/All";
import Imgex from "./components/Imgex";
import Nav from "./components/nav";
import User_profile from "./components/user_profile";
import Home from "./components/Home";
<<<<<<< HEAD
=======
//import ItemGroupBox from "./components/ItemGroupBox.js";
>>>>>>> 054b03be245bb07ff14f63858c86e46cda3ee424
//import Chat from "./Chat";
import { Dialog } from "@material-ui/core";
import Dialogs from "./components/Dialogs";
import FeatchProduct from "./components/FetchOneProd";
import FetchOneProd from "./components/FetchOneProd";

import { Auth0Provider } from "@auth0/auth0-react";
import User from "./components/Userc";
import CreatProduct from './components/CreatProduct'
import Profile from './components/Profile'


export function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
          <Switch>
          <Route exact path="/sell"> <CreatProduct/></Route>
          <Route exact path="/"> <Home/></Route>            
            <Route exact path="/detail/:id">               
             <Imgex />
              <FetchOneProd />
              <User />
            </Route>
 

            <Route exact Path="/User_profile"> <User_profile/></Route>
<<<<<<< HEAD
            <Route exact Path="/chat"> </Route>
=======
            
>>>>>>> 054b03be245bb07ff14f63858c86e46cda3ee424
             
            
 
          </Switch>
        
      </BrowserRouter>
    </>
  );
}

export default App;
