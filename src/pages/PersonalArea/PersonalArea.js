import { Redirect } from "react-router-dom";
import { useParams } from 'react-router-dom';
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import "./PersonalArea.css"

function PersonalArea (props)
{
    const {activeUser, appointments, returnToList} = props; 
    const currentDate = new Date();

    const { id } = useParams();


    if(!activeUser )
        return <Redirect to="/"/> 

        let personAppointments = activeUser ? appointments.filter(item=>item.pacientId === activeUser.id) : [];


        if (id) {
            personAppointments = activeUser ? appointments.filter(item=>item.pacientId === id) : [];
        }  

        const history = personAppointments.filter(item => item.appDateTime < currentDate);
        const active = personAppointments.filter(item => item.appDateTime >= currentDate);

        const aa = () => personAppointments.map(item => console.log(item.pacientId));
        
        for(let i=0; i<history.length; i++)
            console.log(history[i].appDateTime);

        console.log(history.length);
        aa();
        console.log(activeUser.id);


    return(
        <>
           <h3>שלום   { activeUser ? activeUser.fname : ""}</h3>
           <h4>{ id ? " הדף של מטופל " + {id} : ""}</h4>

            <p>Personal Area</p>
            {active && active.length > 0 ? 
            <AppointmentsTable appointments={active}  fromScreen="pActive"  returnToList={returnToList} />
            : <p>אין לך תורים עתידיים</p>}


            <h4>הסטוריית ביקורים </h4>

            { history && history.length > 0 ?
            <AppointmentsTable appointments={history}  fromScreen="pHistory"  returnToList={returnToList} />
            : <p>אין לך הסטורייה לצפייה</p>}

        </>
    )
}
export default PersonalArea;