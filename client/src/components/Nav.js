import React from 'react';
import './Nav.css';
import { Component } from 'react';


class Nav extends Component {
    constructor() {
        super();
        this.state = {
            nav: []
        }
    }

    render() {
        return (
            <header>
                <h2>OfferUp</h2>
                    <div className="search-box">
                        <input className="search-txt" type="text" name="" placeholder="Search OfferUp"></input>
                        <a className="search-btn" href="#">
                        <p>Go</p>
                        </a>
                    </div>  
                <nav>
                    <ul className="nav_links">
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
