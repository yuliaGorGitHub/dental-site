import { Redirect } from "react-router-dom";
import "./PersonalArea.css"

function PersonalArea (props)
{
    const {activeUser} = props;

    if(!activeUser)
        return <Redirect to="/"/> 
           
    return(
        <>
           <h1>hi { (activeUser) ? activeUser.fname : ""}</h1>
            <p>Personal Area</p>

        </>
    )
}
export default PersonalArea;