import React from 'react';
import {
    Grid,
    Divider,
    Typography,
    CardMedia,
} from "@material-ui/core";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { makeStyles } from '@material-ui/core/styles';
import { MapContainer } from './maps/MapContainer';

const useStyles = makeStyles((theme) => ({
    root: {
        
      backgroundColor: theme.palette.background.paper,
    },
    name: {
      margin: theme.spacing(3, 2),
    },
    condition: {
      margin: theme.spacing(2),
    },

  }));

export default function ItemView() {

    const classes = useStyles();
    return (
        <div className={classes.root} >
        <div className={classes.image}>
            <CardMedia
              alt="img"
              component="img"
              title="image"
              height="150"
            />

        </div>   
        <div className={classes.name} >
          <Grid container  justify ="center">
            <Grid>
              <Typography gutterBottom variant="h4">
                Blouse
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                <LocalOfferIcon /> 10.50
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Divider/>
        <div className ={classes.condition}>
         <Grid container  justify ="center"> 
        <Typography gutterBottom variant="subtitle2">
            Used (normal wear)
          </Typography>
          <Typography gutterBottom variant="subtitle2">
          Made with cotton. Wore a handful of times
            </Typography>
        </Grid>        

        </div>
        <Divider />
        <Grid container  justify ="center">
   
        <div classname ={classes.discription}>
            <hr></hr>
        <MapContainer></MapContainer>
        </div>
        </Grid>
        

      </div>

    );
}