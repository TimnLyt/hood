import React from 'react';
import ItemBox from './itemBox';
import './ItemBoxGroup.css';

export default function ItemBoxGroup(){
    return(
        <div className ="wrapper">
           <ItemBox></ItemBox>
           <ItemBox></ItemBox>
           <ItemBox></ItemBox>
       


        </div>
    )
}