import React, { useState } from "react";
//import Products from './FetchOneProd'
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Badge,
  Button,
  Grid,
  ButtonGroup,
  Container
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { blueGrey } from "@material-ui/core/colors";
import Dialogs from "./Dialogs";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    height:100,
    maxWidth: 245,
      
    //marginRight:30,
    backgroundColor:'blueGrey',
  },
  paper:{
    display: 'flex',
    flexDirection: 'column',
  },
  Badge:{
    
    height: 10,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "black",
     
  },
  button:{
    height:28,
    marginTop:10
  }
}));

export default function User(props) {
  const [contact, setcontact]=useState(false);
  const classes = useStyles();
   
  return (
    <>
    <Container className={classes.root}>
    <div className={classes.paper}> 
        
     
          <h3>User </h3>
          <div className={classes.rbutton}>
      <ButtonGroup color="primary" aria-label="large outlined primary button group">
        <Button>Offer</Button>
        <Button onClick={()=>setcontact(!contact)}>Question</Button>
         
      </ButtonGroup>
      </div>
           
        
      <div> 
       
      </div>
    
    </div>
    {
          contact?<Dialogs/>:null
           }
    </Container>  
    </>
  );
}
