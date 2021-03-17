import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemBox from './ItemBox';

class ItemProvider extends React.Component{
    state = {
        item:[],
        loading: true,
        error: null,
    };

    renderLoading(){
        return <div>Loading...</div>; 
    }

    renderError(){
        return<div>Error</div>;
    }

    renderItems(){
        return <ItemBox item={this.state.item} />
    }

    componentDidMount(){
        console.log("[ItemProvider] componentDidMount");

        const requestConfig = {
            url: "http://localhost:5000/v1/seller",
            method: "get",
            headers: { "Content-Type" : "application/json"},
        };

        axios(requestConfig)
        .then((response) => {
            this.setState({
                item: response.data,
                loading: false,
            });
        })
        .catch((err) => {
            this.setState({
                error: err,
                laoding: false,
            });
        });
    }

    render(){
        if(this.state.loading){
            return this.renderLoading();
        } else if (this.state.item.length > 0) {
            return this.renderItems();
        } else {
            return this.renderError();
        }
    }
}

export default ItemProvider;