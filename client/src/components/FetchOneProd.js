import React, { useEffect,useState } from 'react';
import './All.css'
import {
  Card,
  makeStyles,
  Typography,
  Grid
} from "@material-ui/core";
import Cont from './Cont';
 import axios from 'axios'
import { useParams } from 'react-router-dom';
 
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    card: {
      height: "150px",
      padding: theme.spacing(2)
    },
  }));

export default function FeatchProduct(props) {
const classes = useStyles();
 const { id } = useParams();   
 const url = `http://localhost:5000/v1/detail/${id}`
  
  const [Products, setProducts]= useState([]);
//const [error,setError]=useState(null)
    let content=null

  useEffect(()=>{
     axios.get(url)
     .then(res =>{
         setProducts(res.data)
     })
       
}, []);
    
    if(!Products){
        return <div>No product with this id</div>
    }

    return <Grid container justify="flex-start" className=
        {classes.root} spacing={3} align={'left'}>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
             
                <Typography variant="h4" >
                {Products.price}
                </Typography>
                 
               
          </Grid>
          <Grid item xs={5}>
           
                <Typography variant="h5" >
                {Products.name}
                </Typography>
                <Typography variant='h5'>
                 
                </Typography>
              
          </Grid>
          <Grid container item xs={9} align={'left'}>
          <Grid item xs={1}></Grid>
          <Grid item xs={9}>
          <Typography variant="h5">
              {Products.Location} 
              </Typography>
          </Grid>
            
          </Grid>
           
          </Grid>   
        
    
  


    
}