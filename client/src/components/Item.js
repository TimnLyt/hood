import React from "react";
import {
    Card,
    CardMedia,
    CardActionArea,
    CardContent,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}));

export default function Item(props){
    const classes = useStyles();
    return(
        <Link to='/ItemView'>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="img"
                    />
                    <CardContent>
                    <Typography variant="h6">
                        {props.item.itemsName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {props.item.itemPrice}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {props.item.location}
                        </Typography>
                        <Link to={`/item/${props.item.id}`}></Link>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}