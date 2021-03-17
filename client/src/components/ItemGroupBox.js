import React from 'react';
import ItemBox from './ItemBox';
import './ItemGroupBox.css';

export default function ItemBoxGroup(){
    return(
        <div className ="wrapper">
           <ItemBox></ItemBox>
           <ItemBox></ItemBox>
           <ItemBox></ItemBox>
        </div>
    )
}