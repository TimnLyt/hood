import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles,
         Button,
         Card,
         CardActionArea,
         CardActions,
         CardContent,
         CardMedia,
         Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root:{
        maxWdith: 345,
    },
});

export default function ItemBox(){
    const classes = useStyles();
    return (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="img"
                />
                <CardContent>
                  <Typography variant="h5">
                    Item
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    price
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    description
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    location
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button component ={Link} to ="/detail" size="small" color="primary">
                  Detail
                </Button>

              </CardActions>
            </Card>
    );
}