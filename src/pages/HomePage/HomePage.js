import { Grid } from "@material-ui/core";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import RedirectComponent from "../../components/LoginComponent/RedirectComponent/RedirectComponent";
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
            <p>Home Page</p>
            <Grid container spacing={1}  >
                <Grid container item xs={12} spacing={3}>
                {/* <FormRow> */}
                    <LoginComponent activeUser={activeUser} onLogin={redirectOnLogin} />
                    <RedirectComponent activeUser={activeUser} />
                    {/* </FormRow> */}
                </Grid>
            </Grid>
         </div>
    )
}
export default HomePage;