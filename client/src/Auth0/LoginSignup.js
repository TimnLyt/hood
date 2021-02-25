import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
    navOption:{
        margin: theme.spacing(2),
    },
}));

export default function LoginSignup() {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  return (
    <>
        <Button
            className={classes.navOption}
            variant="outlined"
            color="inherited"
            onClick={() => loginWithRedirect()}
        >
            Log In
        </Button>
        <Button
            className={classes.navOption}
            variant="outlined"
            color="inherited"
            onClick={() =>
            loginWithRedirect({
            screen_hint: "signup",
        })
      }
    >
      Sign Up
    </Button>
</>
  );
};

 
