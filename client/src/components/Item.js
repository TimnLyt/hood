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
        padding: theme.spacing(1),
    },
}));

export default function Item(props){
    const classes = useStyles();
    return(
        <Link to={`/detail/${props.item._id}`}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="img"
                    />
                    <CardContent>
                    <Typography variant="h6">
                        {props.item.title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                         $ {props.item.price}
                        </Typography>

                       
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}