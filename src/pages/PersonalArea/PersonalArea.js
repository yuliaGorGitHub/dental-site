import { Redirect } from "react-router-dom";
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import "./PersonalArea.css"

function PersonalArea (props)
{
    const {activeUser, appointments, returnToList} = props; 

    if(!activeUser )
        return <Redirect to="/"/> 

    return(
        <>
           <h1>שלום   { (activeUser) ? activeUser.fname : ""}</h1>
            <p>Personal Area</p>

            <AppointmentsTable appointments={appointments}  fromScreen="pActive"  returnToList={returnToList} />
            <AppointmentsTable appointments={appointments}  fromScreen="pHistory"  returnToList={returnToList} />
        </>
    )
}
export default PersonalArea;