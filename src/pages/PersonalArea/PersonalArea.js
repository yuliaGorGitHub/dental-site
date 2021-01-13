import { Redirect } from "react-router-dom";
import { useParams } from 'react-router-dom';
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import "./PersonalArea.css"

function PersonalArea (props)
{
    const {activeUser, appointments, returnToList} = props; 
    const currentDate = new Date();
    const history = appointments.filter(item => item.appDateTime < currentDate);
    const active = appointments.filter(item => item.appDateTime >= currentDate);
    const { id } = useParams();

    if(!activeUser )
        return <Redirect to="/"/> 

        if (id) {

        }       

    return(
        <>
           <h3>שלום   { activeUser ? activeUser.fname : ""}</h3>
           <h4>{ id ? " הדף של מטופל " + {id} : ""}</h4>

            <p>Personal Area</p>

            <AppointmentsTable appointments={active}  fromScreen="pActive"  returnToList={returnToList} />
            <AppointmentsTable appointments={history}  fromScreen="pHistory"  returnToList={returnToList} />
        </>
    )
}
export default PersonalArea;