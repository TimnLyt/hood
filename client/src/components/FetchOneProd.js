import React, { useEffect,useState } from 'react';
import './All.css'
import {
  Card,
  Paper,
  CardMedia,
  makeStyles,
  Typography,
  Grid
} from "@material-ui/core";
import Cont from './Cont';
 import axios from 'axios'
import { useParams } from 'react-router-dom';
 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 950
  },
  image: {
    width: 428,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
  }));

export default function FeatchProduct(props) {
const classes = useStyles();
 const { id } = useParams();   
 const url = `http://localhost:5000/v1/seller/${id}`
  
  const [Products, setProducts]= useState([]);
//const [error,setError]=useState(null)
    let content=null

  useEffect(()=>{
     axios.get(url)
     .then(res =>{
         setProducts(res.data)
     })
       
}, [url]);
    
    if(!Products){
        return <div>No product with this id</div>
    }

    return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid container spacing={6}>
        <Grid item>
          <CardMedia
            style={{height:"300px"}}
            className={classes.image}
            title="complex"
            src="C:\Users\abety\Documents\Orilylearn\creatreact\my-app\src\image\hp2.png"
            
             
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Title:{Products.title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Discription: {Products.discription}
              </Typography>
               
            </Grid>
            <Grid item>
              <Typography variant="body2" style={{ cursor: "pointer" }}>
                 
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1"> ${Products.price}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </div>
    )  
}