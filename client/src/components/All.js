import React from 'react';
import './All.css'
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
   
  
} from "@material-ui/core";
import Cont from './Cont';
 
import User from './User';

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
        <div className='big'>
        <Cont/>
        <User className='user'/>

        </div>
        </>
    )
     
};

export default All;