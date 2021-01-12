import { Redirect } from "react-router-dom";
import "./Appointments.css"

function Appointments (props)
{
    const {activeUser} = props;


    // if(!activeUser || !activeUser.job)
    //     return <Redirect to="/"/>


    return(
        <>
            <h1>שלום   { (activeUser) ? activeUser.fname : "no user"}</h1>
            <p>Appointments</p>
        </>
    )
}
export default Appointments;