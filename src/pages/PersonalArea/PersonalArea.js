import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Parse from 'parse';
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import "./PersonalArea.css"
import Appointment from "../../data/Appointment";
import { ContactSupportOutlined } from "@material-ui/icons";

function PersonalArea (props)
{
    //const {activeUser, employees, returnToList} = props; 

    const {activeUser, employees} = props; 
    const [personAppointments, setPersonAppointments] = useState([]);

    const { id } = useParams();

    // let personAppointments = activeUser ? appointments.filter(item=>item.pacientId === activeUser.id) : [];

    const viewBy = id ? {__type: "Pointer", className: "_User", objectId: id}  : Parse.User.current();

   useEffect(()=> {
         async function fetchData() {
            const parseAppointment = Parse.Object.extend('Appointment');
            const query = new Parse.Query(parseAppointment);

            query.exists("doctorId");
            query.equalTo("pacientId", viewBy);
            query.addDescending("appDateTime");  

            const pAppointment = await query.find();            
            const pacientAppointments = pAppointment.map(appointment => new Appointment(appointment));
            // const appointmentsWithDoctorName = await fetchDoctor(pacientAppointments);
            const appointmentsWithDoctorName = setDoctorName( pacientAppointments)
            setPersonAppointments(appointmentsWithDoctorName);
        }

            // variant 1: get doctor name from db User table
            async function fetchDoctor( appointments) {
                for (const appointment of appointments) {
                    const userQuery = new Parse.Query(Parse.User);
                    const doctor = await userQuery.get(appointment.doctorId.id) 
                    appointment.doctorName = doctor.get("fname")  +" "+ doctor.get("lname");
                }
                return appointments;
            } 

            // variant 2:  get doctor name from array after one fetch in App.js 
            function setDoctorName( appointments) {
                for (const appointment of appointments) {
                    const doctor = employees.find(item => item.doctorId === appointment.doctorId.id );
                    appointment.doctorName = doctor.fname  +" "+ doctor.lname;
                    console.log( appointment.doctorName);
                }
                return appointments;
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

    async function returnAppointment(appId)
    {

        const index = personAppointments.findIndex(item => item.id === appId);
        let temp = [...personAppointments];
        // remove appointment at index 'index' from array
        temp.splice(index, 1);

        const pAppointment = Parse.Object.extend('Appointment');
        const query = new Parse.Query(pAppointment);
        const pApp = await query.get(appId);

        //pApp.set('pacientId', undefined);
        pApp.set('pacientId', null);
        pApp.set('updatedBy', Parse.User.current());
        const savedApp = await pApp.save();

        const updatedApp = new Appointment (savedApp);
        setPersonAppointments(temp);
    }



    return(
        <>
           <h3>שלום   { activeUser ? activeUser.fname : ""}</h3>
           <h4>{ id ? " הדף של מטופל " + id : ""}</h4>

            {active && active.length > 0 ? 
            <AppointmentsTable appointments={active}  fromScreen="pActive"  returnToList={returnAppointment} />
            : <p>אין לך תורים עתידיים</p>}


            <h4>הסטוריית ביקורים </h4>

            { history && history.length > 0 ?
            <AppointmentsTable appointments={history}  fromScreen="pHistory"  returnToList={returnAppointment} />
            : <p>אין לך הסטורייה לצפייה</p>}

        </>
    )
}
export default PersonalArea;