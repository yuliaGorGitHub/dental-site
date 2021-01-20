
import "./Appointments.css"
import React from 'react';  
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import Parse from 'parse';
import { useEffect } from "react";
import { useState } from "react";
import Appointment from '../../data/Appointment.js';


function Appointments (props)
{
    const {activeUser} = props;
    const [freeAppointments, setFreeAppointments] = useState([]);

    useEffect(()=> {

          const parseAppointment = Parse.Object.extend('Appointment');
          const query = new Parse.Query(parseAppointment);
          query.exists("doctorId");
          query.greaterThanOrEqualTo("appDateTime", new Date());
          query.doesNotExist("pacientId");
          query.addAscending("appDateTime");  

          query.find().then((parseAppointment) => {
            setFreeAppointments(parseAppointment.map(appointment => new Appointment(appointment)));               
          }, (error) => {
            console.error('Error while fetching Appointment', error);
          });

      }, [])


    return(
        <>
            <h1>שלום   { (activeUser) ? activeUser.fname : "no user"}</h1>
            <p>Appointments</p>
            <AppointmentsTable appointments={freeAppointments}  fromScreen="appoint"/>
         </>
    )
}
export default Appointments;