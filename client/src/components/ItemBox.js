import React from 'react';
import './ItemBox.css';
//import { Link } from "react-router-dom";
//import { Link } from 'react-router-dom';

export default function ItemBox(){
    return (
       
        <div className = "box">
            
            <ul class="details">
            <li>Picture of Item</li>
            <li>Item Discription</li>
            <li>$$ Price</li>
            <li>Item Location</li>
            <li></li>
            </ul>
        </div>
      
    )
}