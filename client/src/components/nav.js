import React, { Component } from 'react';
import './nav.css';


class Nav extends Component {
    constructor() {
        super();
        this.state = {
            nav: []
        }
    }
    
    componentDidMount() {
        fetch('api/nav')
            .then(res => res.json())
            .then(nav => this.setState({nav}, 
            () => console.log('Nav fetched..', 
            nav)));
    }

    render() {
        return (
            <header>
                <h2>OfferUp</h2>
                    <div class="search-box">
                        <input class="search-txt" type="text" name="" placeholder="Search OfferUp"></input>
                        <a class="search-btn" href="#">
                        <p>Go</p>
                        </a>
                    </div>  
                <nav>
                    <ul class="nav_links">
                        <li><a href="#">Sell</a> </li>
                        <li><a href="#">About</a> </li>
                        <li><a href="#">Log in</a> </li>
                        <li><a href="#">Sign up</a> </li>
                    </ul>    
                </nav>    
            </header>
        );
    }
}

export default Nav;