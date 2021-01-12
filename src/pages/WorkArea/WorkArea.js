import { Redirect } from "react-router-dom";
import "./WorkArea.css"

function WorkArea (props)
{
    const {activeUser, users} = props;


    if(!activeUser || !activeUser.job)
        return <Redirect to="/"/>


    return(
        <>
            <h1>שלום   { (activeUser) ? activeUser.fname : "no user"}</h1>
            <p>Work Area</p>
        </>
    )
}
export default WorkArea;