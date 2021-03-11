import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import All from "./components/All";
import Imgex from "./components/Imgex";
import Nav from "./components/nav";
import User_profile from "./components/user_profile";
import Home from "./components/Home";
//import ItemGroupBox from "./components/ItemGroupBox.js";
import Chat from "./Chat";
import { Dialog } from "@material-ui/core";
import Dialogs from "./components/Dialogs";
import FeatchProduct from "./components/FetchOneProd";
import FetchOneProd from "./components/FetchOneProd";

import { Auth0Provider } from "@auth0/auth0-react";
import User from "./components/Userc";
import CreatProduct from './components/CreatProduct'
import Profile from './components/Profile'
// import ItemView from "./components/ItemView";


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
<<<<<<< HEAD
            
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
=======
 

            <Route exact Path="/User_profile"> <User_profile/></Route>
            <Route exact Path="/chat"> <Chat/></Route>
             
            
 
>>>>>>> origin/main
          </Switch>
        
      </BrowserRouter>
    </>
  );
}

export default App;
