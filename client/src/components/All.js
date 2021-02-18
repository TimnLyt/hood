 
import React from 'react';
import './All.css'
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import Cont from './Cont';
 
import User from './Userc';

const useStyles = makeStyles((theme) => ({
    user: {
       
      height:100,
      width:200,
      marginTop:0,
      backgroundColor:'blueGrey',
    },
     
  }));
  
const All=(props)=>{
    
    return(
        <>
        <Grid container className=
          {classes.big} xs={12}   >
        <Grid item xs={10}>
        <FeatchProduct/>
        </Grid>
        <Grid item xs={2} sm={2}> 
        <User className={classes.users}  />
        </Grid>
      </Grid>
        </>
    )
     
};

 
export default All;
