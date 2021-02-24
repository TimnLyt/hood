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
        <div class='embed-container'>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.2329583238907!2d-122.33470708436639!3d47.69931457919095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490140174d2fc9d%3A0xef595859431902b6!2sNorth%20Seattle%20College!5e0!3m2!1sen!2sus!4v1585028981234!5m2!1sen!2sus' ></iframe></div>
        </Grid>
        

      </div>

    );
}