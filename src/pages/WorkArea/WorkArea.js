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
            <h3>שלום   { (activeUser) ? activeUser.fname : "no user"}</h3>
            <p>Work Area</p>
            <AppointmentsTable appointments={appointments} fromScreen="work"/>
        </>
    )
}
export default WorkArea;