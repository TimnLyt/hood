// This contains login and logout function for the chat 
// If able, replace w LoginSignup from Tim

import chatConfig from '../Auth0';
import * as Auth0 from "auth0-js";

class Auth {
    auth0 = new Auth0.WebAuth({
        domain: chatConfig.domain,
        clientId: chatConfig.client,
        redirectUrl: chatConfig.redirect,
        
        responseType: "id_token token",
        scope: "openid profile email"

    });

    authFlag = "isLoggedIn";
    userProfileFlag = "userProfile";
    
    // store login credentials to local storage
    localLogin(authResult){
        localStorage.setItem(this.authFlag,true);
        localStorage.setItem(
            this.userProfileFlag,
            JSON.stringify(authResult.idTokenPayload)
        );

        this.loginCallback(authResult.idTokenPayload);
    }

    localLogout(){
        localStorage.removeItem(this.authFlag);
        localStorage.removeItem(this.userProfileFlag);
        this.localCallback();
    }

    
    login(){
        this.auth0.popup.authorize({}, (err,authResult) => {
            if(err) this.localLogout();
            else{
                this.localLogin(authResult);
            }
        });
    }

    logout(){
        this.localLogout();
        this.auth0.logout({
            returnTo: chatConfig.logoutUrl,
            clientId: chatConfig.clientId
        });
    }

    //check user is authenticated with localStorage
    isAuthenticated(){
        return localStorage.getItem(this.authFlag) === "true";
    }

    // get user profile from local storage
    getUserProfile(){
        return JSON.parse(localStorage.getItem(this.userProfileFlag));
    }
}

const auth = new Auth();
export default auth;
