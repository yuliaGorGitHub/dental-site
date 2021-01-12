import { Redirect } from "react-router-dom";
import "./Appointments.css"

import React from 'react';  
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";

 


function Appointments (props)
{
    const {activeUser, appointments} = props;


    // if(!activeUser || !activeUser.job)
    //     return <Redirect to="/"/>

    return(
        <>
            <h1>שלום   { (activeUser) ? activeUser.fname : "no user"}</h1>
            <p>Appointments</p>
            <AppointmentsTable appointments={appointments} />

         </>
    )
}
export default Appointments;