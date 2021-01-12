import { SignalCellularNoSimOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
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
        if (activeUser.isDoctor)
            return <Redirect to="/work"/>
        else   
            return <Redirect to="/personal"/>
    }


    return(
        <div className="p-home">
            <p>Home Page</p>
            <LoginComponent users={users} onLogin={redirectOnLogin} />
         </div>
    )
}
export default HomePage;