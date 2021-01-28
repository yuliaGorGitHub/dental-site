import { Grid } from "@material-ui/core";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import DigitalServiceComponent from "../../components/DigitalServiceComponent/DigitalServiceComponent";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import RedirectComponent from "../../components/RedirectComponent/RedirectComponent";
import SignUpComponent from "../../components/SignUpComponent/SignUpComponent";
import "./HomePage.css"


function HomePage (props)
{
    const {activeUser, users, onLogin} = props;

    const [doRedirect, setDoRedirect] = useState(false);

    function redirectOnLogin(user)
    {
        onLogin(user);
        setDoRedirect(true);
    }

    if (doRedirect && activeUser)
    {
        if (activeUser.job)
            return <Redirect to="/work"/>
        else   
            return <Redirect to="/personal"/>
    }


    return(
        <div className="p-home">
            {/* <p>Home Page</p> */}
            <Grid container spacing={3}  >
                <Grid container item xs={12} sm={6} spacing={3}>
                    <LoginComponent activeUser={activeUser} onLogin={redirectOnLogin} />
                </Grid>
                <Grid container item xs={12} sm={6} spacing={3}>
                    <RedirectComponent activeUser={activeUser} />
                </Grid>
                <Grid container item xs={12} sm={6} spacing={3}>
                    <SignUpComponent />
                </Grid>
                <Grid container item xs={12} sm={6} spacing={3}>
                    <DigitalServiceComponent />
                </Grid>
            </Grid>
         </div>
    )
}
export default HomePage;