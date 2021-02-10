import React from "react";
 
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Badge,
  Button,
  
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    height:200,
    width:200,
    marginLeft: 1300,
    marginTop:0,
    backgroundColor:'blueGrey',
  },
  Badge:{
    width: 40,
    height: 10,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "black",
     
  },
  button:{
    height:28,
    marginTop:10
  }
}));

export default function User(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
       <div className={classes.pic} >
         
       </div>
      <CardActionArea>
        <CardContent>
          <h3>User</h3>
          <Button className={classes.button}
          variant="contained" color="secondary">
              Offer
              </Button>
            <Button className={classes.button}
                variant="contained" color="secondary">
                Question
              </Button>
              <Button>
            <Link to='/'$>D </Link>
            </Button>
           
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
