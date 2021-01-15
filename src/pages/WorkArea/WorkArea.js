import { Redirect } from "react-router-dom";
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import "./WorkArea.css"

function WorkArea (props)
{
    const {activeUser, appointments} = props;


    if(!activeUser || !activeUser.job)
        return <Redirect to="/"/>

    return(
        <>
            <p>today {appointments.length}</p>
            <h3>שלום   { (activeUser) ? activeUser.fname : "no user"}</h3>
            <p>Work Area</p>
            {appointments && appointments.length > 0 ?
            <AppointmentsTable appointments={appointments} fromScreen="work"/>
            :
            <>
             <p>אין לך תורים להיום</p>
            <p>קח ילדים לחופש!</p>
            </>}
        </>
    )
}
export default WorkArea;