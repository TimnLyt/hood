 
import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Badge,
  Button,
  ButtonGroup,
  
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { blueGrey } from "@material-ui/core/colors";
import Dialogs from './Dialogs'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    height:120,
    width:200,
    marginLeft: 1300,
    marginTop:0,
    backgroundColor:'blueGrey',
  },
  Badge:{
    width: 40,
    height: 10,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "black",
     
  },
  button:{
    height:28,
     
  }
}));

export default function User(props) {
  const [contact, setcontact]=useState(false);
  const classes = useStyles();
  return (
    <>
    <Card className={classes.root}>
       
       <div className={classes.pic} >
         
       </div>
      <CardActionArea>
        <CardContent>
          <h3>User</h3>
          
          <ButtonGroup className={classes.button}
          variant="contained" color="secondary">
            <Button>
              Offer
              </Button>
              
            <Button className={classes.button}
                variant="contained" color="secondary"
                onClick={()=>setcontact(!contact)}>
                Question
                </Button>
              </ButtonGroup>
               
           
        </CardContent>
      </CardActionArea>
    </Card>
    {
          contact?<Dialogs/>:null
           }
    </>
  );
}