
import "./Appointments.css"
import React, { useMemo } from 'react';  
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import Parse from 'parse';
import { useEffect } from "react";
import { useState } from "react";
import Appointment from '../../data/Appointment.js';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Input, MenuItem, ThemeProvider, Select, CssBaseline, createMuiTheme } from "@material-ui/core";



function Appointments (props)
{

    const {activeUser, jobs, employeeArray} = props;
    const [freeAppointments, setFreeAppointments] = useState([]);  
    const [selectedJob, setSelectedJob] = useState("");

    const {selectedJobHome} = useParams();

    useEffect( ()=> {
        async function fetchData(){
          const parseAppointment = Parse.Object.extend('Appointment');
          const query = new Parse.Query(parseAppointment);
          query.exists("doctorId");
          query.greaterThanOrEqualTo("appDateTime", new Date());
          query.equalTo("pacientId", null);
          query.addAscending("appDateTime");  

          query.find().then((parseAppointment) => {
            const allAppointments = parseAppointment.map(appointment => new Appointment(appointment));
            setFreeAppointments(allAppointments);             
          }, (error) => {
            console.error('Error while fetching Appointment', error);
          });
        }
        
        if(jobs.length > 0)
        {
          selectedJobHome ? setSelectedJob(selectedJobHome) : setSelectedJob(jobs[0].jobId);
          fetchData();
        }

    },[jobs]);

 
    function getAppointmentsByJob(appointments) {
      const employeesWithSelectedType = employeeArray.filter(item => item.jobId === selectedJob);
      let temp = [];
      for(let i = 0; i < appointments.length; i++)
      {
        for(let j = 0; j < employeesWithSelectedType.length; j++)
          {
            if(appointments[i].doctorId.id === employeesWithSelectedType[j].doctorId)
            temp = temp.concat(appointments[i]);
          }      
      }
      return temp;
    }

    const appointmentsToDisplay = getAppointmentsByJob(freeAppointments);

    const useStyles = makeStyles({
      select: {
          "& ul": {
              backgroundColor: "#cccccc",
          },
          "& li": {
              fontSize: 12,
              
          },
      },
  });

  const classes = useStyles();


      let viewSelect = []; 
      for(let i = 0; i < jobs.length; i++)
      {
          viewSelect.push(         
            <MenuItem value={jobs[i].jobId} key={jobs[i].jobId} 
              {...jobs[i].jobId===selectedJob ? "selected" : ""}>
                {jobs[i].jobHebrew}
            </MenuItem> 
            );
      }

    return(
        <>
            <h1>שלום   { (activeUser) ? activeUser.fname : "no user"}</h1>
            <p>Appointments</p>

            <Select
              name="name"
               labelWidth={100}
              autoWidth={false}

               value={selectedJob}
               onChange={event => setSelectedJob(event.target.value)}
               input={<Input id="name"/>}
               labelWidth={100}
             MenuProps={{ classes: { paper: classes.select } }} 
            >
              {viewSelect}
            </Select>
            {appointmentsToDisplay.length > 0 ?
              <AppointmentsTable appointments={appointmentsToDisplay}  fromScreen="appoint"/>
            :
              <p>סליחה, כרגע אין אפשרות להזמין תור</p>
            }
         </>
    )
}
export default Appointments;