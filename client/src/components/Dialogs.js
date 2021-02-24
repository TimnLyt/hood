import React, { useState, useEffect } from "react";
import { className,TextField, classes,makeStyles,Grid, Button}from "@material-ui/core";
import axios from "axios"
//import "../app.css";
import {Redirect} from 'react-router-dom'
import {withAuthenticationRequired} from '@auth0/auth0-react'
const useStyles = makeStyles(theme => ({
  root:{
      height:300,
      width: 200,
      
       
  },
  text:{
    height:200
  }
}))

function Dialogs() {
  const[input, setInput]=useState({
    content:""
  })
  const [success,setSuccess]=useState(false)
   
   
  function handleChange(event){
     const{name, value}=event.target;

     setInput(prevInput=>{
       return{
         ...prevInput,
            [name]:value
       }
     })
  }
  function handleClick(event){
    event.preventDefault();
    console.log(input)
    const newMessage={
      content:input.content
    }
     axios.post('http://localhost:5000/v1/details',newMessage)
  }

  const classes = useStyles();
   
  return <Grid container direction='column'  
    justify="center" alignItems='center' style={{minHeight:"70vh"}}> 

  <form className={classes.root} noValidate autoComplete="off">
   
   <TextField className={classes.text}
          //id="standard-multiline-static"
          onChange={handleChange}
          label="Message"
          multiline
          rows={13}
          name='content' 
          value={input.content}
          variant="outlined"
           
        ></TextField>
        
  </form>
  <Grid item>
          <Button onClick={handleClick}>Submit</Button>
        </Grid>
  </Grid>
  
}

export default withAuthenticationRequired(Dialogs,{
  returnTo:()=>`/detail/:id`,
});