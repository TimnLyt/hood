
import React from 'react';
import ItemBox from './ItemBox';
import './ItemGroupBox.css';

export default function ItemGroupBox(){
    return(
        <div className ="wrapper">
           <ItemBox></ItemBox>
           <ItemBox></ItemBox>
           <ItemBox></ItemBox>
       


        </div>
    )
}