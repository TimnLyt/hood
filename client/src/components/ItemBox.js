import React from 'react';
import { makeStyles,
         Grid,
} from "@material-ui/core";
import ItemList from "./ItemList";       

const useStyles = makeStyles({
    root:{
        maxWdith: 345,
    },
});

export default function ItemBox(props){
  const classes = useStyles();
  return(
    <div className ={classes.root}>
      <Grid container direction="column">
        <ItemList item={props.item}/>
      </Grid>
    </div>
  )

}