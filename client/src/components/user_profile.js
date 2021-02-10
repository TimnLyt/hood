import React, { Component } from 'react';
import './user_profile.css';


class User_profile extends Component {
    constructor() {
        super();
        this.state = {
            user_profile: []
        }
    }
    
    componentDidMount() {
        fetch('api/user_profile')
            .then(res => res.json())
            .then(user_profile => this.setState({user_profile}, 
            () => console.log('User_profile fetched..', 
            user_profile)));
    }

    render() {
        return (
            <div class="main">
                <header class="banner">
                
                </header>
                <header class="container">
                    <header class="info">
                        <div class="photo"></div>
                            <div class="underphoto">
                                <span class="username">Username</span>
                                <span class="joindate">Join Date</span>
                                <span class="location">• Location</span>
                                <span class="stars">Stars</span>
                                <span class="responds">Respond Time</span>
                                <hr class="hr1info2"></hr>
                                <div class='embed-container'><iframe 
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.2329583238907!2d-122.33470708436639!3d47.69931457919095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490140174d2fc9d%3A0xef595859431902b6!2sNorth%20Seattle%20College!5e0!3m2!1sen!2sus!4v1585028981234!5m2!1sen!2sus' ></iframe></div>
                                <hr class="hr2info2"></hr>
                                    <span class="reviews">Positive reviews</span>
                                    <span class="basedon">Based on:</span>
                                    <span class="sales"># Sales</span>
                                    <span class="purchases"># Purchases</span>
                                        <div class="reviewboard">
                                            Some info
                                        </div>    
                                <hr class="hr2info2"></hr>
                                    <span class="connections">Connections</span>
                                    <span class="followers">0 Followers</span>
                                    <span class="following">0 Following</span>
                            </div>
                    </header>
                    <header class="info2">
                        <div class="info2top">
                            <hr class="hr1info2"></hr>
                                <span class="info2innertxt">
                                    No items for sale
                                </span>    
                            <hr class="hr2info2"></hr>
                        </div>
                        <div class="info2bottom">
                            <hr class="hr1info2"></hr>
                                <span class="info2innertxt">
                                    No offers at the moment, but check back later!
                                </span>   
                        </div>     
                    </header>    
                </header>
                <footer class="footer">
                    <div class="linklist">
                        <ul class="user_links">
                            <li><a href="#">Explore</a> </li>
                            <li><a href="#">Terms</a> </li>
                            <li><a href="#">Privacy</a> </li>
                            <li><a href="#">Help</a> </li>
                            <li><a href="#">Safe Trade Spots</a> </li>
                        </ul>    
                    </div>  
                </footer>
            </div>
        );
    }
}

export default User_profile;  