import React from 'react';
import { Link } from 'react-router-dom';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    minWidth: '850px',
    paddingLeft: theme.spacing(2),
  },
  icon: {
    color: 'white',
  },
}));

export default function ItemGrid({ items }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={5}>
        {items.map((item) => (
          <GridListTile
            key={item.image}
            cols={item.cols || 1}
            className={classes.gridTile}
          >
            <img src={`http://localhost:5000${seller.image}`} alt={item.item} />
            <GridListTileBar
              title={item.title}
              subtitle={item.price}
              actionIcon={(
                <IconButton
                  aria-label={`info about ${item.item}`}
                  className={classes.icon}
                  component={Link}
                  to={`/seller/${item._id}`}
                >
                  <InfoIcon />
                </IconButton>
              )}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
