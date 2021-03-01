import React from 'react';
import './ItemBox.css';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function ItemBox(){
    return (
       
        <div className = "box">
            
            <ul class="details">
            <li>Picture of Item</li>
            <li>Item Discription</li>
            <li>$$ Price</li>
            <li>Item Location</li>
            <li></li>
            <Button variant="contained" color="secondary">
            <Link to='/detail'>Details</Link>
            </Button>
            </ul>
        </div>
      
    )
}