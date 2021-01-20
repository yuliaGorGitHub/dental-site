import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Parse from 'parse';
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import "./PersonalArea.css"
import Appointment from "../../data/Appointment";

function PersonalArea (props)
{
    const {activeUser, returnToList} = props; 

    const [personAppointments, setPersonAppointments] = useState([]);

    const { id } = useParams();

    // let personAppointments = activeUser ? appointments.filter(item=>item.pacientId === activeUser.id) : [];
    
    // if (id) {
    //     //personAppointments = activeUser ? appointments.filter(item=>item.pacientId === id) : [];
    // }  


    const viewBy = id != undefined ? id :( activeUser ? activeUser.id : "");

   useEffect(()=> {
         async function fetchData() {
            const parseAppointment = Parse.Object.extend('Appointment');
            const query = new Parse.Query(parseAppointment);

            query.exists("doctorId");
            query.equalTo("pacientId", Parse.User.current());
            //query.equalTo("pacientId", viewBy);
            query.addDescending("appDateTime");  

            debugger;
            const pAppointment = await query.find();
            setPersonAppointments(pAppointment.map(appointment => new Appointment(appointment)));
              
            const newArray = [... personAppointments];
            newArray.forEach(appointment => {
                fetchDoctor(appointment);
            })
        }

            async function fetchDoctor( appointment) {
    debugger;
                const userQuery = new Parse.Query(Parse.User);
                userQuery.equalTo("objectId", appointment.doctorId.id);
                const doctor = await userQuery.get(appointment.doctorId.id) 
                appointment.doctorName = doctor.get("fname")  +" "+ doctor.get("lname");                  
        } 

    if (activeUser) {
        fetchData();
    }       
               

    },[]);
   
    if(!activeUser )
        return <Redirect to="/"/> 

    const currentDate = new Date();
    const history = personAppointments.filter(item => item.appDateTime < currentDate);
    const active = personAppointments.filter(item => item.appDateTime >= currentDate);


    return(
        <>
           <h3>שלום   { activeUser ? activeUser.fname : ""}</h3>
           <h4>{ id ? " הדף של מטופל " + id : ""}</h4>

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