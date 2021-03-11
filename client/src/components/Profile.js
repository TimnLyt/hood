import React from "react";
import {Card,makeStyles,Grid, Typography} from  "@material-ui/core";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import  Loading  from "./Loading";
const useStyles = makeStyles((theme) => ({
    root: {
    padding: theme.spacing(1),
    height:600,
    width:680,
    backgroundColor: '#2596be',
    marginTop:10
            }
    }))
const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
    const Classes=useStyles();
  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        
        style={{ minHeight: '100vh' }}
        > 
        <Typography >{user.nickname}</Typography>
     <Card className={Classes.root} > 
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name.nickname}</h2>
           
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </Card>
</Grid>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});