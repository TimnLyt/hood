import React from "react";
import { GridList,Grid, makeStyles } from "@material-ui/core";

import Item from "./Item";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: '100%',
      minWidth: '850px',
      paddingLeft: theme.spacing(2),
    },
  }));

export default function ItemList(props){
    const classes = useStyles();

    return(
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={5}>
            {props.item.map((item) => (
                <Grid key={item.id} item xs={2}>
                    <Item item={item} />
                </Grid>    
            ))}
        </GridList>
        </div>
    );
}