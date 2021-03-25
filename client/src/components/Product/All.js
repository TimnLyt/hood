 
import React from 'react';
import './All.css'
import {
  Card,
  Grid,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import Cont from '../Cont';
 
import User from '../Message/Userc';
import FetchOneProd from '../ProductDetail/FetchOneProd'
const useStyles = makeStyles((theme) => ({
    user: {
       
      height:100,
      width:200,
      marginTop:0,
      backgroundColor:'blueGrey',
    },
     
  }));
  
const All=(props)=>{
  const classes = useStyles();
    return(
        <>
        <Grid container className=
          {classes.big} xs={12}   >
        <Grid item xs={10}>
         <FetchOneProd/>
        </Grid>
        <Grid item xs={1} sm={1}> 
        <User className={classes.users}  />
        </Grid>
      </Grid>
        </>
    )
     
};

 
export default All;
