import React from 'react';
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Cont(props) {
  const classes = useStyles();
  return (
    <Grid container justify="flex-start" className=
    {classes.root} spacing={3} align={'left'}>
      <Grid item xs={1}></Grid>
      <Grid item xs={3}>
         
            <Typography variant="h4" >
              Price
            </Typography>
            <Typography>
              <p>pros.products.price</p>
            </Typography>
           
      </Grid>
      <Grid item xs={5}>
       
            <Typography variant="h4">
              Titile
            </Typography>
            <Typography>
              <p>pros.products.tile</p>
            </Typography>
          
      </Grid>
      <Grid container item xs={9} align={'left'}>
      <Grid item xs={1}></Grid>
      <Grid item xs={9}>
      <Typography variant="h4">
          Description</Typography>
      </Grid>
        
      </Grid>
       
      </Grid>   
    
       


    
  )
    
}
