import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import All from "./components/Product/All";
import Imgex from "./components/Imgex";
import Nav from "./components/nav";
import User_profile from "./components/user_profile";
import Home from "./components/Home";
import { Dialog } from "@material-ui/core";
import Dialogs from "./components/Message/Dialogs";
//import FeatchProduct from "./components/ProductDetail/FetchOneProd";
import FetchOneProd from "./components/ProductDetail/FetchOneProd";

import { Auth0Provider } from "@auth0/auth0-react";
import User from "./components/Message/Userc";
import CreatProduct from './components/Product/CreatProduct'
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
              
              <FetchOneProd />
              <User />
            </Route>
 

            <Route exact Path="/User_profile"> <User_profile/></Route>
             
            
 
          </Switch>
        
      </BrowserRouter>
    </>
 
  );
}

export default App;
