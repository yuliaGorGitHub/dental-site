import { Redirect } from "react-router-dom";
import "./PersonalArea.css"

function PersonalArea (props)
{
    const {activeUser, users} = props; 

    if(!activeUser )
        return <Redirect to="/"/> 

    return(
        <>
           <h1>שלום   { (activeUser) ? activeUser.fname : ""}</h1>
            <p>Personal Area</p>

        </>
    )
}
export default PersonalArea;