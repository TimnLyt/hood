import React from "react";

import LoginButton from "./LoginSignup";
import LogoutButton from "./Logout";

import { useAuth0 } from "@auth0/auth0-react";

export default function AuthenticationButton(){
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <LogoutButton />;
}else{
    return <LoginButton />;
}
};

 