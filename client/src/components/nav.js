import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import AuthenticationButton from "../Auth0/AuthButtonGroup";
import AuthNav from "./Auth-nav"
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
                <Link to='/Home'>
                <h2>OfferUp</h2>
                </Link>
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
                         <AuthenticationButton/>
                    </ul>
                      
                </nav>    
            </header>
        );
    }
}

export default Nav;